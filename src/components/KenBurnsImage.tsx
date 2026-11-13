"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function KenBurnsImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.12 }}
      transition={{ duration: 22, ease: "linear" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
  );
}
