import type { Variants } from "motion/react";

export const wrapperVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const postVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};
