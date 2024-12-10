import { useQuery } from "@tanstack/react-query";

import { candyMadeURL } from "./constants";
import LogoWithTitle from "@/components/LogoWithTitle";
import { randomPick } from "@/utils/randomPick.ts";

interface CandyMadeProjectInfo {
  id: string;
  name: string;
  logo: string;
}
const CandyMade = () => {
  // 拉取项目信息
  const { isPending, error, data } = useQuery({
    queryKey: ["candymadeData"],
    queryFn: async (): Promise<CandyMadeProjectInfo[]> => {
      const res = await fetch(`${candyMadeURL}/data.json`);
      return await res.json();
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
      {randomPick(data, 4).map((project: CandyMadeProjectInfo) => (
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
