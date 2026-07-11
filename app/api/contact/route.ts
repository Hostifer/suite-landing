const RESEND_EMAILS_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
  fullName?: string;
  companyName?: string;
  workEmail?: string;
  phone?: string;
  numUsers?: string;
  existingDomain?: string;
  plan?: string;
  message?: string;
};

const PLAN_LABELS: Record<string, string> = {
  starter: "Starter",
  business: "Business",
  dedicated: "Dedicated",
  unsure: "Not sure yet",
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function clean(value: unknown, maxLength = 500) {
  return asString(value).slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fieldLine(label: string, value: string) {
  return `${label}: ${value || "Not provided"}`;
}

function tableRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#4b5563;font-weight:700;width:180px;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = clean(payload.fullName, 120);
  const companyName = clean(payload.companyName, 120);
  const workEmail = clean(payload.workEmail, 160).toLowerCase();
  const phone = clean(payload.phone, 80);
  const numUsers = clean(payload.numUsers, 20);
  const existingDomain = clean(payload.existingDomain, 120);
  const plan = PLAN_LABELS[clean(payload.plan, 40)] ?? "Business";
  const message = clean(payload.message, 2000);

  if (!workEmail || !isEmail(workEmail)) {
    return Response.json(
      { error: "Please enter a valid work email." },
      { status: 400 },
    );
  }

  const subjectCompany = companyName || fullName || workEmail;
  const subject = `Hostifer Suite contact request: ${subjectCompany}`;
  const text = [
    "New Hostifer Suite contact request",
    "",
    fieldLine("Full name", fullName),
    fieldLine("Company name", companyName),
    fieldLine("Work email", workEmail),
    fieldLine("Phone", phone),
    fieldLine("Number of users", numUsers),
    fieldLine("Existing domain", existingDomain),
    fieldLine("Interested plan", plan),
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
      <h1 style="font-size:20px;margin:0 0 16px;">New Hostifer Suite contact request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px;border:1px solid #e5e7eb;">
        <tbody>
          ${tableRow("Full name", fullName)}
          ${tableRow("Company name", companyName)}
          ${tableRow("Work email", workEmail)}
          ${tableRow("Phone", phone)}
          ${tableRow("Number of users", numUsers)}
          ${tableRow("Existing domain", existingDomain)}
          ${tableRow("Interested plan", plan)}
        </tbody>
      </table>
      <h2 style="font-size:16px;margin:24px 0 8px;">Message</h2>
      <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message || "Not provided")}</p>
    </div>
  `;

  const response = await fetch(RESEND_EMAILS_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `no-reply@ramybouchareb.me`,
      to: ["rami.bouchareb@hostifer.me"],
      reply_to: workEmail,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    let resendError = "Could not send email.";

    try {
      const body = (await response.json()) as { message?: string; error?: string };
      resendError = body.message ?? body.error ?? resendError;
    } catch {
      // Keep the generic message when Resend returns a non-JSON error.
    }

    console.error("Resend contact email failed", {
      status: response.status,
      error: resendError,
    });

    return Response.json(
      { error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
