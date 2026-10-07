import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "EPK GmbH, Elektro-Fachbetrieb in Saarbrücken. Elektroinstallation, Photovoltaik, Wallbox, Smart Home, Sicherheitstechnik und Haushaltsgerätereparatur aus einer Hand.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.name,
    description:
      "Elektro-Fachbetrieb in Saarbrücken. Installation, Photovoltaik, Wallbox, Smart Home, Sicherheitstechnik und Reparatur.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${interTight.variable}`}>
      <body className="min-h-screen bg-paper-50 text-ink">
        <Header />
        <main className="relative flow-root">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
