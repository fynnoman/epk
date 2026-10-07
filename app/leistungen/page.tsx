import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BigImage } from "@/components/BigImage";
import { Icon } from "@/components/Icon";
import { CTABanner } from "@/components/CTABanner";
import { LEISTUNGEN, SITE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Elektroinstallation, Haushaltsgerätereparatur, Kommunikationstechnik, Photovoltaik, Sicherheitstechnik, Smart Home und Wallbox-Installation durch die EPK GmbH in Saarbrücken.",
};

const IMAGES: Record<(typeof LEISTUNGEN)[number]["slug"], string> = {
  elektroinstallation: IMG.installation,
  haushaltsgeraete: IMG.haushalt,
  kommunikationstechnik: IMG.kommunikation,
  photovoltaik: IMG.photovoltaik,
  "sicherheit-smart-home": IMG.smartHome,
  wallbox: IMG.wallbox,
};

export default function LeistungenPage() {
  return (
    <>
      {/* Head */}
      <section className="relative isolate overflow-hidden bg-aurora">
        <div className="container-page relative pt-32 pb-16 md:pt-48 md:pb-28">
          <Reveal>
            <span className="eyebrow">Leistungen</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display-tight mt-5 max-w-4xl text-[2.2rem] sm:text-[2.6rem] md:text-[4.4rem]">
              Elektrotechnik, nah an Ihrem Alltag.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft">
              Sechs Felder, ein Fachbetrieb. Ob klassische Installation,
              Photovoltaik, Smart Home oder eine Reparatur: wir sind der
              Ansprechpartner für die gesamte Elektrotechnik rund um Haus und
              Betrieb.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-2">
              {LEISTUNGEN.map((l) => (
                <a key={l.slug} href={`#${l.slug}`} className="chip">
                  <Icon name={l.icon} size={14} />
                  {l.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leistungen deep sections */}
      <div className="container-page section flex flex-col gap-28 md:gap-40">
        {LEISTUNGEN.map((l, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={l.slug}
              id={l.slug}
              className="grid scroll-mt-28 items-start gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={[
                  "order-first lg:order-none",
                  reverse ? "lg:order-last" : "",
                ].join(" ")}
              >
                <Reveal>
                  <div className="lg:sticky lg:top-28">
                    <BigImage
                      src={IMAGES[l.slug]}
                      alt={l.title}
                      ratio="landscape"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="flex flex-col gap-6">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper-50">
                      <Icon name={l.icon} size={20} />
                    </span>
                    <span className="eyebrow">
                      {String(i + 1).padStart(2, "0")} · Leistung
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="h-display text-[2rem] text-ink md:text-[2.6rem]">
                    {l.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                    {l.long}
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <ul className="mt-2 grid gap-3 sm:grid-cols-2">
                    {l.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 rounded-2xl bg-paper-100 px-4 py-3 text-[0.95rem] text-ink-soft"
                      >
                        <Icon
                          name="check"
                          size={14}
                          stroke={2}
                          className="mt-1 shrink-0 text-volt-500"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">
                      <Icon name="phone" size={14} />
                      Anfrage per Telefon
                    </a>
                    <Link href="/kontakt" className="btn-ghost">
                      Nachricht schreiben
                      <Icon name="arrow" size={14} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner />
    </>
  );
}
