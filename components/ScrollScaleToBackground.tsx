"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  overlay?: "soft" | "strong" | "none";
  startRounded?: boolean;
};

/**
 * The image begins as a rounded, inset hero in the centre of the viewport.
 * As the user scrolls, it scales up and loses its rounding until it fills the
 * following section as a full-bleed background for the children content.
 */
export function ScrollScaleToBackground({
  src,
  alt,
  children,
  overlay = "soft",
  startRounded = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 0.45, 1], [0.82, 1, 1.1]);
  const radiusRaw = useTransform(scrollYProgress, [0.1, 0.45], [36, 0]);
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);
  const scale = reduced ? 1 : scaleRaw;
  const radius = reduced ? 0 : radiusRaw;
  const y = reduced ? 0 : yRaw;

  const overlayStyle =
    overlay === "none"
      ? undefined
      : overlay === "strong"
        ? "linear-gradient(180deg, rgba(10,13,18,0.35) 0%, rgba(10,13,18,0.75) 100%)"
        : "linear-gradient(180deg, rgba(10,13,18,0.10) 0%, rgba(10,13,18,0.55) 100%)";

  return (
    <section ref={ref} className="relative">
      <div className="pointer-events-none sticky top-0 -z-10 h-[100svh] w-full overflow-hidden">
        <motion.div
          style={{
            scale,
            y,
            borderRadius: startRounded ? radius : 0,
          }}
          className="absolute inset-0 h-full w-full will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          {overlayStyle && (
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: overlayStyle }}
            />
          )}
        </motion.div>
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}
