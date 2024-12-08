import type { Variants } from "motion/react";

export const wrapperVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

export const itemVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};
