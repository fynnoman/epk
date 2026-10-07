import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Reveal } from "@/components/Reveal";
import { LeistungCard } from "@/components/LeistungCard";
import { ScrollScaleToBackground } from "@/components/ScrollScaleToBackground";
import { StickyImageSection } from "@/components/StickyImageSection";
import { ParallaxImage } from "@/components/ParallaxImage";
import { AblaufSteps } from "@/components/AblaufSteps";
import { Pillars } from "@/components/Pillars";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { LEISTUNGEN, FAQ as FAQ_ITEMS, SITE } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />

      <MarqueeBand />

      {/* Intro / position */}
      <section className="container-page section">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">Fachbetrieb Saarbrücken</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 text-[1.85rem] sm:text-[2.1rem] text-ink md:text-[3rem]">
                Elektrotechnik, in der jede Verbindung sitzt.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                Die EPK GmbH ist in Saarbrücken ansässig und arbeitet im
                gesamten Umland. Private Haushalte, kleine Betriebe und
                Hausverwaltungen bekommen bei uns das volle elektrotechnische
                Spektrum, von der klassischen Installation bis zur modernen
                Energie- und Gebäudetechnik.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                k: "Installation",
                v: "Neubau, Sanierung, Erweiterung",
              },
              {
                k: "Energie",
                v: "Photovoltaik und Wallbox",
              },
              {
                k: "Gebäude",
                v: "Smart Home und Sicherheitstechnik",
              },
              {
                k: "Service",
                v: "Reparatur und Fehlersuche",
              },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 0.06}>
                <div className="glass flex h-full flex-col justify-between rounded-3xl p-6">
                  <div className="eyebrow-muted">{item.k}</div>
                  <div className="h-display mt-6 text-[1.4rem] text-ink">
                    {item.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-scale image that becomes the background of a dark narrative section */}
      <ScrollScaleToBackground
        src={IMG.verteiler}
        alt="Elektro-Verteilung mit sauberer Leitungsführung"
        overlay="strong"
      >
        <div className="relative text-paper-50">
          <div className="container-page flex min-h-[85svh] flex-col justify-end py-20 md:py-40">
            <Reveal>
              <span className="eyebrow" style={{ color: "#9FBAFF" }}>
                Haltung
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-display-tight mt-5 max-w-3xl text-[2rem] sm:text-[2.4rem] md:text-[4rem]">
                Jede Leitung wird so verlegt, als würden wir sie morgen selbst
                prüfen.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-paper-100/80">
                Elektroarbeit ist meist unsichtbar. Umso wichtiger ist, wie sie
                dort gemacht wird, wo niemand hinschaut. Wir dokumentieren
                jeden Verteiler, kennzeichnen Leitungen klar und übergeben die
                Anlage so, dass auch ein späterer Besuch ruhig bleibt.
              </p>
            </Reveal>
          </div>
        </div>
      </ScrollScaleToBackground>

      {/* Leistungen Grid */}
      <section id="leistungen" className="container-page section">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="eyebrow">Leistungen</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 max-w-2xl text-[1.85rem] sm:text-[2.1rem] text-ink md:text-[3rem]">
                Sechs Felder, ein Verständnis.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/leistungen" className="link-formal">
              Alle Leistungen im Detail
              <Icon name="arrow" size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <LeistungCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sticky image narrative */}
      <StickyImageSection
        src={IMG.photovoltaik}
        alt="Photovoltaikanlage auf Wohnhausdach"
        eyebrow="Photovoltaik"
        title="Eine Anlage, die zum Verbrauch passt."
        body={
          <>
            <p>
              Eine PV-Anlage ist eine Entscheidung für Jahrzehnte. Deshalb
              beginnen wir nicht mit Modulen, sondern mit Ihrem Verbrauch.
              Erst wenn klar ist, wie Haushalt oder Betrieb Strom nutzt, legen
              wir Leistung, Ausrichtung und Speicher aus.
            </p>
            <p className="mt-5">
              Die Montage, der elektrische Anschluss, die Anmeldung beim
              Netzbetreiber und die Inbetriebnahme kommen aus einer Hand. Wenn
              später eine Wallbox dazukommen soll, planen wir den Weg dorthin
              schon mit.
            </p>
          </>
        }
      />

      <StickyImageSection
        src={IMG.wallbox}
        alt="Wallbox an einem Wohnhaus"
        eyebrow="Wallbox"
        title="E-Mobilität, sauber angeschlossen."
        side="right"
        body={
          <>
            <p>
              Eine Wallbox gehört fachgerecht an die Hauselektrik gebunden.
              Wir prüfen Hausanschluss, Verteiler und Leitungsweg,
              dimensionieren Absicherung und Querschnitt richtig und melden
              die Anlage beim Netzbetreiber an.
            </p>
            <p className="mt-5">
              Für Betriebe oder Mehrfamilienhäuser setzen wir
              Lastmanagement-Lösungen um, damit mehrere Fahrzeuge gleichzeitig
              laden können, ohne die bestehende Infrastruktur zu überfordern.
            </p>
          </>
        }
      />

      {/* Pillars */}
      <section className="container-page section">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Was uns ausmacht</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-5 text-[1.85rem] sm:text-[2.1rem] text-ink md:text-[3rem]">
              Verlässlich, in jedem Detail.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
              Ein guter Elektrobetrieb erkennt man an dem, was im Alltag nicht
              passiert. Darauf arbeiten wir hin.
            </p>
          </Reveal>
        </div>
        <div className="mt-12">
          <Pillars />
        </div>
      </section>

      {/* Big parallax image */}
      <section className="container-page">
        <Reveal>
          <ParallaxImage
            src={IMG.installation}
            alt="Elektroinstallation im Detail"
            ratio="wide"
            strength={80}
          />
        </Reveal>
      </section>

      {/* Ablauf */}
      <section className="container-page section">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="eyebrow">Ablauf</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 max-w-2xl text-[1.85rem] sm:text-[2.1rem] text-ink md:text-[3rem]">
                Von der Anfrage zur Übergabe.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
              Ein kurzer, nachvollziehbarer Weg. Keine Überraschungen, dafür
              klare Rückmeldung an den Punkten, an denen Entscheidungen
              anstehen.
            </p>
          </Reveal>
        </div>
        <div className="mt-14">
          <AblaufSteps />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">Häufige Fragen</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 text-[2.1rem] text-ink md:text-[2.8rem]">
                Was oft vorab gefragt wird.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
                Wenn Sie etwas Spezifisches klären möchten, rufen Sie uns an.
                {" "}
                <a href={`tel:${SITE.phoneRaw}`} className="link-formal">
                  {SITE.phone}
                </a>
              </p>
            </Reveal>
          </div>
          <div>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
