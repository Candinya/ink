"use client";

import MainSection from "./MainSection";
import ScrollDown from "./ScrollDown";
import { motion } from "motion/react";
import {
  fadeInContainerVariantProps,
  fadeInMembersVariantProps,
} from "./animateProps";

const FirstScreen = () => {
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={fadeInContainerVariantProps}
    >
      {/*主体内容*/}
      <MainSection />

      {/*动画延迟占位符*/}
      <motion.div variants={fadeInMembersVariantProps} />

      {/*向下滚动提示*/}
      <ScrollDown />
    </motion.div>
  );
};

export default FirstScreen;
