import Link from "next/link";
import { Icon } from "./Icon";
import type { Leistung } from "@/lib/data";

type Props = {
  item: Leistung;
  index: number;
};

export function LeistungCard({ item, index }: Props) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-paper-50 p-7 shadow-card ring-1 ring-ink/5 transition-shadow hover:shadow-edge">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-volt-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper-50">
            <Icon name={item.icon} size={20} />
          </span>
          <span className="text-[0.72rem] font-medium tracking-[0.22em] text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="h-display text-[1.5rem] text-ink">{item.title}</h3>
        <p className="text-[0.98rem] leading-relaxed text-ink-soft">
          {item.short}
        </p>
        <ul className="mt-1 flex flex-col gap-1.5 text-[0.9rem] text-ink-soft">
          {item.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2">
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
      </div>

      <div className="relative mt-7 flex items-center justify-between pt-5">
        <Link
          href={`/leistungen#${item.slug}`}
          className="link-formal text-[0.95rem]"
        >
          Mehr erfahren
          <Icon name="arrow" size={14} />
        </Link>
      </div>
    </article>
  );
}
