import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <section className="container-narrow pb-20 pt-28 md:pb-24 md:pt-44">
      <span className="eyebrow">Rechtliches</span>
      <h1 className="h-display mt-5 text-[2rem] text-ink sm:text-[2.4rem] md:text-[3rem]">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 flex flex-col gap-10 text-[1rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Verantwortliche Stelle
          </h2>
          <p className="mt-4">
            {SITE.legalName}
            <br />
            {SITE.street}, {SITE.zip} {SITE.city}
            <br />
            Telefon: {SITE.phone}
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Allgemeiner Hinweis
          </h2>
          <p className="mt-4">
            Diese Website verarbeitet personenbezogene Daten ausschließlich im
            Rahmen der gesetzlichen Vorgaben (DSGVO und BDSG). Nachfolgend
            informieren wir über Art, Umfang und Zweck der Verarbeitung.
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Zugriffsdaten und Hosting
          </h2>
          <p className="mt-4">
            Bei einem Besuch dieser Website werden durch den Hosting-Provider
            technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des
            Zugriffs, aufgerufene Ressource) in Server-Logfiles gespeichert.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen findet nicht
            statt.
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Kontaktaufnahme
          </h2>
          <p className="mt-4">
            Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch
            kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten
            ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Ihre Rechte
          </h2>
          <p className="mt-4">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
            Löschung und Einschränkung der Verarbeitung Ihrer gespeicherten
            Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch
            gegen die Verarbeitung. Zudem besteht ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde.
          </p>
        </section>

        <section>
          <h2 className="h-display text-[1.2rem] text-ink">
            Externe Dienste
          </h2>
          <p className="mt-4">
            Diese Website nutzt in der aktuellen Fassung keine externen
            Tracker oder Marketing-Scripte. Bild-Platzhalter werden während
            der Aufbauphase von einem Content-Delivery-Dienst geladen und
            vor dem Produktivbetrieb durch eigene Dateien ersetzt.
          </p>
        </section>
      </div>
    </section>
  );
}
