"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, defaultRevealViewport, easeOutExpo } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
  index = 0,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Extra delay per list index (seconds) for manual one-by-one stagger */
  index?: number;
  /** Starting vertical offset in px */
  y?: number;
}) {
  const reduce = useReducedMotion();
  const staggerDelay = delay + index * 0.12;
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.99, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={defaultRevealViewport}
      transition={{ duration: DURATION.reveal, delay: staggerDelay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
