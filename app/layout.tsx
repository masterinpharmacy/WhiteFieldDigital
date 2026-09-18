import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whitefielddigital.nl"),
  title: "White Field Digital",
  description: "Websites en AI-oplossingen voor elke branche.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
