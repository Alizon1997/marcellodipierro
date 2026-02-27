-- ============================================================
--  Storm X Digital — Leads table + instant notification
--  Migration: 20260227000000_create_leads_table
-- ============================================================

-- 1. Enable pg_net (outbound HTTP from Postgres)
create extension if not exists pg_net schema extensions;

-- 2. Create the leads table
create table if not exists public.leads (
  id            uuid        primary key default gen_random_uuid(),
  name          text        not null,
  email         text        not null,
  company       text,
  phone         text,
  created_at    timestamptz not null default now()
);

-- Index for quick queries by date
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- 3. Row Level Security
alter table public.leads enable row level security;

-- Website visitors can insert (form submissions)
create policy "allow_public_insert"
  on public.leads for insert
  with check (true);

-- Only authenticated users (you, in the dashboard) can read
create policy "allow_authenticated_select"
  on public.leads for select
  using (auth.role() = 'authenticated');

-- 4. Trigger function — fires Edge Function on every new lead
--    The Edge Function URL is hardcoded; it verifies the call
--    using the WEBHOOK_SECRET stored in Supabase Secrets.
create or replace function public.notify_new_lead()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  _webhook_secret text;
  _function_url   text := 'https://buomcjwazcerojfkarub.supabase.co/functions/v1/notify-new-lead';
begin
  -- Read the webhook secret we stored via: supabase secrets set WEBHOOK_SECRET=...
  _webhook_secret := current_setting('app.settings.webhook_secret', true);

  -- Fire-and-forget HTTP POST via pg_net (non-blocking)
  perform net.http_post(
    url     := _function_url,
    body    := to_jsonb(NEW)::text::jsonb,
    headers := jsonb_build_object(
      'Content-Type',   'application/json',
      'x-webhook-secret', coalesce(_webhook_secret, '')
    )
  );

  return NEW;
end;
$$;

-- 5. Attach trigger to leads table
drop trigger if exists on_new_lead on public.leads;
create trigger on_new_lead
  after insert on public.leads
  for each row
  execute function public.notify_new_lead();
