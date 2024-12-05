"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import MeteorsRain from "./MeteorsRain";
import FirstScreen from "./FirstScreen";
import Saying from "./Saying";
import ScrollDown from "./ScrollDown";

const Welcome = () => {
  // 向下滚动半屏时整体逐渐淡化消失
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start end", "end end"],
  });
  const fadeOutTransform = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // 检查当前章节是否可见
  const isInView = useInView(scrollContainerRef);

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
      {/*章节不可见时销毁以节省资源（动画一直在操作 DOM ，可能会产生一些性能损失）*/}
      {isInView && <MeteorsRain />}

      {/*第一屏，用来做主题展示*/}
      <FirstScreen />

      {/*第二屏，用来放置 一句话 的动画*/}
      <Saying />

      {/*向下滚动提示*/}
      <ScrollDown />

      {/*第三屏，空的，用于填充空间，给背景足够长的淡化时间（滚动）*/}
      <div className="h-screen/2" />
    </motion.div>
  );
};

export default Welcome;
