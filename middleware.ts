import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

/* Taal op basis van het domein: whitefielddigital.com -> en, .de -> de, .me -> me, .nl (en al het andere) -> nl.
   Alleen bij bezoek op de root ("/"); een expliciete taalkeuze in de URL blijft altijd staan. */
const byTld: Record<string, Locale> = { com: "en", de: "de", me: "me", nl: "nl" };

function localeForHost(host: string): Locale {
  const h = host.toLowerCase().split(":")[0];
  const tld = h.split(".").pop() ?? "";
  return byTld[tld] ?? defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname !== "/") return NextResponse.next();

  const host = req.headers.get("host") ?? "";
  const locale = localeForHost(host);
  const url = req.nextUrl.clone();
  url.pathname = `/${isLocale(locale) ? locale : defaultLocale}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/"] };
