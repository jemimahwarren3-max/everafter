"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { images } from "@/lib/images";

const links = [
  { href: "/about", label: "About", preview: images.editorialCouple },
  { href: "/services", label: "Services", preview: images.floralArbor },
  { href: "/packages", label: "Packages", preview: images.tablescape },
  { href: "/portfolio", label: "Portfolio", preview: images.ceremonyKiss },
  { href: "/venues", label: "Venues", preview: images.lakeChairs },
  { href: "/journal", label: "Journal", preview: images.savannaSunset },
  { href: "/contact", label: "Contact", preview: images.bouquetDetail },
];

export function FullScreenMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ink text-ivory"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6 sm:px-10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="font-heading text-2xl tracking-wide sm:text-3xl"
              >
                everafter
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="font-body text-xs tracking-label uppercase text-ivory/80 hover:text-ivory"
              >
                Close ✕
              </button>
            </div>

            <div className="mt-6 grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <nav className="flex flex-col">
                {links.map((link, i) => (
                  <div key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      transition={{
                        duration: 0.6,
                        delay: open ? 0.15 + i * 0.05 : 0,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        onMouseEnter={() => setHovered(i)}
                        className="group flex items-baseline gap-4 border-b border-ivory/10 py-4"
                      >
                        <span className="font-body text-xs text-taupe">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-4xl transition-opacity group-hover:opacity-70 sm:text-5xl lg:text-6xl">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>

              <div className="relative hidden aspect-[4/5] overflow-hidden lg:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hovered}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={links[hovered].preview}
                      alt={links[hovered].label}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col gap-2 pb-4 font-body text-xs tracking-label uppercase text-ivory/60 sm:flex-row sm:gap-8">
              <span>hello@everafter.co.zw</span>
              <span>+263 77 000 0000</span>
              <span>Harare</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
