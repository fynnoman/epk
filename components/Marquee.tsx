type Props = {
  items: string[];
  reverse?: boolean;
};

export function Marquee({ items, reverse = false }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-50 to-transparent"
      />
      <div
        className={[
          "flex min-w-max gap-10 py-3",
          reverse ? "animate-[marquee_38s_linear_infinite_reverse]" : "animate-[marquee_38s_linear_infinite]",
        ].join(" ")}
        style={{
          animationName: "marquee",
          animationDuration: "38s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-[0.95rem] uppercase tracking-[0.25em] text-ink-muted"
          >
            {item}
            <span className="divider-dot" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
