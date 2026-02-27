#!/usr/bin/env node
/**
 * dml.js — Storm X Digital
 * ─────────────────────────────────────────────────────────────────────────────
 * One-time setup script that:
 *   1. Creates the `leads` table in Supabase (with RLS)
 *   2. Enables pg_net for DB → HTTP calls
 *   3. Creates a Postgres trigger that fires the Edge Function on every INSERT
 *   4. Deploys the `notify-new-lead` Edge Function
 *   5. Sets the required secrets (RESEND_API_KEY, NOTIFY_EMAIL, WEBHOOK_SECRET)
 *
 * Usage:
 *   node dml.js
 *
 * You will be prompted for three things:
 *   • Supabase Personal Access Token  → supabase.com/dashboard/account/tokens
 *   • Service Role Secret Key         → supabase.com/dashboard/project/buomcjwazcerojfkarub/settings/api
 *   • Resend API Key                  → resend.com/api-keys  (free account, 100 emails/day)
 * ─────────────────────────────────────────────────────────────────────────────
 */

const https  = require('https');
const fs     = require('fs');
const path   = require('path');
const crypto = require('crypto');
const readline = require('readline');

// ── Project constants ─────────────────────────────────────────────────────────
const PROJECT_REF  = 'buomcjwazcerojfkarub';
const SUPABASE_URL = `https://${PROJECT_REF}.supabase.co`;
const NOTIFY_EMAIL = 'marcello@stormxdigital.com'; // change if needed
// ─────────────────────────────────────────────────────────────────────────────

// Generate a strong random secret for the webhook
const WEBHOOK_SECRET = crypto.randomBytes(32).toString('hex');

// ── Helpers ───────────────────────────────────────────────────────────────────
function ask(rl, question) {
  return new Promise(resolve => rl.question(question, a => resolve(a.trim())));
}

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
    req.end();
  });
}

async function managementApi(pat, method, path_, body) {
  const payload = body ? JSON.stringify(body) : undefined;
  return request({
    hostname: 'api.supabase.com',
    port: 443,
    path: path_,
    method,
    headers: {
      Authorization: `Bearer ${pat}`,
      'Content-Type': 'application/json',
      ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
    },
  }, payload);
}

async function runSQL(pat, sql) {
  const res = await managementApi(pat, 'POST', `/v1/projects/${PROJECT_REF}/database/query`, { query: sql });
  if (res.status >= 400) throw new Error(`SQL failed (${res.status}): ${JSON.stringify(res.body)}`);
  return res.body;
}

function ok(msg)   { console.log(`  ✅  ${msg}`); }
function fail(msg) { console.error(`  ❌  ${msg}`); }
function info(msg) { console.log(`  ℹ️   ${msg}`); }

// ── SQL statements ────────────────────────────────────────────────────────────
function buildSQL(webhookSecret, serviceRoleKey) {
  return `
-- 1. pg_net extension
create extension if not exists pg_net schema extensions;

-- 2. leads table
create table if not exists public.leads (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  company    text,
  phone      text,
  created_at timestamptz not null default now()
);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- 3. RLS
alter table public.leads enable row level security;
drop policy if exists "allow_public_insert"        on public.leads;
drop policy if exists "allow_authenticated_select" on public.leads;
create policy "allow_public_insert"
  on public.leads for insert with check (true);
create policy "allow_authenticated_select"
  on public.leads for select using (auth.role() = 'authenticated');

-- 4. Notify function
create or replace function public.notify_new_lead()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  perform net.http_post(
    url     := 'https://${PROJECT_REF}.supabase.co/functions/v1/notify-new-lead',
    body    := to_jsonb(NEW)::text::jsonb,
    headers := jsonb_build_object(
      'Content-Type',      'application/json',
      'Authorization',     'Bearer ${serviceRoleKey}',
      'x-webhook-secret',  '${webhookSecret}'
    )
  );
  return NEW;
end;
$$;

-- 5. Trigger
drop trigger if exists on_new_lead on public.leads;
create trigger on_new_lead
  after insert on public.leads
  for each row execute function public.notify_new_lead();
`;
}

