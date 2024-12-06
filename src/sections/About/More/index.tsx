import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const More = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  const fadeInTransformLine1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const fadeInTransformLine2 = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [0, 1],
  );

  return (
    <div
      ref={scrollContainerRef}
      className="h-[200vh] w-full -mt-screen/2 -mb-screen/2"
    >
      <div className="sticky top-0 w-full min-h-screen max-w-3xl xl:max-w-6xl p-8 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 text-3xl lg:text-4xl text-center">
          <motion.div
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: fadeInTransformLine1,
            }}
          >
            但这些仅仅只是冰山一角。
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: fadeInTransformLine2,
            }}
          >
            欢迎来到我的——
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default More;
