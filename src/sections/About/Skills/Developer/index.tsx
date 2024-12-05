"use client";

import { useTransform } from "motion/react";

import SkillContainer from "../Container";
import ContentGrid from "../ContentGrid";

import Frontend from "./Frontend";
import Backend from "./Backend";
import Projects from "./Projects";

const SkillDeveloper = () => (
  <SkillContainer titleLeft={"我是一名"} titleRight={"全栈开发者"}>
    {(scrollYProgress) => {
      const techStackTransform = useTransform(
        scrollYProgress,
        [0.25, 0.3, 0.65, 0.7],
        ["0fr", "1fr", "1fr", "0fr"],
      );
      const techStackFrontendTransform = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.55, 0.65],
        [0, 1, 1, 0],
      );
      const techStackBackendTransform = useTransform(
        scrollYProgress,
        [0.4, 0.5, 0.55, 0.65],
        [0, 1, 1, 0],
      );

      const projectsTransform = useTransform(
        scrollYProgress,
        [0.65, 0.7],
        ["0fr", "1fr"],
      );
      const projectsOwnTransform = useTransform(
        scrollYProgress,
        [0.7, 0.8],
        [0, 1],
      );
      const projectsContributeTransform = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        [0, 1],
      );

      return (
        <>
          {/*技术栈*/}
          <ContentGrid transform={techStackTransform}>
            <Frontend opacityTransform={techStackFrontendTransform} />
            <Backend opacityTransform={techStackBackendTransform} />
          </ContentGrid>

          {/*项目*/}
          <ContentGrid transform={projectsTransform}>
            <Projects
              ownOpacityTransform={projectsOwnTransform}
              contributeOpacityTransform={projectsContributeTransform}
            />
          </ContentGrid>
        </>
      );
    }}
  </SkillContainer>
);

export default SkillDeveloper;
