import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { name, email, company, message, locale } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? "White Field Digital <onboarding@resend.dev>",
    to: process.env.CONTACT_TO ?? "info@whitefielddigital.nl",
    replyTo: email,
    subject: `Nieuwe aanvraag via whitefielddigital.nl (${locale ?? "nl"})`,
    text: `Naam: ${name}\nE-mail: ${email}\nBedrijf: ${company || "-"}\n\n${message}`,
  });
  if (error) return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
