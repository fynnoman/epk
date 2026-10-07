"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";
import { Icon } from "./Icon";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      className={[
        "fixed inset-x-0 z-40 flex justify-center px-4 transition-all duration-500 lg:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      ].join(" ")}
    >
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="glass-strong inline-flex items-center gap-3 rounded-full px-5 py-3 text-ink shadow-card"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-volt-500 text-paper-50">
          <Icon name="phone" size={16} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-muted">
            Direkt anrufen
          </span>
          <span className="font-medium">{SITE.phone}</span>
        </span>
      </a>
    </div>
  );
}
