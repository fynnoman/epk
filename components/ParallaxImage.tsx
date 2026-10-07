"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  ratio?: "wide" | "landscape" | "portrait";
  rounded?: "2xl" | "3xl";
  strength?: number;
  className?: string;
};

const RATIOS = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
} as const;

export function ParallaxImage({
  src,
  alt,
  ratio = "landscape",
  rounded = "3xl",
  strength = 70,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}px`, `${strength}px`],
  );
  const y = reduced ? 0 : yRaw;

  const roundedClass = rounded === "3xl" ? "rounded-3xl" : "rounded-2xl";

  return (
    <div
      ref={ref}
      className={[
        "relative overflow-hidden shadow-edge",
        roundedClass,
        RATIOS[ratio],
        className ?? "",
      ].join(" ")}
    >
      <motion.div style={{ y }} className="absolute inset-[-10%] will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
