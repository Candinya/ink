"use client";

import { motion } from "motion/react";

const sentenceVariantProps = {
  offscreen: { opacity: 1 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariantProps = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

const Saying = () => {
  // 定义文本
  const line1 = "这里是一句可能会非常非常长的话，我也不知道写什么好。";
  const line2 = "——作者";

  return (
    <div className="h-[200vh]">
      <div className="h-screen sticky top-0 w-full flex flex-col items-center">
        <div className="grow w-full flex flex-col justify-center overflow-clip">
          <div className="h-full max-w-3xl xl:max-w-6xl p-8 mx-auto flex flex-col justify-center items-center">
            <motion.div
              className="h-full flex flex-col gap-4 justify-center"
              initial="offscreen"
              whileInView="onscreen"
              variants={sentenceVariantProps}
              viewport={{ once: true, amount: 0.8 }}
            >
              <p className="text-4xl lg:text-5xl font-semibold text-white">
                {line1.split("").map((c, i) => (
                  <motion.span key={`${c}-${i}`} variants={letterVariantProps}>
                    {c}
                  </motion.span>
                ))}
              </p>
              <span className="text-xl lg:text-2xl font-light text-gray-400 self-end italic">
                {line2.split("").map((c, i) => (
                  <motion.span key={`${c}-${i}`} variants={letterVariantProps}>
                    {c}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saying;
