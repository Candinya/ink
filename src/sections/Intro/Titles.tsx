"use client";

import { motion } from "motion/react";
import {
  buildFadeInAnimateFinalProps,
  fadeInAnimateInitialProps,
} from "./animateProps";

const Titles = () => (
  <div className="flex flex-col gap-12 lg:gap-8 text-center lg:text-left">
    {/*主标题*/}
    <motion.h1
      initial={fadeInAnimateInitialProps}
      animate={buildFadeInAnimateFinalProps(2)}
      className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
    >
      寻
      <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-500 via-sky-500 to-indigo-500">
        喵
      </span>
      之旅
    </motion.h1>

    {/*副标题*/}
    <motion.h2
      initial={fadeInAnimateInitialProps}
      animate={buildFadeInAnimateFinalProps(3)}
      className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400"
    >
      循此前行，终至尘星
    </motion.h2>
  </div>
);

export default Titles;
