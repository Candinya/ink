import { useAtom } from "jotai";
import { IconVinyl } from "@tabler/icons-react";
import { motion } from "motion/react";

import { musicAtom } from "@/state/music.ts";

import { itemVariants, wrapperVariants } from "./animate.ts";
import MusicCard from "./MusicCard.tsx";

const Music = () => {
  const [{ isPending, error, data: musicList }] = useAtom(musicAtom);

  if (isPending) {
    return "让我找找看…";
  }

  if (error) {
    console.log("音乐列表 拉取错误", error);
    return "哎呀，出现了些小问题呢";
  }

  return (
    <div className="relative px-4 py-8 border-2 border-gray-500/50 border-dotted rounded-b-3xl rounded-t-lg overflow-clip z-0">
      {/*背景图*/}
      <div className="bg-pink-500/25 size-96 rounded-full absolute -bottom-24 -right-16 -z-10 pointer-events-none" />

      {/*图标*/}
      <IconVinyl className="text-background size-64 absolute -bottom-4 -right-0 -z-10 pointer-events-none" />

      <motion.ul
        className="flex flex-wrap gap-4 w-full justify-center"
        initial="offscreen"
        whileInView="onscreen"
        variants={wrapperVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
        {musicList?.slice(0, 50).map((item) => (
          <motion.li key={item.url} variants={itemVariants}>
            <MusicCard music={item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Music;
