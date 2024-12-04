import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

import { candyMadeURL } from "./constants";

interface CandyMadeProjectInfo {
  id: string;
  name: string;
  logo: string;
}
const CandyMade = () => {
  // 拉取项目信息
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await fetch(`${candyMadeURL}/data.json`);
      const allProjects: CandyMadeProjectInfo[] = await res.json();
      // 随机取出 4 个项目
      const selectedProjects = [];
      for (let i = 0; i < 4 && allProjects.length > 0; i++) {
        const selectedIndex = Math.floor(Math.random() * allProjects.length);
        selectedProjects.push(...allProjects.splice(selectedIndex, 1));
      }
      return selectedProjects;
    },
  });

  if (isPending) {
    return "让我找找看…";
  }

  if (error) {
    console.log("CandyMade 项目拉取错误", error);
    return "哎呀，出现了些小问题呢";
  }

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 w-fit mx-auto">
      {data.map((project: CandyMadeProjectInfo) => (
        <li key={project.id} className="h-full">
          <a
            href={`${candyMadeURL}/${project.id}`}
            target="_blank"
            className="h-full"
          >
            <motion.div
              className="h-full px-6 py-4 rounded-3xl border-2 border-gray-300 shadow-xl flex flex-col justify-around bg-background"
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -30,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.6,
                },
              }}
            >
              <motion.div className="flex flex-col gap-4 items-center">
                <Image
                  src={`${candyMadeURL}${project.logo}`}
                  alt={project.name}
                  width={128}
                  height={128}
                  className="rounded-2xl size-20 lg:size-24 xl:size-32"
                />
                <span className="font-normal lg:font-semibold text-sm md:text-base lg:text-xl">
                  {project.name}
                </span>
              </motion.div>
            </motion.div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CandyMade;
