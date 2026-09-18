import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

export default function LangSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center gap-1 rounded-full border border-ink/15 p-1 text-sm">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === current ? "page" : undefined}
          className={`rounded-full px-3 py-1 font-medium uppercase transition ${
            l === current ? "bg-ink text-white" : "text-stone hover:text-ink"
          }`}
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
