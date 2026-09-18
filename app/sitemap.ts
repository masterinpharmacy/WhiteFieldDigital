import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((l) => [
    { url: `https://whitefielddigital.nl/${l}`, lastModified: now },
    { url: `https://whitefielddigital.nl/${l}/demo`, lastModified: now },
  ]);
}
