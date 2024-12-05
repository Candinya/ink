"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

interface SkillContainerProps {
  titleLeft: string;
  titleRight: string;
  height?: string;
  children: (scrollYProgress: MotionValue<number>) => ReactNode;
}
const SkillContainer = ({
  titleLeft,
  titleRight,
  height = "h-[600vh]",
  children,
}: SkillContainerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  const titleTransformLeft = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleTransformRight = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <div
      ref={scrollContainerRef}
      className={`-mt-screen/2 w-full pointer-events-none ${height}`} // pointer-events-none 的意义是鼠标点击穿透，避免下一个模块挡住上一个模块下半部分的交互（因为居中定位需要用到半个空白屏幕，为了避免浪费太多空间导致交互起来太远所以全部向上移动了半屏）
    >
      <div className="min-h-screen max-w-3xl xl:max-w-6xl p-8 mx-auto w-full sticky top-0 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-4 text-3xl lg:text-4xl">
          <motion.span
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: titleTransformLeft,
            }}
          >
            {titleLeft}
          </motion.span>
          <motion.span
            className="font-semibold"
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: titleTransformRight,
            }}
          >
            {titleRight}
          </motion.span>
        </div>

        {/*内容模块*/}
        {/*为了实现同位置复用所以这样设计，不知道是否有更好的办法*/}
        <div
          className="w-full text-xl lg:text-2xl pointer-events-auto" // 这里用 pointer-events-auto 覆盖掉上级组件设置的鼠标穿透事件，以确保正常触发交互
        >
          {children(scrollYProgress)}
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
