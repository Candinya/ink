import { useQuery } from "@tanstack/react-query";

import { candyMadeURL } from "./constants";
import LogoWithTitle from "@/components/LogoWithTitle";

interface CandyMadeProjectInfo {
  id: string;
  name: string;
  logo: string;
}
const CandyMade = () => {
  // 拉取项目信息
  const { isPending, error, data } = useQuery({
    queryKey: ["candymadeData"],
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
    refetchOnWindowFocus: false, // 一般不会在一次浏览中发生变化，没必要动它
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
          <LogoWithTitle
            link={`${candyMadeURL}/${project.id}`}
            logo={`${candyMadeURL}${project.logo}`}
            title={project.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default CandyMade;
