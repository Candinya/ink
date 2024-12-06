import MainSection from "./MainSection";
import { motion, useScroll, useTransform } from "motion/react";
import { fadeInContainerVariants } from "./fadeInAnimateProps";
import { useRef } from "react";

const FirstScreen = () => {
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
      className="h-[160vh]"
      initial={{
        opacity: 1,
      }}
      style={{
        opacity: fadeOutTransform,
      }}
    >
      <motion.div
        className="min-h-screen sticky top-0 w-full flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInContainerVariants}
      >
        {/*主体内容*/}
        <MainSection />
      </motion.div>
    </motion.div>
  );
};

export default FirstScreen;
