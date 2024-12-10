import { fadeInMembersVariants } from "./animate.ts";
import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconMail,
  IconMessageCircle,
  IconRss,
  IconShare,
} from "@tabler/icons-react";
import QuickNav from "@/sections/Welcome/FirstScreen/QuickNav.tsx";

const MainSection = () => {
  return (
    <div className="grow w-full flex flex-col justify-center">
      <div className="w-full h-full lg:max-w-4xl 2xl:max-w-6xl p-8 mx-auto flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-16 z-10">
        {/*头像*/}
        <motion.div variants={fadeInMembersVariants}>
          <img
            src={"/avatar.webp"}
            className="size-36 md:size-48 lg:size-64 rounded-full ring-4 ring-white ring-opacity-30 ring-offset-zinc-950 ring-offset-4"
            alt={"Nya Candy"}
          />
        </motion.div>

        {/*标题*/}
        <div className="flex flex-col gap-12 lg:gap-8 text-center lg:text-left">
          {/*主标题*/}
          <motion.h1
            variants={fadeInMembersVariants}
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
            variants={fadeInMembersVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400"
          >
            循此前行，终至尘星
          </motion.h2>

          {/*快捷导航*/}
          <motion.div
            variants={fadeInMembersVariants}
            className="flex flex-row gap-3 justify-center lg:justify-start pointer-events-auto"
          >
            <QuickNav
              link={"https://candinya.com"}
              color={"bg-orange-600 hover:bg-orange-500"}
              icon={IconRss}
            />
            <QuickNav
              link={"https://nya.one/@Candinya"}
              color={"bg-sky-600 hover:bg-sky-500"}
              icon={IconShare}
            />
            <QuickNav
              link={"https://matrix.to/#/@candinya:nya.one"}
              color={"bg-lime-600 hover:bg-lime-500"}
              icon={IconMessageCircle}
            />
            <QuickNav
              link={"https://github.com/Candinya"}
              color={"bg-violet-600 hover:bg-violet-500"}
              icon={IconBrandGithub}
            />
            <QuickNav
              link={"mailto:hello@candinya.com"}
              color={"bg-red-600 hover:bg-red-500"}
              icon={IconMail}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
