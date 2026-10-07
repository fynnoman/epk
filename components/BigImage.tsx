"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  ratio?: "wide" | "landscape" | "portrait" | "cinema";
  rounded?: "none" | "lg" | "2xl" | "3xl";
  priority?: boolean;
};

const RATIOS: Record<NonNullable<Props["ratio"]>, string> = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  cinema: "aspect-[21/9]",
};

const ROUND: Record<NonNullable<Props["rounded"]>, string> = {
  none: "",
  lg: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export function BigImage({
  src,
  alt,
  ratio = "wide",
  rounded = "3xl",
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.0, 1.08]);
  const y = reduced ? 0 : yRaw;
  const scale = reduced ? 1 : scaleRaw;

  return (
    <div
      ref={ref}
      className={[
        "relative overflow-hidden shadow-edge",
        ROUND[rounded],
        RATIOS[ratio],
      ].join(" ")}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover"
          priority={priority}
        />
      </motion.div>
      {/* Subtle inner highlight for glass-adjacent feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 20%, transparent 80%, rgba(14,17,22,0.18) 100%)",
        }}
      />
    </div>
  );
}
