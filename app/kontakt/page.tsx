import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SITE, LEISTUNGEN } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "EPK GmbH in Saarbrücken erreichen. Telefon, Anschrift und Anfrageformular für Elektrotechnik.",
};

export default function KontaktPage() {
  const mailBody = encodeURIComponent(
    "Guten Tag,\n\nich interessiere mich für folgendes Thema:\n\n\nMit freundlichen Grüßen",
  );
  const mapsQuery = encodeURIComponent(
    `${SITE.legalName}, ${SITE.street}, ${SITE.zip} ${SITE.city}`,
  );

  return (
    <>
      <section className="relative isolate overflow-hidden bg-aurora">
        <div className="container-page relative pt-40 pb-20 md:pt-48 md:pb-24">
          <Reveal>
            <span className="eyebrow">Kontakt</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display-tight mt-5 max-w-4xl text-[2.6rem] md:text-[4.4rem]">
              Ein Anruf reicht.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft">
              Beschreiben Sie kurz, worum es geht. Wir melden uns in der
              Regel am selben oder nächsten Arbeitstag mit einem Vorschlag.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group flex h-full flex-col justify-between rounded-3xl bg-ink p-7 text-paper-50 shadow-edge transition-transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-volt-500 text-paper-50">
                  <Icon name="phone" size={18} />
                </span>
                <span className="eyebrow" style={{ color: "#9FBAFF" }}>
                  Telefon
                </span>
              </div>
              <div className="mt-10">
                <div className="h-display text-[1.9rem] text-paper-50">
                  {SITE.phone}
                </div>
                <div className="mt-3 text-[0.9rem] text-paper-100/70">
                  {SITE.owner}, Geschäftsleitung
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper-50">
                  <Icon name="map" size={18} />
                </span>
                <span className="eyebrow">Standort</span>
              </div>
              <div className="mt-10">
                <div className="h-display text-[1.5rem] text-ink">
                  {SITE.street}
                </div>
                <div className="mt-2 text-[1rem] text-ink-soft">
                  {SITE.zip} {SITE.city}
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="link-formal mt-5 inline-flex text-[0.95rem]"
                >
                  Route planen
                  <Icon name="arrow" size={14} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper-50">
                  <Icon name="sparkle" size={18} />
                </span>
                <span className="eyebrow">Was Sie uns schicken können</span>
              </div>
              <ul className="mt-8 flex flex-col gap-2 text-[0.98rem] text-ink-soft">
                <li className="flex items-start gap-2">
                  <Icon
                    name="check"
                    size={14}
                    stroke={2}
                    className="mt-1 shrink-0 text-volt-500"
                  />
                  Fotos der aktuellen Situation
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    name="check"
                    size={14}
                    stroke={2}
                    className="mt-1 shrink-0 text-volt-500"
                  />
                  Grundriss, falls vorhanden
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    name="check"
                    size={14}
                    stroke={2}
                    className="mt-1 shrink-0 text-volt-500"
                  />
                  Wunschtermin oder zeitlicher Rahmen
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Formular */}
      <section className="container-page section">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">Anfrage</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 text-[2rem] text-ink md:text-[2.6rem]">
                Nachricht senden.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
                Füllen Sie das Formular aus. Mit einem Klick auf
                {" "}
                <span className="font-medium text-ink">Anfrage senden</span>
                {" "}
                öffnet sich Ihr E-Mail-Programm mit allen Angaben, Sie
                prüfen und senden die Mail selbst ab.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-3xl bg-paper-100 p-6">
                <div className="eyebrow-muted">Lieber telefonisch?</div>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="h-display mt-3 block text-[1.8rem] text-ink"
                >
                  {SITE.phone}
                </a>
                <div className="mt-2 text-[0.95rem] text-ink-soft">
                  {SITE.owner}, Geschäftsleitung
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              action="mailto:"
              method="post"
              encType="text/plain"
              className="glass flex flex-col gap-5 rounded-3xl p-7 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="eyebrow-muted">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-2xl border border-ink/10 bg-paper-50 px-4 py-3 text-[1rem] text-ink shadow-inner outline-none transition-colors focus:border-volt-500"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="eyebrow-muted">Telefon</span>
                  <input
                    type="tel"
                    name="telefon"
                    className="rounded-2xl border border-ink/10 bg-paper-50 px-4 py-3 text-[1rem] text-ink shadow-inner outline-none transition-colors focus:border-volt-500"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="eyebrow-muted">E-Mail</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-2xl border border-ink/10 bg-paper-50 px-4 py-3 text-[1rem] text-ink shadow-inner outline-none transition-colors focus:border-volt-500"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="eyebrow-muted">Leistung</span>
                <select
                  name="leistung"
                  defaultValue=""
                  className="rounded-2xl border border-ink/10 bg-paper-50 px-4 py-3 text-[1rem] text-ink shadow-inner outline-none transition-colors focus:border-volt-500"
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {LEISTUNGEN.map((l) => (
                    <option key={l.slug} value={l.title}>
                      {l.title}
                    </option>
                  ))}
                  <option value="Allgemein">Allgemeine Anfrage</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="eyebrow-muted">Ihr Anliegen</span>
                <textarea
                  name="nachricht"
                  rows={6}
                  required
                  className="rounded-2xl border border-ink/10 bg-paper-50 px-4 py-3 text-[1rem] text-ink shadow-inner outline-none transition-colors focus:border-volt-500"
                />
              </label>

              <p className="text-[0.82rem] text-ink-muted">
                Mit dem Absenden öffnet sich Ihr E-Mail-Programm. So
                behalten Sie die Hoheit über Ihre Daten.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="btn-primary"
                  formAction={`mailto:?subject=Anfrage über epk-saarbruecken.de&body=${mailBody}`}
                >
                  Anfrage senden
                  <Icon name="arrow" size={14} />
                </button>
                <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">
                  <Icon name="phone" size={14} />
                  {SITE.phone}
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-24">
        <Reveal>
          <ParallaxImage
            src={IMG.installation}
            alt="Elektroinstallation in der Umsetzung"
            ratio="wide"
            strength={60}
          />
        </Reveal>
      </section>
    </>
  );
}
