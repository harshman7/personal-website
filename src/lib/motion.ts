import type { Variants } from "framer-motion";

/** Smooth deceleration (Apple-style marketing ease) */
export const easeOutExpo: readonly [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  sectionReveal: 0.72,
  reveal: 0.7,
  hero: 0.68,
} as const;

export const STAGGER = {
  section: 0.15,
  title: 0.12,
  list: 0.14,
} as const;

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.98,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: DURATION.sectionReveal,
      ease: easeOutExpo,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.section,
      delayChildren: 0.08,
    },
  },
};

/** Hero load: slightly snappier stagger */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.14 },
  },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: DURATION.hero, ease: easeOutExpo },
  },
};

export const defaultRevealViewport = {
  once: true,
  margin: "-14% 0px -8% 0px" as const,
  amount: "some" as const,
};
