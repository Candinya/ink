import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

interface CandyMadeProjectInfo {
  id: string;
  name: string;
  logo: string;
}
const CandyMade = () => {
  // 拉取项目信息
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://candymade.net/data.json").then((res) => res.json()),
  });

  if (isPending) {
    return "让我找找看…";
  }

  if (error) {
    console.log("CandyMade 项目拉取错误", error);
    return "哎呀，出现了些小问题呢";
  }

  return (
    <ul className="flex flex-row gap-8">
      {data.map((project: CandyMadeProjectInfo) => (
        <li key={project.id}>
          <a href={`https://candymade.net/${project.id}`} target="_blank">
            <motion.div
              className="px-6 py-4 rounded-3xl shadow-2xl"
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
                  src={`https://candymade.net${project.logo}`}
                  alt={project.name}
                  width={128}
                  height={128}
                  className="rounded-2xl"
                />
                <span className="font-normal lg:font-semibold text-base lg:text-xl">
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
