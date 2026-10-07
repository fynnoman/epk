import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light, airy surfaces inspired by Apple software marketing
        paper: {
          50: "#FBFBFD",
          100: "#F5F6F8",
          200: "#EDEEF2",
          300: "#E1E3EA",
        },
        // Deep neutral ink
        ink: {
          DEFAULT: "#0E1116",
          soft: "#2B2F38",
          muted: "#5B616E",
          faint: "#8E94A1",
        },
        // Electric accent (quiet, confident, not neon)
        volt: {
          50: "#E9F0FF",
          100: "#CFDCFF",
          200: "#9FBAFF",
          300: "#6F97FF",
          400: "#3F74FF",
          500: "#1E54F0",
          600: "#1540C6",
          700: "#102F94",
        },
        // Warm counterpoint for hand-made / local trust
        copper: {
          100: "#F3E5D4",
          300: "#D7A676",
          500: "#B87333",
          700: "#7E4D1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tightest: "-0.03em",
      },
      boxShadow: {
        glass:
          "0 1px 0 rgba(255,255,255,0.65) inset, 0 10px 40px rgba(14,17,22,0.08)",
        card:
          "0 1px 0 rgba(255,255,255,0.6) inset, 0 2px 6px rgba(14,17,22,0.04), 0 20px 60px rgba(14,17,22,0.08)",
        edge:
          "0 0 0 1px rgba(14,17,22,0.06), 0 20px 60px rgba(14,17,22,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        subtleRise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        subtleRise: "subtleRise 0.7s cubic-bezier(0.23,1,0.32,1) both",
        shimmer: "shimmer 2.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
