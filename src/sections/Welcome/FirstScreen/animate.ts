import type { Variants } from "motion/react";

// 渐入的特效参数
export const fadeInContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const fadeInMembersVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
