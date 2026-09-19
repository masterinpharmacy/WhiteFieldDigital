import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";
import LangSwitch from "@/components/LangSwitch";
import SiteThumb from "@/components/SiteThumb";
import BuilderAnimation from "@/components/BuilderAnimation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = dictionaries[params.locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: { title: t.meta.title, description: t.meta.description, locale: params.locale },
  };
}

const sectors: Record<string, string[]> = {
  nl: ["Zorg", "Vastgoed", "Horeca", "Bouw", "Retail", "Advocatuur", "Accountancy", "Sport", "Onderwijs", "Logistiek", "Beauty", "Techniek"],
  en: ["Healthcare", "Real estate", "Hospitality", "Construction", "Retail", "Legal", "Accounting", "Sports", "Education", "Logistics", "Beauty", "Engineering"],
  de: ["Gesundheit", "Immobilien", "Gastronomie", "Bau", "Handel", "Recht", "Steuerberatung", "Sport", "Bildung", "Logistik", "Beauty", "Technik"],
  me: ["Zdravstvo", "Nekretnine", "Ugostiteljstvo", "Građevina", "Trgovina", "Pravo", "Računovodstvo", "Sport", "Obrazovanje", "Logistika", "Ljepota", "Tehnika"],
};

function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-bold tracking-tight">
      <span aria-hidden className="grid h-6 w-6 grid-cols-2 gap-0.5">
        <span className="rounded-[2px] bg-field" />
        <span className="rounded-[2px] border border-ink/30" />
        <span className="rounded-[2px] border border-ink/30" />
        <span className="rounded-[2px] border border-ink/30" />
      </span>
      White Field Digital
    </span>
  );
}

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = dictionaries[locale];
  const ticker = [...sectors[locale], ...sectors[locale]];

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href={`/${locale}`} className="text-ink">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-stone md:flex">
            <a href="#work" className="hover:text-ink">{t.nav.work}</a>
            <a href="#packages" className="hover:text-ink">{t.nav.packages}</a>
            <a href="#process" className="hover:text-ink">{t.nav.process}</a>
            <a href="#about" className="hover:text-ink">{t.nav.about}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LangSwitch current={locale} label={t.footer.langs} />
            <a href="#contact" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-field sm:inline-block">
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="field-grid absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[1.2fr_1fr]">
            <div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone md:text-xl">{t.hero.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#packages" className="rounded-full bg-field px-6 py-3 font-semibold text-white transition hover:bg-ink">
                {t.hero.primary}
              </a>
              <a href="#work" className="rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink transition hover:border-ink">
                {t.hero.secondary}
              </a>
              <span className="text-sm text-stone">{t.hero.note}</span>
            </div>
            </div>
            <BuilderAnimation />
          </div>
          <div className="relative border-y border-ink/10 bg-chalk py-4">
            <div className="flex w-max whitespace-nowrap marquee">
              {ticker.map((s, i) => (
                <span key={i} className="flex items-center px-6 text-sm font-semibold text-ink/70">
                  <span aria-hidden className="mr-6 inline-block h-2 w-2 rounded-[2px] bg-field" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{t.work.title}</h2>
            <p className="mt-4 max-w-2xl text-stone">{t.work.lead}</p>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {t.work.items.map((w) => (
                <li key={w.name} className="bg-white">
                  <a href={w.url} target="_blank" rel="noopener" className="group flex h-full flex-col p-5 transition hover:bg-chalk">
                    <SiteThumb slug={w.slug} name={w.name} />
                    <span className="mt-5 flex items-baseline justify-between gap-3">
                      <span className="text-lg font-bold leading-snug">{w.name}</span>
                      <span className="shrink-0 text-sm text-stone">{w.sector}</span>
                    </span>
                    <span className="mt-3 block min-h-[2.5rem] text-sm leading-relaxed text-stone">{w.what}</span>
                    <span className="mt-auto block pt-3 text-sm font-medium text-field underline-offset-4 group-hover:underline">
                      {w.url.replace("https://", "")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="packages" className="scroll-mt-20 bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{t.packages.title}</h2>
            <p className="mt-4 max-w-2xl text-white/70">{t.packages.lead}</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.packages.items.map((p) => (
                <article
                  key={p.name}
                  className={`flex flex-col rounded-2xl p-7 ${p.highlight ? "bg-white text-ink" : "border border-white/15"}`}
                >
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-1 ${p.highlight ? "text-stone" : "text-white/70"}`}>{p.tagline}</p>
                  <p className="mt-6 text-3xl font-extrabold tracking-tight">{p.price}</p>
                  <ul className={`mt-6 space-y-2.5 text-sm ${p.highlight ? "text-ink" : "text-white/85"}`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span aria-hidden className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] ${p.highlight ? "bg-field" : "bg-white/60"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-block rounded-full px-5 py-2.5 text-center font-semibold transition ${
                      p.highlight ? "bg-field text-white hover:bg-ink" : "border border-white/30 hover:bg-white hover:text-ink"
                    }`}
                  >
                    {p.cta}
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-white/15 p-7 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold">{t.packages.maintenance.name}</h3>
                <p className="mt-1 text-white/70">{t.packages.maintenance.text}</p>
              </div>
              <p className="text-2xl font-extrabold tracking-tight">{t.packages.maintenance.price}</p>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{t.process.title}</h2>
            <p className="mt-4 max-w-2xl text-stone">{t.process.lead}</p>
            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {t.process.steps.map((s, i) => (
                <li key={s.title} className="border-t-2 border-field pt-5">
                  <span className="text-sm font-semibold text-field">{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-chalk">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.about.title}</h2>
            <div className="space-y-5 leading-relaxed">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="text-sm text-stone">{t.about.stack}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.contact.title}</h2>
              <p className="mt-4 text-stone">{t.contact.lead}</p>
            </div>
            <ContactForm t={t.contact} locale={locale} />
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-stone md:flex-row md:items-center md:justify-between">
          <Logo />
          <p>{t.footer.line}</p>
        </div>
      </footer>
    </>
  );
}
