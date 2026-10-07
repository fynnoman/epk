"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

type QA = { q: string; a: string };

type Props = {
  items: readonly QA[];
};

export function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-ink/8 overflow-hidden rounded-3xl bg-paper-50 shadow-card ring-1 ring-ink/5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-ink/[0.02] md:px-8"
            >
              <span className="h-display text-[1.1rem] text-ink md:text-[1.25rem]">
                {item.q}
              </span>
              <span
                className={[
                  "mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-transform",
                  isOpen ? "rotate-45 bg-ink text-paper-50" : "text-ink",
                ].join(" ")}
                aria-hidden
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-7 md:px-8">
                    <p className="max-w-prose text-[1rem] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
