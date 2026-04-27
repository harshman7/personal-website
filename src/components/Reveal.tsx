"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const defaultViewport = { once: true, margin: "-10% 0px -8% 0px" as const, amount: "some" as const };

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
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={defaultViewport}
      transition={{ duration: 0.65, delay: staggerDelay, ease }}
    >
      {children}
    </motion.div>
  );
}
