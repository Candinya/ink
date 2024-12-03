"use client";

import { fadeInMembersVariantProps } from "./animateProps";
import Image from "next/image";
import { motion } from "motion/react";

const MainSection = () => {
  return (
    <div className="grow w-full flex flex-col justify-center">
      <div className="w-full h-full lg:max-w-4xl 2xl:max-w-6xl p-8 mx-auto flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-16 z-10">
        {/*头像*/}
        <motion.div variants={fadeInMembersVariantProps}>
          <Image
            src={"/avatar.webp"}
            width={256}
            height={256}
            className="size-36 md:size-48 lg:size-64 rounded-full ring-4 ring-white ring-opacity-30 ring-offset-zinc-950 ring-offset-4"
            alt={"Nya Candy"}
            priority={true}
          />
        </motion.div>

        {/*标题*/}
        <div className="flex flex-col gap-12 lg:gap-8 text-center lg:text-left">
          {/*主标题*/}
          <motion.h1
            variants={fadeInMembersVariantProps}
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
            variants={fadeInMembersVariantProps}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400"
          >
            循此前行，终至尘星
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
