"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SkillBar({ proficiency }: { proficiency: number }) {
  const reduce = useReducedMotion();
  const pct = (proficiency / 5) * 100;
  if (reduce) {
    return (
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#1a1a1a]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${pct}%` }}
        />
      </div>
    );
  }
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[#1a1a1a]">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
