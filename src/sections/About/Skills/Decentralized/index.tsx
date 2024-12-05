"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const SkillDecentralized = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  const textFadeInTransform1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const textFadeInTransform2 = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    [0, 1],
  );

  return (
    <div ref={scrollContainerRef} className="-mt-screen/2 h-[600vh] w-full">
      <div className="min-h-screen max-w-3xl xl:max-w-6xl p-8 mx-auto w-full sticky top-0 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-4 text-3xl lg:text-4xl">
          <motion.span
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: textFadeInTransform1,
            }}
          >
            也是一名
          </motion.span>
          <motion.span
            className="font-semibold"
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: textFadeInTransform2,
            }}
          >
            去中心化爱好者
          </motion.span>
        </div>

        {/*内容模块*/}
        <div className="w-full text-xl lg:text-2xl"></div>
      </div>
    </div>
  );
};

export default SkillDecentralized;
