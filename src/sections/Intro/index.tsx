"use client";

import MeteorsRain from "./MeteorsRain";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Intro = () => {
  // 向下滚动半屏时整体逐渐淡化消失
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start end", "end end"],
  });
  const fadeOutTransform = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div
      ref={scrollContainerRef}
      className="w-full h-full bg-zinc-950"
      initial={{
        opacity: 1,
      }}
      style={{
        opacity: fadeOutTransform,
      }}
    >
      {/*流星雨*/}
      <MeteorsRain />

      {/*第一屏，用来做主题展示*/}
      <FirstScreen />

      {/*第二屏，用来放置 一句话 的动画*/}
      <SecondScreen />

      {/*第三屏，空的，用于填充空间，给背景足够长的淡化时间（滚动）*/}
      <div className="h-[50vh]" />
    </motion.div>
  );
};

export default Intro;
