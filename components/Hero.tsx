"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Icon } from "./Icon";
import { SITE } from "@/lib/data";
import { IMG } from "@/lib/images";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const textYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y = reduced ? 0 : yRaw;
  const scale = reduced ? 1 : scaleRaw;
  const opacity = reduced ? 1 : opacityRaw;
  const textY = reduced ? 0 : textYRaw;

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <Image
          src={IMG.hero}
          alt="Elektrotechnik in professioneller Umsetzung"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,13,18,0.55) 0%, rgba(10,13,18,0.35) 35%, rgba(10,13,18,0.75) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="container-page flex min-h-screen flex-col justify-end pb-20 pt-40 text-paper-50 md:pb-28 md:pt-48"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-3 py-1 text-[0.72rem] uppercase tracking-[0.22em] backdrop-blur-md"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-volt-300" />
            {SITE.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="h-display-tight mt-6 text-[2.6rem] leading-[1.02] text-paper-50 md:text-[4.4rem] lg:text-[5.4rem]"
          >
            Strom, der leise
            <br />
            seine Arbeit tut.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.22 }}
            className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-paper-100/85 md:text-[1.15rem]"
          >
            Die EPK GmbH ist Ihr Elektro-Fachbetrieb in Saarbrücken. Vom Zählerplatz
            über die Photovoltaik bis zur Wallbox: wir setzen Elektrotechnik so um,
            dass sie zuverlässig läuft, ohne im Alltag aufzufallen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href={`tel:${SITE.phoneRaw}`} className="btn-volt">
              <Icon name="phone" size={16} />
              {SITE.phone}
            </a>
            <Link href="/leistungen" className="btn-outline-light">
              Leistungen ansehen
              <Icon name="arrow" size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-white/20 pt-7 text-[0.9rem] text-paper-100/80"
          >
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-paper-100/55">
                Sitz
              </div>
              <div className="mt-1.5">
                {SITE.street}, {SITE.zip} {SITE.city}
              </div>
            </div>
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-paper-100/55">
                Geschäftsleitung
              </div>
              <div className="mt-1.5">{SITE.owner}</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-paper-100/80 backdrop-blur"
        >
          <span className="relative inline-block h-4 w-4 overflow-hidden">
            <motion.span
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14" />
                <path d="M6 13l6 6 6-6" />
              </svg>
            </motion.span>
          </span>
          Scrollen
        </motion.span>
      </div>
    </section>
  );
}
