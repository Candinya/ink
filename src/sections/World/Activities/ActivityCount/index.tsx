import { useQuery } from "@tanstack/react-query";

import type { ActivityCountAPIResponse } from "./types.ts";
import HeatMap from "./HeatMap";
import CountLine from "./CountLine";

const ActivityCount = () => {
  // 拉取最新活动
  const { isPending, error, data } = useQuery<ActivityCountAPIResponse>({
    queryKey: ["count", "activity"],
    queryFn: async () => {
      const res = await fetch(`https://api.ncd.moe/count/activity`);
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
    <div className="mt-12 w-full">
      {/*热力图*/}
      <HeatMap data={data} />

      {/*计数行*/}
      <CountLine github={data.github.total} misskey={data.misskey.total} />
    </div>
  );
};

export default ActivityCount;
