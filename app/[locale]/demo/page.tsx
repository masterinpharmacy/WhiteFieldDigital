import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales, type Locale } from "@/lib/i18n";
import LangSwitch from "@/components/LangSwitch";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const copy: Record<Locale, { title: string; lead: string; back: string; cta: string; chapters: string[] }> = {
  nl: {
    title: "Demo",
    lead: "In een halve minuut: wat White Field Digital bouwt, voor wie, en hoe het werkt.",
    back: "Terug naar de site",
    cta: "Neem contact op",
    chapters: ["Websites voor elke branche", "Opgeleverd werk", "Drie pakketten, één vaste prijs", "In vier stappen online"],
  },
  en: {
    title: "Demo",
    lead: "Half a minute on what White Field Digital builds, for whom, and how it works.",
    back: "Back to the site",
    cta: "Get in touch",
    chapters: ["Websites for every industry", "Delivered work", "Three packages, one fixed price", "Online in four steps"],
  },
  de: {
    title: "Demo",
    lead: "In einer halben Minute: was White Field Digital entwickelt, für wen, und wie es abläuft.",
    back: "Zurück zur Website",
    cta: "Kontakt aufnehmen",
    chapters: ["Websites für jede Branche", "Realisierte Projekte", "Drei Pakete, ein Festpreis", "In vier Schritten online"],
  },
  me: {
    title: "Demo",
    lead: "Za pola minuta: šta White Field Digital razvija, za koga, i kako to ide.",
    back: "Nazad na sajt",
    cta: "Kontaktirajte nas",
    chapters: ["Web sajtovi za svaku branšu", "Realizovani projekti", "Tri paketa, jedna fiksna cijena", "Online u četiri koraka"],
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const c = copy[params.locale];
  return { title: `${c.title} | White Field Digital`, description: c.lead, alternates: { canonical: `/${params.locale}/demo` } };
}

export default function DemoPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = copy[locale];
  const t = dictionaries[locale];

  return (
    <>
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href={`/${locale}`} className="text-sm font-medium text-stone hover:text-ink">
            {c.back}
          </Link>
          <LangSwitch current={locale} label={t.footer.langs} />
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{c.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-stone">{c.lead}</p>
        <video
          className="mt-10 w-full rounded-2xl border border-ink/10 bg-chalk"
          controls
          playsInline
          preload="metadata"
          poster="/demo-poster.jpg"
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>
        <ol className="mt-8 grid gap-3 text-sm text-stone sm:grid-cols-2">
          {c.chapters.map((ch, i) => (
            <li key={ch} className="flex gap-3">
              <span className="font-semibold text-field">{i + 1}</span>
              {ch}
            </li>
          ))}
        </ol>
        <Link href={`/${locale}#contact`} className="mt-12 inline-block rounded-full bg-field px-6 py-3 font-semibold text-white transition hover:bg-ink">
          {c.cta}
        </Link>
      </main>
    </>
  );
}
