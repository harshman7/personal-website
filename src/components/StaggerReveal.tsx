"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { defaultRevealViewport, STAGGER, staggerContainerVariants, staggerItemVariants } from "@/lib/motion";

export { staggerContainerVariants, staggerItemVariants };

/** Viewport-driven stagger: children use StaggerItem one-by-one. */
export function StaggerContainer({
  children,
  className,
  stagger = STAGGER.section,
  delayChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultRevealViewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}
