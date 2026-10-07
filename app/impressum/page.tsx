import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <section className="container-narrow pb-24 pt-36 md:pt-44">
      <span className="eyebrow">Rechtliches</span>
      <h1 className="h-display mt-5 text-[2.4rem] text-ink md:text-[3rem]">
        Impressum
      </h1>
      <div className="mt-10 flex flex-col gap-10 text-[1rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Angaben gemäß § 5 TMG
          </h2>
          <address className="mt-4 not-italic">
            {SITE.legalName}
            <br />
            {SITE.street}
            <br />
            {SITE.zip} {SITE.city}
            <br />
            {SITE.country}
          </address>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">Vertreten durch</h2>
          <p className="mt-4">
            {SITE.owner}, Geschäftsleitung
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Registereintrag
          </h2>
          <p className="mt-4">
            Eintragung im Handelsregister. Registergericht: {SITE.court}.
            Registernummer: {SITE.hrb}.
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">Kontakt</h2>
          <p className="mt-4">Telefon: {SITE.phone}</p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-4">
            {SITE.owner}
            <br />
            {SITE.street}, {SITE.zip} {SITE.city}
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">Haftungshinweis</h2>
          <p className="mt-4">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte können wir jedoch keine Gewähr übernehmen. Für Inhalte
            externer Links sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">Bildnachweis</h2>
          <p className="mt-4">
            Die auf dieser Website dargestellten Bilder dienen während der
            Aufbauphase als Platzhalter und werden durch eigene Fotos ersetzt.
          </p>
        </section>
      </div>
    </section>
  );
}
