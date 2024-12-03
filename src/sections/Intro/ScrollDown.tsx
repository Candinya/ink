"use client";

import { fadeInMembersVariantProps } from "./animateProps";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "motion/react";

const ScrollDown = () => (
  <motion.div
    className="absolute bottom-8 text-white text-opacity-75 animate-bounce"
    variants={fadeInMembersVariantProps}
  >
    <IconChevronDown />
  </motion.div>
);

export default ScrollDown;
