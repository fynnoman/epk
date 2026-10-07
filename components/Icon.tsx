type IconName =
  | "bolt"
  | "wrench"
  | "signal"
  | "sun"
  | "shield"
  | "plug"
  | "arrow"
  | "phone"
  | "map"
  | "check"
  | "sparkle";

type Props = {
  name: IconName;
  className?: string;
  size?: number;
  stroke?: number;
};

export function Icon({ name, className, size = 20, stroke = 1.6 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 1 5 5l-1.6 1.6-4-4L15.7 7.3" />
          <path d="M13 8 4 17l3 3 9-9" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common}>
          <path d="M4 20V8" />
          <path d="M10 20V4" />
          <path d="M16 20v-9" />
          <path d="M22 20v-5" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="M5.6 5.6l1.4 1.4" />
          <path d="M17 17l1.4 1.4" />
          <path d="M5.6 18.4 7 17" />
          <path d="M17 7l1.4-1.4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M9 2v4" />
          <path d="M15 2v4" />
          <path d="M7 10h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5v-3Z" />
          <path d="M12 18v4" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M4 5c0 9 6 15 15 15l2-4-5-2-2 2a11 11 0 0 1-5-5l2-2-2-5-4 1Z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M12 21s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M4 12l5 5L20 6" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <path d="M3 12h4" />
          <path d="M17 12h4" />
          <path d="M5.6 5.6 8 8" />
          <path d="M16 16l2.4 2.4" />
          <path d="M5.6 18.4 8 16" />
          <path d="M16 8l2.4-2.4" />
        </svg>
      );
  }
}
