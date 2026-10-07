"use client";

import { motion } from "framer-motion";
import { ABLAUF } from "@/lib/data";

export function AblaufSteps() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block"
      />
      {ABLAUF.map((step, i) => (
        <motion.li
          key={step.step}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.65,
            ease: [0.23, 1, 0.32, 1],
            delay: i * 0.08,
          }}
          className="relative flex flex-col gap-4 rounded-3xl bg-paper-50 p-7 shadow-card ring-1 ring-ink/5"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper-50 font-medium">
              {step.step}
            </span>
            <span className="text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
              Schritt {i + 1}
            </span>
          </div>
          <h3 className="h-display text-[1.4rem] text-ink">{step.title}</h3>
          <p className="text-[0.98rem] leading-relaxed text-ink-soft">
            {step.body}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
