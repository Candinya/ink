import { motion } from "motion/react";
import type { Variants } from "motion/react";

// 动效参考自 https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d
// TODO: 改成基于滚动进度的动画流（现在是基于时间的）

const sentenceVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
};

const Saying = () => {
  // 定义文本
  const mainParagraph = "愿人人皆可到达内心中的应许之地。";
  const subParagraph = "2024.12.03";

  return (
    <div className="h-[150vh] -mt-screen/2">
      <div className="min-h-screen sticky top-0 w-full flex flex-col items-center">
        <div className="grow w-full flex flex-col justify-center overflow-clip">
          <div className="max-w-3xl xl:max-w-6xl p-8 mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 justify-center">
              <motion.div
                className="text-4xl lg:text-5xl font-semibold text-white"
                initial="offscreen"
                whileInView="onscreen"
                variants={sentenceVariants}
                viewport={{ once: true }}
              >
                {mainParagraph.split("\n").map((line, i) => (
                  <p key={`${line}-${i}`}>
                    {line.split("").map((c, i) => (
                      <motion.span key={`${c}-${i}`} variants={letterVariants}>
                        {c}
                      </motion.span>
                    ))}
                  </p>
                ))}
              </motion.div>
              <div className="text-xl lg:text-2xl font-light text-gray-400 self-end italic">
                {subParagraph.split("\n").map((line, i) => (
                  <p key={`${line}-${i}`}>
                    {line.split("").map((c, i) => (
                      <motion.span key={`${c}-${i}`} variants={letterVariants}>
                        {c}
                      </motion.span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saying;
