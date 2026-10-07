"use client";

import { motion } from "framer-motion";
import { WERTE } from "@/lib/data";
import { Icon } from "./Icon";

const ICONS = ["map", "check", "sparkle"] as const;

export function Pillars() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {WERTE.map((w, i) => (
        <motion.article
          key={w.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.65,
            ease: [0.23, 1, 0.32, 1],
            delay: i * 0.08,
          }}
          className="glass rounded-3xl p-7"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper-50">
            <Icon name={ICONS[i]} size={18} />
          </span>
          <h3 className="h-display mt-6 text-[1.35rem] text-ink">{w.title}</h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
            {w.body}
          </p>
        </motion.article>
      ))}
    </div>
  );
}
