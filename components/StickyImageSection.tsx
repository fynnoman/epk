"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  body: ReactNode;
  side?: "left" | "right";
};

/**
 * Two-column scroll section: on wide screens the image stays sticky on one side
 * while a block of text scrolls past. On mobile, image sits on top.
 */
export function StickyImageSection({
  src,
  alt,
  eyebrow,
  title,
  body,
  side = "left",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);
  const y = reduced ? 0 : yRaw;
  const scale = reduced ? 1 : scaleRaw;

  const imageCol = (
    <div className="lg:sticky lg:top-24">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-edge">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 25%, transparent 75%, rgba(14,17,22,0.15) 100%)",
          }}
        />
      </div>
    </div>
  );

  const textCol = (
    <div className="flex flex-col gap-6">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-display text-[2.2rem] md:text-[3rem]">{title}</h2>
      <div className="prose-ink max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
        {body}
      </div>
    </div>
  );

  return (
    <section ref={ref} className="container-page section grid gap-10 lg:grid-cols-2 lg:gap-16">
      {side === "left" ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </section>
  );
}
