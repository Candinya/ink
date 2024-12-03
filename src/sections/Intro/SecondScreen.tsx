"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { type MouseEvent, useRef } from "react";

const SecondScreen = () => {
  // 滚动触发动画
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"],
  });
  const mainOpacityTransition = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 1],
    [0, 1, 1, 0],
  ); // 滚动到 1/3 时完全出现， 2/3 不到一点时开始消失
  const subOpacityTransition = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 0, 1, 0],
  ); // 稍微晚一点出现

  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  // 跟随鼠标微微偏移
  const handleMouseMove = (ev: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !childRef.current) return; // 没有追踪到任何东西
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = ((ev.clientX - left - width / 2) / width) * 10;
    const y = ((ev.clientY - top - height / 2) / width) * 10;
    childRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  };

  return (
    <div ref={scrollContainerRef} className="h-[400vh]">
      <div className="h-screen sticky top-0 w-full flex flex-col items-center">
        <div
          ref={containerRef}
          className="grow w-full flex flex-col justify-center overflow-clip"
          // onMouseMove={handleMouseMove}
        >
          <div
            ref={childRef}
            className="h-full max-w-3xl xl:max-w-6xl p-8 mx-auto flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-4">
              <motion.p
                className="text-4xl lg:text-5xl font-semibold text-white"
                initial={{
                  opacity: 0,
                }}
                style={{
                  opacity: mainOpacityTransition,
                }}
              >
                这里是一句可能会非常非常长的话，我也不知道写什么好。
              </motion.p>
              <motion.span
                className="text-xl lg:text-2xl font-light text-gray-400 self-end italic"
                initial={{
                  opacity: 0,
                }}
                style={{
                  opacity: subOpacityTransition,
                }}
              >
                ——作者
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
