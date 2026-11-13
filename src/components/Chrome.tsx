"use client";

import type { ReactNode } from "react";
import { Preloader } from "./Preloader";
import { ScrollProgress } from "./ScrollProgress";
import { GrainOverlay } from "./GrainOverlay";
import { SmoothScroll } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";

export function Chrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <GrainOverlay />
      <SmoothScroll />
      <CustomCursor />
      {children}
    </>
  );
}
