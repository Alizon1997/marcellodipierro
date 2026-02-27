import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// ─── Secrets (set via: supabase secrets set KEY=value) ───────────────────────
//   RESEND_API_KEY   → free key at https://resend.com  (100 emails/day)
//   NOTIFY_EMAIL     → where to send lead alerts
//   WEBHOOK_SECRET   → shared secret between Postgres trigger and this function
// ─────────────────────────────────────────────────────────────────────────────
const RESEND_API_KEY   = Deno.env.get("RESEND_API_KEY")   ?? "";
const NOTIFY_EMAIL     = Deno.env.get("NOTIFY_EMAIL")     ?? "marcello@stormxdigital.com";
const WEBHOOK_SECRET   = Deno.env.get("WEBHOOK_SECRET")   ?? "";

interface Lead {
  id:         string;
  name:       string;
  email:      string;
  company?:   string | null;
  phone?:     string | null;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Verify shared secret so only our Postgres trigger can call this
  const incomingSecret = req.headers.get("x-webhook-secret") ?? "";
  if (WEBHOOK_SECRET && incomingSecret !== WEBHOOK_SECRET) {
    console.warn("Unauthorized webhook call — secret mismatch");
    return new Response("Unauthorized", { status: 401 });
  }

  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const submittedAt = new Date(lead.created_at).toLocaleString("it-IT", {
    timeZone:  "Europe/Rome",
    dateStyle: "long",
    timeStyle: "short",
  });

  const html = `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">

        <!-- Header -->
        <tr>
          <td style="background:#FF5500;padding:28px 36px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-.3px;">
              🔔&nbsp; Nuovo Lead — Storm X Digital
            </h1>
          </td>
        </tr>

        <!-- Lead details -->
        <tr>
          <td style="padding:32px 36px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;width:110px;">Nome</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;font-weight:600;">${esc(lead.name)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="mailto:${esc(lead.email)}" style="color:#FF5500;font-size:15px;text-decoration:none;">${esc(lead.email)}</a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Azienda</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;">${esc(lead.company ?? "—")}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Telefono</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="tel:${esc(lead.phone ?? "")}" style="color:#FF5500;font-size:15px;text-decoration:none;">${esc(lead.phone ?? "—")}</a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Data</td>
                <td style="padding:10px 0;color:#9ca3af;font-size:13px;">${submittedAt}</td>
              </tr>

            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:24px 36px 36px;text-align:center;">
            <a href="https://supabase.com/dashboard/project/fiyysxfwpewxjtwcmqat/editor"
               style="display:inline-block;background:#FF5500;color:#ffffff;padding:13px 30px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:-.2px;">
              Vedi tutti i lead &rarr;
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 36px;text-align:center;color:#9ca3af;font-size:11px;">
            Storm X Digital &middot; Notifica automatica
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // Send via Resend
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:    "Storm X <onboarding@resend.dev>",
      to:      [NOTIFY_EMAIL],
      subject: `🔔 Nuovo Lead: ${lead.name} — ${lead.company ?? lead.email}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { id } = await res.json();
  console.log(`✅ Email sent: ${id} → ${NOTIFY_EMAIL}`);

  return new Response(JSON.stringify({ ok: true, emailId: id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

function esc(s: string): string {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
