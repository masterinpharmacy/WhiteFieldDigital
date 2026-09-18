import { isLocale } from "@/lib/i18n";

const htmlLang: Record<string, string> = { nl: "nl", en: "en", de: "de", me: "cnr" };

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const lang = isLocale(params.locale) ? htmlLang[params.locale] : "nl";
  return (
    <html lang={lang}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
