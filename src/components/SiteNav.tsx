"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { FullScreenMenu } from "./FullScreenMenu";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled && !open;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          dark ? "bg-ivory/90 backdrop-blur-sm shadow-[0_1px_0_rgba(41,40,33,0.08)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <Link
            href="/"
            className={`font-heading text-2xl tracking-wide transition-colors duration-500 sm:text-3xl ${
              dark ? "text-ink" : "text-ivory"
            }`}
          >
            everafter
          </Link>

          <div className="flex items-center gap-6">
            <Magnetic strength={0.35} className="hidden sm:block">
              <Link
                href="/consultation"
                className={`inline-block border px-5 py-2 font-body text-xs tracking-label uppercase transition-colors duration-500 ${
                  dark
                    ? "border-ink/60 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
                    : "border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
                }`}
              >
                Begin Your Story
              </Link>
            </Magnetic>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              data-cursor={open ? "Close" : "Menu"}
              className={`flex items-center gap-2 font-body text-xs tracking-label uppercase transition-colors duration-500 ${
                dark ? "text-ink" : "text-ivory"
              }`}
            >
              <span className="hidden sm:inline">
                {open ? "Close" : "Menu"}
              </span>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
