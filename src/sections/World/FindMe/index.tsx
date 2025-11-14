import {
  IconBrandGithub,
  IconBrandSteam,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconRss,
  IconShare,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";

import WorldContainer from "@/components/WorldContainer";
import PlatformCard from "@/sections/World/FindMe/PlatformCard.tsx";
import { useRef } from "react";

const FindMe = () => {
  // 向下滚动时拼合并出现
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["center end", "end end"],
  });
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const positionTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "0%"],
  );
  const positionReverseTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "0%"],
  );

  return (
    <div ref={scrollContainerRef}>
      <WorldContainer title={"来找我玩"}>
        <div className="mx-auto md:mx-[10%] 2xl:mx-auto max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="grid grid-rows-3 grid-cols-3 gap-2 sm:gap-4 md:gap-6 aspect-square text-white">
            <motion.div
              className="col-span-2"
              style={{
                opacity: opacityTransform,
                x: positionReverseTransform,
                y: positionReverseTransform,
              }}
            >
              <PlatformCard
                className={"bg-orange-400 dark:bg-orange-700 rounded-tl-3xl"}
                link={"https://candinya.com"}
                text={"博客"}
                icon={IconRss}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: opacityTransform,
                x: positionTransform,
                y: positionReverseTransform,
              }}
            >
              <PlatformCard
                className="bg-violet-400 dark:bg-violet-700 rounded-tr-3xl"
                link={"https://github.com/Candinya"}
                text={"GitHub"}
                icon={IconBrandGithub}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: opacityTransform,
                x: positionReverseTransform,
              }}
            >
              <PlatformCard
                className="bg-lime-400 dark:bg-lime-700"
                link={"https://matrix.to/#/@candinya:nya.one"}
                text={"即时通讯"}
                icon={IconMessageCircle}
              />
            </motion.div>
            <motion.div
              className="col-span-2"
              style={{
                opacity: opacityTransform,
                x: positionTransform,
              }}
            >
              <PlatformCard
                className="bg-sky-400 dark:bg-sky-700"
                link={"https://nya.one/@Candinya"}
                text={"联邦宇宙"}
                icon={IconShare}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: opacityTransform,
                x: positionReverseTransform,
                y: positionTransform,
              }}
            >
              <PlatformCard
                className="bg-red-400 dark:bg-red-700 rounded-bl-3xl"
                link={"mailto:hello@candinya.com"}
                text={"邮箱"}
                icon={IconMail}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: opacityTransform,
                y: positionTransform,
              }}
            >
              <PlatformCard
                className="bg-indigo-400 dark:bg-indigo-700"
                link={"https://steamcommunity.com/id/Candinya/"}
                text={"Steam"}
                icon={IconBrandSteam}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: opacityTransform,
                x: positionTransform,
                y: positionTransform,
              }}
            >
              <PlatformCard
                className="bg-teal-400 dark:bg-teal-700 rounded-br-3xl"
                text={"有缘人终会相见"}
                icon={IconMapPin}
              />
            </motion.div>
          </div>
        </div>
      </WorldContainer>
    </div>
  );
};

export default FindMe;
