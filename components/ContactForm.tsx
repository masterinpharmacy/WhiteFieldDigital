"use client";
import { useState } from "react";
import type { Dict, Locale } from "@/lib/i18n";

export default function ContactForm({ t, locale }: { t: Dict["contact"]; locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const input = "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-stone focus:border-field";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.name} aria-label={t.name} className={input} />
        <input name="email" type="email" required placeholder={t.email} aria-label={t.email} className={input} />
      </div>
      <input name="company" placeholder={t.company} aria-label={t.company} className={input} />
      <textarea name="message" required rows={5} placeholder={t.message} aria-label={t.message} className={input} />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-field px-6 py-3 font-semibold text-white transition hover:bg-ink disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.send}
        </button>
        <span className="text-sm text-stone">
          {t.alt} <a className="underline decoration-field underline-offset-4" href="mailto:info@whitefielddigital.nl">info@whitefielddigital.nl</a>
        </span>
      </div>
      {status === "sent" && <p role="status" className="text-field font-medium">{t.sent}</p>}
      {status === "error" && <p role="alert" className="text-red-700 font-medium">{t.error}</p>}
    </form>
  );
}
