import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

interface CellProps {
  text: string;
  main?: boolean;
  opacity: MotionValue<number>;
}
const Cell = ({ text, main, opacity }: CellProps) => (
  <motion.div
    className={main ? "font-semibold" : "text-right"}
    initial={{
      opacity: 0,
    }}
    style={{
      opacity: opacity,
    }}
  >
    {text}
  </motion.div>
);

const Name = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  // 动作延迟：每个变化的持续百分比都是 0.15 ，同组动画连续，相邻组间距 0.05 ，共 0.15 * 6 + 0.05 * 2 = 1
  const fadeInTransformCell11 = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 1],
  );
  const fadeInTransformCell12 = useTransform(
    scrollYProgress,
    [0.15, 0.3],
    [0, 1],
  );

  const fadeInTransformCell21 = useTransform(
    scrollYProgress,
    [0.35, 0.5],
    [0, 1],
  );
  const fadeInTransformCell22 = useTransform(
    scrollYProgress,
    [0.5, 0.65],
    [0, 1],
  );

  const fadeInTransformCell31 = useTransform(
    scrollYProgress,
    [0.7, 0.85],
    [0, 1],
  );
  const fadeInTransformCell32 = useTransform(
    scrollYProgress,
    [0.85, 1],
    [0, 1],
  );

  return (
    <div ref={scrollContainerRef} className="h-[400vh] w-full">
      <div className="sticky top-0 w-full min-h-screen max-w-3xl xl:max-w-6xl p-8 mx-auto flex flex-col justify-center items-center pointer-events-none">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-6 text-3xl lg:text-4xl">
          {/*公式名*/}
          <Cell text={"我的名字是"} opacity={fadeInTransformCell11} />
          <Cell
            text={"Nya Candy"}
            main={true}
            opacity={fadeInTransformCell12}
          />

          {/*缩略名*/}
          <Cell text={"也可以叫我"} opacity={fadeInTransformCell21} />
          <Cell text={"Candinya"} main={true} opacity={fadeInTransformCell22} />

          {/*中文名*/}
          <Cell text={"中文名是"} opacity={fadeInTransformCell31} />
          <Cell text={"糖喵"} main={true} opacity={fadeInTransformCell32} />
        </div>
      </div>
    </div>
  );
};

export default Name;
