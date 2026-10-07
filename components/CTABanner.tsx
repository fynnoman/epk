import Link from "next/link";
import { Icon } from "./Icon";
import { SITE } from "@/lib/data";

export function CTABanner() {
  return (
    <section className="container-page section">
      <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-paper-50 shadow-edge md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 400px at 20% 0%, rgba(30,84,240,0.3), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(63,116,255,0.22), transparent 60%)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[0.72rem] uppercase tracking-[0.22em]"
              style={{ color: "rgba(251,251,253,0.8)" }}
            >
              <Icon name="sparkle" size={12} /> Erreichbar für Sie
            </span>
            <h2 className="h-display mt-5 text-[2.2rem] md:text-[3rem]">
              Wenn Strom wichtig ist, dann sauber gemacht.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-paper-100/80">
              Schreiben Sie uns Ihr Anliegen, oder rufen Sie direkt an. Wir
              melden uns in der Regel am selben oder am nächsten Arbeitstag.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-volt justify-start">
              <Icon name="phone" size={16} />
              Jetzt anrufen · {SITE.phone}
            </a>
            <Link href="/kontakt" className="btn-outline-light justify-start">
              Anfrage senden
              <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
