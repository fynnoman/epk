import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_MAIN, SITE } from "@/lib/data";
import { Icon } from "./Icon";

const META_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-paper-100">
      <div className="container-page grid gap-14 py-20 md:py-24 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <Logo compact variant="light" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-paper-100/75">
            Elektro-Fachbetrieb in Saarbrücken. Installation, Reparatur und
            Technik, die man im Alltag kaum bemerkt.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light">
              <Icon name="phone" size={14} />
              {SITE.phone}
            </a>
            <Link href="/kontakt" className="btn-outline-light">
              Anfrage senden
              <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>

        <div>
          <div className="eyebrow-muted" style={{ color: "#8E94A1" }}>
            Standort
          </div>
          <address className="mt-5 not-italic text-[0.98rem] leading-relaxed text-paper-100/85">
            {SITE.legalName}
            <br />
            {SITE.street}
            <br />
            {SITE.zip} {SITE.city}
            <br />
            {SITE.country}
          </address>
          <div className="mt-5 text-[0.85rem] text-paper-100/60">
            Registergericht {SITE.court}
            <br />
            {SITE.hrb}
          </div>
        </div>

        <div>
          <div className="eyebrow-muted" style={{ color: "#8E94A1" }}>
            Navigation
          </div>
          <ul className="mt-5 flex flex-col gap-2">
            {NAV_MAIN.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper-100/85 transition-colors hover:text-paper-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-page flex flex-col gap-3 py-6 text-[0.8rem] text-paper-100/55 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. Alle Rechte
            vorbehalten.
          </span>
          <ul className="flex flex-wrap items-center gap-5">
            {META_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-paper-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
