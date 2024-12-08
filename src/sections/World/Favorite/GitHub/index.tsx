import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

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
    <motion.ul
      className="flex flex-wrap gap-4 w-full justify-center"
      initial="offscreen"
      whileInView="onscreen"
      variants={wrapperVariants}
      viewport={{ once: true, amount: 1.0 }}
    >
      {data?.map((item) => (
        <motion.li key={item} variants={itemVariants}>
          <ProjectCard id={item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default GitHub;
