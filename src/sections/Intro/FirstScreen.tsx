"use client";

import MainSection from "./MainSection";
import ScrollDown from "./ScrollDown";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const FirstScreen = () => {
  // 向下滚动半屏时整体逐渐淡化消失
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"],
  });
  const fadeOutTransform = useTransform(scrollYProgress, [0.33, 0.9], [1, 0]); // 从 1/3 时候开始变淡，直至剩余 10% 时完全淡化消失

  return (
    <motion.div
      ref={scrollContainerRef}
      className="min-h-screen w-full flex flex-col items-center"
      initial={{
        opacity: 1,
      }}
      style={{
        opacity: fadeOutTransform,
      }}
    >
      {/*主体内容*/}
      <MainSection />

      {/*向下滚动提示*/}
      <ScrollDown />
    </motion.div>
  );
};

export default FirstScreen;
