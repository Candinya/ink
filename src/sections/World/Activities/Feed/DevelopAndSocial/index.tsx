import { useQuery } from "@tanstack/react-query";

import FeedTimeline from "@/components/FeedTimeline";
import type { FeedItem } from "@/components/FeedTimeline";
import WorldContainer from "@/components/WorldContainer";

type GithubFeedItem = { date: string; title: string; link: string };
type MisskeyFeedItem = { date: string; content: string; link: string };

const githubItemMap = (item: GithubFeedItem): FeedItem => ({
  date: new Date(item.date),
  text: item.title,
  link: item.link,
  type: "develop",
});

const misskeyItemMap = (item: MisskeyFeedItem): FeedItem => ({
  date: new Date(item.date),
  text: item.content,
  link: item.link,
  type: "social",
});

const Activities = () => {
  // 拉取最新活动
  const {
    isPending: isGitHubPending,
    error: githubError,
    data: githubData,
  } = useQuery<GithubFeedItem[]>({
    queryKey: ["feed", "github"],
    queryFn: async () => {
      const res = await fetch(`https://api.ncd.moe/feed/github`);
      return await res.json();
    },
  });
  const {
    isPending: isMisskeyPending,
    error: misskeyError,
    data: misskeyData,
  } = useQuery<MisskeyFeedItem[]>({
    queryKey: ["feed", "misskey"],
    queryFn: async () => {
      const res = await fetch(`https://api.ncd.moe/feed/misskey`);
      return await res.json();
    },
  });

  return (
    <>
      {/*桌面端样式，两条轴*/}
      <div className="hidden lg:grid grid-cols-2 gap-12">
        {/*开发动态*/}
        <div className="pr-4 max-h-screen/2 overflow-y-auto">
          <FeedTimeline
            isPending={isGitHubPending}
            error={githubError}
            data={
              isGitHubPending || githubError
                ? []
                : githubData?.map(githubItemMap)
            }
          />
        </div>

        {/*社交活动*/}
        <div className="pr-4 max-h-screen/2 overflow-y-auto">
          <FeedTimeline
            isPending={isMisskeyPending}
            error={misskeyError}
            data={
              isMisskeyPending || misskeyError
                ? []
                : misskeyData?.map(misskeyItemMap)
            }
          />
        </div>
      </div>
      {/*移动端样式，合并轴*/}
      <div className="block lg:hidden">
        {/*开发动态与社交活动合并成一条轴*/}
        <div className="pr-4 max-h-screen/2 overflow-y-auto">
          <FeedTimeline
            isPending={isGitHubPending || isMisskeyPending}
            error={githubError || misskeyError}
            data={[
              ...(isGitHubPending || githubError
                ? []
                : githubData?.map(githubItemMap)),
              ...(isMisskeyPending || misskeyError
                ? []
                : misskeyData?.map(misskeyItemMap)),
            ]}
          />
        </div>
      </div>
    </>
  );
};

const DevelopAndSocial = () => (
  <WorldContainer title={"最新活动"}>
    <Activities />
  </WorldContainer>
);

export default DevelopAndSocial;
