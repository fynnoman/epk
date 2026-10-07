import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { BigImage } from "@/components/BigImage";
import { ScrollScaleToBackground } from "@/components/ScrollScaleToBackground";
import { Pillars } from "@/components/Pillars";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { SITE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "EPK GmbH, Elektro-Fachbetrieb in Saarbrücken. Sitz, Geschäftsleitung und Haltung des Unternehmens.",
};

export default function UnternehmenPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-aurora">
        <div className="container-page relative pt-32 pb-16 md:pt-48 md:pb-28">
          <Reveal>
            <span className="eyebrow">Unternehmen</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display-tight mt-5 max-w-4xl text-[2.2rem] sm:text-[2.6rem] md:text-[4.4rem]">
              Ein Fachbetrieb aus Saarbrücken, kurze Wege, feste Ansprechpartner.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft">
              Die EPK GmbH ist in Saarbrücken ansässig und arbeitet im
              gesamten Umland. Wir sind erreichbar, verbindlich und bleiben
              bei einem einmal übernommenen Projekt bis zur sauberen Übergabe
              dran.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signature image, scales into background */}
      <ScrollScaleToBackground
        src={IMG.stadt}
        alt="Blick auf Saarbrücken"
        overlay="strong"
      >
        <div className="relative text-paper-50">
          <div className="container-page flex min-h-[80svh] flex-col justify-end py-20 md:py-36">
            <Reveal>
              <span className="eyebrow" style={{ color: "#9FBAFF" }}>
                Standort
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-display-tight mt-5 max-w-3xl text-[2.4rem] md:text-[3.6rem]">
                Zuhause in Saarbrücken.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-paper-100/80">
                Unser Sitz liegt in der Bergstraße 37. Von dort aus betreuen
                wir Haushalte, Hausverwaltungen und Betriebe in der Stadt und
                im angrenzenden Saarland.
              </p>
            </Reveal>
          </div>
        </div>
      </ScrollScaleToBackground>

      {/* Facts + text */}
      <section className="container-page section">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">Über uns</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 text-[2rem] text-ink md:text-[2.6rem]">
                Elektrotechnik mit Übersicht und Ruhe.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-soft">
                <p>
                  Die EPK GmbH wurde als Elektrobetrieb für Haushalte und
                  Gewerbe in Saarbrücken gegründet. Wir bündeln das
                  elektrotechnische Handwerk, von der klassischen Installation
                  über Kommunikationstechnik bis hin zu Photovoltaik, Smart
                  Home und Wallbox-Installation.
                </p>
                <p>
                  Unser Verständnis von Qualität ist ruhig und konsequent.
                  Jede Verteilung bekommt Zeit, jede Leitung einen klaren
                  Weg, jedes Projekt eine saubere Übergabe. Was wir ausliefern,
                  soll in zehn Jahren noch gut aussehen, wenn jemand die
                  Verteilerklappe öffnet.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { k: "Rechtsform", v: SITE.legalName },
              { k: "Geschäftsleitung", v: SITE.owner },
              { k: "Sitz", v: `${SITE.street}, ${SITE.zip} ${SITE.city}` },
              { k: "Register", v: `${SITE.court}, ${SITE.hrb}` },
              { k: "Telefon", v: SITE.phone },
              { k: "Erreichbarkeit", v: "Werktags, nach Vereinbarung" },
            ].map((item) => (
              <Reveal key={item.k}>
                <div className="glass flex h-full flex-col rounded-3xl p-6">
                  <div className="eyebrow-muted">{item.k}</div>
                  <div className="h-display mt-5 text-[1.15rem] text-ink">
                    {item.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page">
        <Reveal>
          <BigImage
            src={IMG.werkbank}
            alt="Werkzeug und Material in der Werkstatt"
            ratio="wide"
          />
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="container-page section">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Haltung</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-5 text-[2.1rem] text-ink md:text-[3rem]">
              Wie wir arbeiten.
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <Pillars />
        </div>
      </section>

      <section className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-paper-100 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="eyebrow">Direkt sprechen</span>
              <h3 className="h-display mt-4 text-[1.8rem] text-ink md:text-[2.2rem]">
                {SITE.owner} ist Ihr Ansprechpartner.
              </h3>
              <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-ink-soft">
                Für Rückfragen, Erstgespräche und Vor-Ort-Termine erreichen
                Sie uns direkt. Ein kurzer Anruf reicht aus.
              </p>
            </div>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary justify-start">
              <Icon name="phone" size={14} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
