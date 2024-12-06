"use client";

import { useTransform } from "motion/react";

import SkillContainer from "@/components/SkillContainer";
import ContentGrid from "@/components/SkillContentGrid";

import Avatar from "./Avatar";

const SkillOtaku = () => (
  <SkillContainer titleLeft={"还是一名"} titleRight={"二次元阿宅"}>
    {(scrollYProgress) => {
      const avatarTransform = useTransform(
        scrollYProgress,
        [0.25, 0.3],
        ["0fr", "1fr"],
      );
      const avatarTextTransform = useTransform(
        scrollYProgress,
        [0.3, 0.4],
        [0, 1],
      );
      const avatarImageTransform = useTransform(
        scrollYProgress,
        [0.4, 0.5],
        [0, 1],
      );

      const avatarImageLayer1Transform = useTransform(
        scrollYProgress,
        [0.5, 0.6],
        [0, 1],
      );
      const avatarImageLayer2Transform = useTransform(
        scrollYProgress,
        [0.6, 0.7],
        [0, 1],
      );
      const avatarImageLayer3Transform = useTransform(
        scrollYProgress,
        [0.7, 0.8],
        [0, 1],
      );

      const avatarImageLeftSideTransform = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        ["0", "100%"],
      );
      const avatarImageRightSideTransform = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        ["0%", "-100%"],
      );

      const avatarImageRoundTransform = useTransform(
        scrollYProgress,
        [0.9, 1],
        ["0%", "100%"],
      );

      return (
        <>
          {/*头像*/}
          <ContentGrid transform={avatarTransform}>
            <Avatar
              textTransform={avatarTextTransform}
              imageTransform={avatarImageTransform}
              imageLayer1Transform={avatarImageLayer1Transform}
              imageLayer2Transform={avatarImageLayer2Transform}
              imageLayer3Transform={avatarImageLayer3Transform}
              imageLayerLeftSideTransform={avatarImageLeftSideTransform}
              imageLayerRightSideTransform={avatarImageRightSideTransform}
              imageRoundTransform={avatarImageRoundTransform}
            />
          </ContentGrid>
        </>
      );
    }}
  </SkillContainer>
);

export default SkillOtaku;
