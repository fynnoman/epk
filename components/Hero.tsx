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

  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const textYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const y = reduced ? 0 : yRaw;
  const scale = reduced ? 1 : scaleRaw;
  const opacity = reduced ? 1 : opacityRaw;
  const textY = reduced ? 0 : textYRaw;

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden min-h-[100svh] md:min-h-screen"
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
              "linear-gradient(180deg, rgba(10,13,18,0.55) 0%, rgba(10,13,18,0.35) 35%, rgba(10,13,18,0.78) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="container-page flex min-h-[100svh] flex-col justify-end pb-16 pt-32 text-paper-50 md:min-h-screen md:pb-28 md:pt-48"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] backdrop-blur-md md:text-[0.72rem]"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-volt-300" />
            {SITE.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="h-display-tight mt-5 text-[2.3rem] leading-[1.03] text-paper-50 sm:text-[2.8rem] md:text-[4.2rem] lg:text-[5.2rem]"
          >
            Elektrotechnik
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            für Saarbrücken.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.22 }}
            className="mt-6 max-w-xl text-[1rem] leading-relaxed text-paper-100/85 md:mt-7 md:text-[1.15rem]"
          >
            Von Installation und Photovoltaik über Wallbox bis zu Smart Home
            und Sicherheitstechnik. EPK ist Ihr Fachbetrieb vor Ort, mit
            festen Ansprechpartnern und sauberer Umsetzung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-9"
          >
            <a href={`tel:${SITE.phoneRaw}`} className="btn-volt">
              <Icon name="phone" size={16} />
              <span className="hidden sm:inline">{SITE.phone}</span>
              <span className="sm:hidden">Jetzt anrufen</span>
            </a>
            <Link href="/leistungen" className="btn-outline-light">
              Leistungen
              <Icon name="arrow" size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="mt-10 hidden max-w-xl grid-cols-2 gap-6 border-t border-white/20 pt-6 text-[0.9rem] text-paper-100/80 sm:grid md:mt-14 md:pt-7"
          >
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-paper-100/55 md:text-[0.72rem]">
                Sitz
              </div>
              <div className="mt-1.5">
                {SITE.street}, {SITE.zip} {SITE.city}
              </div>
            </div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-paper-100/55 md:text-[0.72rem]">
                Geschäftsleitung
              </div>
              <div className="mt-1.5">{SITE.owner}</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue, hidden on short landscape phones to avoid overlap */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center sm:flex md:bottom-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-paper-100/80 backdrop-blur md:text-[0.72rem]"
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
