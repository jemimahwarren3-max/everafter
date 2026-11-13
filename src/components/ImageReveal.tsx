"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-ink"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right" }}
      />
    </div>
  );
}
