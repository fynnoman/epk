import { LEISTUNGEN } from "@/lib/data";

export function MarqueeBand() {
  const items = LEISTUNGEN.map((l) => l.title);
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ink/8 bg-paper-50 py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-50 to-transparent"
      />
      <div
        className="flex min-w-max gap-10"
        style={{
          animation: "marqueeX 42s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-[0.88rem] uppercase tracking-[0.26em] text-ink-muted"
          >
            {item}
            <span className="divider-dot" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
