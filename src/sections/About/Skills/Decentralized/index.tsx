import { useTransform } from "motion/react";

import SkillContainer from "@/components/SkillContainer";
import ContentGrid from "@/components/SkillContentGrid";

import HostService from "./HostService";
import ActivityPlatforms from "./ActivityPlatforms";

const SkillDecentralized = () => (
  <SkillContainer titleLeft={"也是一名"} titleRight={"去中心化爱好者"}>
    {(scrollYProgress) => {
      const hostServiceTransform = useTransform(
        scrollYProgress,
        [0.25, 0.3, 0.65, 0.7],
        ["0fr", "1fr", "1fr", "0fr"],
      );
      const hostServiceIntroTransform = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.55, 0.65],
        [0, 1, 1, 0],
      );
      const hostServiceBeliefTransform = useTransform(
        scrollYProgress,
        [0.4, 0.5, 0.55, 0.65],
        [0, 1, 1, 0],
      );

      const activityPlatformsTransform = useTransform(
        scrollYProgress,
        [0.65, 0.7],
        ["0fr", "1fr"],
      );
      const activityPlatformsIntroTransform = useTransform(
        scrollYProgress,
        [0.7, 0.8],
        [0, 1],
      );
      const activityPlatformsShowTransform = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        [0, 1],
      );

      return (
        <>
          {/*帮助托管服务*/}
          <ContentGrid transform={hostServiceTransform}>
            <HostService
              introTransform={hostServiceIntroTransform}
              beliefTransform={hostServiceBeliefTransform}
            />
          </ContentGrid>

          {/*活动平台*/}
          <ContentGrid transform={activityPlatformsTransform}>
            <ActivityPlatforms
              introTransform={activityPlatformsIntroTransform}
              showTransform={activityPlatformsShowTransform}
            />
          </ContentGrid>
        </>
      );
    }}
  </SkillContainer>
);

export default SkillDecentralized;
