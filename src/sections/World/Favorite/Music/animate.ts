import type { Variants } from "motion/react";

export const wrapperVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};