// ── Edge Function deploy ──────────────────────────────────────────────────────
async function deployEdgeFunction(pat) {
  const fnPath = path.join(__dirname, 'supabase', 'functions', 'notify-new-lead', 'index.ts');
  if (!fs.existsSync(fnPath)) {
    throw new Error(`Edge Function not found at: ${fnPath}`);
  }
  const source = fs.readFileSync(fnPath, 'utf8');

  // Upsert (create or update) the Edge Function
  const res = await managementApi(
    pat,
    'POST',
    `/v1/projects/${PROJECT_REF}/functions`,
    {
      slug:       'notify-new-lead',
      name:       'notify-new-lead',
      verify_jwt: false,
      body:       source,
    }
  );

  // 409 = already exists → update instead
  if (res.status === 409) {
    const upd = await managementApi(
      pat,
      'PATCH',
      `/v1/projects/${PROJECT_REF}/functions/notify-new-lead`,
      { verify_jwt: false, body: source }
    );
    if (upd.status >= 400) throw new Error(`Function update failed (${upd.status}): ${JSON.stringify(upd.body)}`);
  } else if (res.status >= 400) {
    throw new Error(`Function deploy failed (${res.status}): ${JSON.stringify(res.body)}`);
  }
}

// ── Secrets ───────────────────────────────────────────────────────────────────
async function setSecrets(pat, resendKey) {
  const res = await managementApi(
    pat,
    'POST',
    `/v1/projects/${PROJECT_REF}/secrets`,
    [
      { name: 'RESEND_API_KEY',  value: resendKey },
      { name: 'NOTIFY_EMAIL',    value: NOTIFY_EMAIL },
      { name: 'WEBHOOK_SECRET',  value: WEBHOOK_SECRET },
    ]
  );
  if (res.status >= 400) throw new Error(`Secrets failed (${res.status}): ${JSON.stringify(res.body)}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Storm X Digital — Supabase Setup Script (dml.js)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('  You need 3 things:\n');
  console.log('  1) Personal Access Token:');
  console.log('     → https://supabase.com/dashboard/account/tokens\n');
  console.log('  2) Service Role Secret Key:');
  console.log('     → https://supabase.com/dashboard/project/buomcjwazcerojfkarub/settings/api\n');
  console.log('  3) Resend API Key (free account → 100 emails/day):');
  console.log('     → https://resend.com/api-keys\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const pat            = await ask(rl, '  Paste Personal Access Token:  ');
  const serviceRoleKey = await ask(rl, '  Paste Service Role Secret Key: ');
  const resendKey      = await ask(rl, '  Paste Resend API Key:           ');
  rl.close();

  console.log('\n  Setting up — this takes a few seconds...\n');

  // Step 1: Run SQL (create table + trigger)
  try {
    const sql = buildSQL(WEBHOOK_SECRET, serviceRoleKey);
    await runSQL(pat, sql);
    ok('leads table + RLS + pg_net trigger created');
  } catch (err) {
    fail(`SQL setup failed: ${err.message}`);
    process.exit(1);
  }

  // Step 2: Deploy Edge Function
  try {
    await deployEdgeFunction(pat);
    ok('Edge Function `notify-new-lead` deployed');
  } catch (err) {
    fail(`Edge Function deploy failed: ${err.message}`);
    info('You can deploy it manually in the Supabase dashboard');
  }

  // Step 3: Set secrets
  try {
    await setSecrets(pat, resendKey);
    ok(`Secrets set (RESEND_API_KEY, NOTIFY_EMAIL: ${NOTIFY_EMAIL}, WEBHOOK_SECRET)`);
  } catch (err) {
    fail(`Secrets failed: ${err.message}`);
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  ✅  All done! Full pipeline active:');
  console.log('');
  console.log('  Website form → Supabase leads table');
  console.log('                → Postgres trigger (on INSERT)');
  console.log('                  → Edge Function `notify-new-lead`');
  console.log('                    → Resend → Email to ' + NOTIFY_EMAIL);
  console.log('');
  console.log('  View leads: https://supabase.com/dashboard/project/buomcjwazcerojfkarub/editor');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main().catch(err => {
  console.error('\n  Fatal error:', err.message);
  process.exit(1);
});
