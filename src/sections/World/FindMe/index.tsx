import WorldContainer from "@/components/WorldContainer";
import PlatformCard from "@/sections/World/FindMe/PlatformCard.tsx";
import {
  IconBrandGithub,
  IconBrandSteam,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconRss,
  IconShare,
} from "@tabler/icons-react";

const FindMe = () => (
  <WorldContainer title={"来找我玩"}>
    <div className="mx-auto max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <div className="grid grid-rows-3 grid-cols-3 gap-2 sm:gap-4 md:gap-6 aspect-square text-white">
        <PlatformCard
          className={
            "col-span-2 bg-orange-400 dark:bg-orange-700 rounded-tl-3xl"
          }
          link={"https://candinya.com"}
          text={"博客"}
          icon={IconRss}
        />
        <PlatformCard
          className="bg-violet-400 dark:bg-violet-700 rounded-tr-3xl"
          link={"https://github.com/Candinya"}
          text={"GitHub"}
          icon={IconBrandGithub}
        />
        <PlatformCard
          className="bg-lime-400 dark:bg-lime-700"
          link={"https://matrix.to/#/@candinya:nya.one"}
          text={"即时通讯"}
          icon={IconMessageCircle}
        />
        <PlatformCard
          className="col-span-2 bg-sky-400 dark:bg-sky-700"
          link={"https://nya.one/@Candinya"}
          text={"联邦宇宙"}
          icon={IconShare}
        />
        <PlatformCard
          className="bg-red-400 dark:bg-red-700 rounded-bl-3xl"
          link={"mailto:hello@candinya.com"}
          text={"邮箱"}
          icon={IconMail}
        />
        <PlatformCard
          className="bg-indigo-400 dark:bg-indigo-700"
          link={"https://steamcommunity.com/id/Candinya/"}
          text={"Steam"}
          icon={IconBrandSteam}
        />
        <PlatformCard
          className="bg-teal-400 dark:bg-teal-700 rounded-br-3xl"
          text={"有缘人终会相见"}
          icon={IconMapPin}
        />
      </div>
    </div>
  </WorldContainer>
);

export default FindMe;
