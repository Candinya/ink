import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

import LogoWithTitle from "@/components/LogoWithTitle";

import HexoLogo from "./logos/hexo.svg";
import MisskeyLogo from "./logos/misskey.png";
import MatrixLogo from "./logos/matrix.svg";

interface ActivityPlatformsProps {
  introTransform: MotionValue<number>;
  showTransform: MotionValue<number>;
}
const ActivityPlatforms = ({
  introTransform,
  showTransform,
}: ActivityPlatformsProps) => (
  <div className="flex flex-col text-center gap-8">
    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: introTransform,
      }}
    >
      <p>同时，我自己也是一位坚定的去中心化信念者，</p>
    </motion.div>

    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: showTransform,
      }}
    >
      <p>这些是我主要的活动平台：</p>
      <ul className="flex flex-row gap-8 px-4 py-8 justify-center">
        <li className="h-full">
          <LogoWithTitle
            link={"https://candinya.com"}
            logo={HexoLogo}
            title={"博客"}
          />
        </li>
        <li className="h-full">
          <LogoWithTitle
            link={"https://nya.one/@Candinya"}
            logo={MisskeyLogo}
            title={"社交平台"}
          />
        </li>
        <li className="h-full">
          <LogoWithTitle
            link={"https://matrix.to/#/@candinya:nya.one"}
            logo={MatrixLogo}
            title={"即时通讯"}
            darkInvert={true}
          />
        </li>
      </ul>
    </motion.div>
  </div>
);

export default ActivityPlatforms;
