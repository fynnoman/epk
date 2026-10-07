import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center pt-40 pb-24 text-center">
      <span className="eyebrow">Fehler 404</span>
      <h1 className="h-display mt-5 max-w-xl text-[2.4rem] text-ink md:text-[3.2rem]">
        Diese Seite ist nicht erreichbar.
      </h1>
      <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-ink-soft">
        Die aufgerufene Adresse existiert nicht oder wurde verschoben. Kehren Sie
        bitte zur Startseite zurück.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn-primary">
          Zur Startseite
          <Icon name="arrow" size={14} />
        </Link>
        <Link href="/kontakt" className="btn-ghost">
          Kontakt
        </Link>
      </div>
    </section>
  );
}
