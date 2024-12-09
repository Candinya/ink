import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { IconBrandGithub, IconCirclePlusFilled } from "@tabler/icons-react";

import ProjectCard from "./ProjectCard.tsx";
import { wrapperVariants, itemVariants } from "./animate.ts";

// 直接的 LayOut 有点单调，有没有其他什么有趣一点的东西？

const GitHub = () => {
  // 拉取最新活动
  const { isPending, error, data } = useQuery<string[]>({
    queryKey: ["like", "github"],
    queryFn: async () => {
      const res = await fetch(`https://api.ncd.moe/like/github`);
      return await res.json();
    },
  });

  if (isPending) {
    return "让我找找看…";
  }
  if (error) {
    console.log("活动记录计数 拉取错误", error);
    return "哎呀，出现了些小问题呢";
  }

  return (
    <div className="relative px-4 py-8 border-2 border-gray-500/50 border-dotted rounded-t-3xl rounded-b-lg overflow-clip z-0">
      {/*背景图*/}
      <div className="bg-violet-500/25 size-96 rounded-full absolute -bottom-24 -right-16 -z-10 pointer-events-none" />

      {/*GitHub 图标*/}
      <IconBrandGithub className="text-background size-64 absolute -bottom-4 -right-0 -z-10 pointer-events-none" />

      <motion.ul
        className="flex flex-wrap gap-4 w-full justify-center"
        initial="offscreen"
        whileInView="onscreen"
        variants={wrapperVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
        {data?.map((item) => (
          <motion.li key={item} variants={itemVariants}>
            <ProjectCard id={item} />
          </motion.li>
        ))}
        <motion.li variants={itemVariants}>
          <ProjectCard
            id={"Candinya?tab=stars"}
            icon={IconCirclePlusFilled}
            text={"查看全部"}
          />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default GitHub;
