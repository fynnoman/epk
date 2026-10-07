import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  compact?: boolean;
  withTagline?: boolean;
  className?: string;
};

/**
 * EPK brand mark. Rendered inline as SVG so it stays sharp at any size and
 * can swap between a dark-on-light and a light-on-dark variant.
 *
 * - `compact` renders only the EPK mark without the ELEKTROTECHNIK subtitle.
 * - `withTagline` renders the small eyebrow line under the mark.
 */
export function Logo({
  variant = "dark",
  compact = false,
  withTagline = false,
  className,
}: Props) {
  const navy = variant === "light" ? "#F2F5FB" : "#0F2B5C";
  const volt = variant === "light" ? "#6F97FF" : "#1E54F0";
  const tagline = variant === "light" ? "rgba(242,245,251,0.72)" : "#5B616E";

  // The EPK letters are drawn with simple rects + lines so the "K" can carry
  // the two-tone navy/blue detail from the brand.
  const Mark = (
    <svg
      viewBox="0 0 380 150"
      role="img"
      aria-label="EPK Elektrotechnik"
      className="h-full w-auto"
      preserveAspectRatio="xMinYMid meet"
    >
      {/* E */}
      <g fill={navy}>
        <rect x="0" y="0" width="22" height="110" />
        <rect x="0" y="0" width="96" height="22" />
        <rect x="0" y="44" width="82" height="22" />
        <rect x="0" y="88" width="96" height="22" />
      </g>
      {/* P */}
      <g fill={navy}>
        <rect x="120" y="0" width="22" height="110" />
        <rect x="120" y="0" width="72" height="22" />
        <rect x="178" y="0" width="22" height="66" />
        <rect x="120" y="44" width="72" height="22" />
      </g>
      {/* K: left stem navy, upper diagonal navy, lower diagonal volt-blue */}
      <g>
        <rect x="220" y="0" width="22" height="110" fill={navy} />
        <line
          x1="242"
          y1="55"
          x2="320"
          y2="0"
          stroke={navy}
          strokeWidth="22"
          strokeLinecap="square"
        />
        <line
          x1="242"
          y1="55"
          x2="320"
          y2="110"
          stroke={volt}
          strokeWidth="22"
          strokeLinecap="square"
        />
      </g>
      {!compact && (
        <text
          x="0"
          y="142"
          fill={navy}
          fontFamily="var(--font-sans), Inter, system-ui, sans-serif"
          fontSize="18"
          fontWeight={400}
          letterSpacing="6.2"
        >
          ELEKTROTECHNIK
        </text>
      )}
    </svg>
  );

  return (
    <Link
      href="/"
      aria-label="EPK Elektrotechnik, Startseite"
      className={["group inline-flex items-center gap-3", className ?? ""].join(" ")}
    >
      <span
        className="relative inline-flex items-center"
        style={{ height: compact ? 28 : 40 }}
      >
        {Mark}
      </span>
      {withTagline && (
        <span
          className="hidden text-[0.7rem] uppercase tracking-[0.22em] md:inline"
          style={{ color: tagline }}
        >
          Saarbrücken
        </span>
      )}
    </Link>
  );
}
