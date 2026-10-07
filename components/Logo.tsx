import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: Props) {
  const ink = variant === "light" ? "#FBFBFD" : "#0E1116";
  const sub = variant === "light" ? "rgba(251,251,253,0.72)" : "#5B616E";
  const volt = "#1E54F0";

  return (
    <Link href="/" aria-label="EPK GmbH, Startseite" className="group inline-flex items-center gap-3">
      <span
        aria-hidden
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl"
        style={{
          background:
            variant === "light"
              ? "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))"
              : "linear-gradient(180deg, #ffffff, #F5F6F8)",
          boxShadow:
            variant === "light"
              ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.1)"
              : "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(14,17,22,0.08)",
          border:
            variant === "light"
              ? "1px solid rgba(255,255,255,0.25)"
              : "1px solid rgba(14,17,22,0.06)",
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path
            d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
            fill={volt}
            stroke={volt}
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1rem] tracking-tightish"
          style={{ color: ink }}
        >
          EPK <span style={{ color: volt }}>GmbH</span>
        </span>
        {!compact && (
          <span className="mt-0.5 text-[0.72rem] tracking-[0.18em] uppercase" style={{ color: sub }}>
            Elektro Saarbrücken
          </span>
        )}
      </span>
    </Link>
  );
}
