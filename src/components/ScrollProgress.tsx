"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 52, damping: 28, restDelta: 0.0008 });
  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-primary via-secondary to-tertiary"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
