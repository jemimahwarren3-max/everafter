"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HeroVideo } from "./HeroVideo";
import { SplitHeading } from "./SplitHeading";
import { Magnetic } from "./Magnetic";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <HeroVideo
        src="/video/hero-sunset-couple.mp4"
        poster="/video/hero-sunset-couple-poster.jpg"
        alt="Silhouette of a couple embracing at golden hour"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-body text-xs tracking-label uppercase text-ivory/80"
        >
          Luxury Weddings &amp; Bespoke Celebrations
        </motion.p>

        <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          <SplitHeading
            text="Some moments deserve to be extraordinary."
            delayStart={1.55}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.3 }}
          className="mt-6 max-w-md font-body text-base text-ivory/85 sm:text-lg"
        >
          Thoughtfully curated celebrations, beautifully brought to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.5 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Magnetic>
            <Link
              href="/consultation"
              className="inline-block bg-ivory px-7 py-3 font-body text-xs tracking-label uppercase text-ink transition-opacity hover:opacity-90"
            >
              Begin Your Story ↗
            </Link>
          </Magnetic>
          <Magnetic strength={0.3}>
            <Link
              href="/portfolio"
              className="inline-block font-body text-xs tracking-label uppercase text-ivory underline underline-offset-4"
            >
              Explore Our Work
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-body text-[10px] tracking-label uppercase text-ivory/70">
          Scroll
        </span>
        <motion.span
          className="h-10 w-px bg-ivory/50"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
