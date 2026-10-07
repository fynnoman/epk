"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "li" | "p" | "span";
  className?: string;
  once?: boolean;
  margin?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 14,
  as = "div",
  className,
  once = true,
  margin = "-80px",
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
