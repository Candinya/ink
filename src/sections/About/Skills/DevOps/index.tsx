"use client";

import { useTransform } from "motion/react";

import SkillContainer from "../Container";
import ContentGrid from "../ContentGrid";

import Fields from "./Fields";
import Projects from "./Projects";

const SkillDevOps = () => (
  <SkillContainer titleLeft={"也是一名"} titleRight={"运维工程师"}>
    {(scrollYProgress) => {
      const fieldsTransform = useTransform(
        scrollYProgress,
        [0.25, 0.3, 0.65, 0.7],
        ["0fr", "1fr", "1fr", "0fr"],
      );
      const fieldsHardwareTransform = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.55, 0.65],
        [0, 1, 1, 0],
      );
      const fieldsSoftwareTransform = useTransform(
        scrollYProgress,
        [0.4, 0.5, 0.55, 0.65],
        [0, 1, 1, 0],
      );

      const projectsTransform = useTransform(
        scrollYProgress,
        [0.65, 0.7],
        ["0fr", "1fr"],
      );
      const projectsLocalTransform = useTransform(
        scrollYProgress,
        [0.7, 0.8],
        [0, 1],
      );
      const projectsRemoteTransform = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        [0, 1],
      );

      return (
        <>
          {/*擅长的领域*/}
          <ContentGrid transform={fieldsTransform}>
            <Fields
              hardwareTransform={fieldsHardwareTransform}
              softwareTransform={fieldsSoftwareTransform}
            />
          </ContentGrid>

          {/*做的项目*/}
          <ContentGrid transform={projectsTransform}>
            <Projects
              localTransform={projectsLocalTransform}
              remoteTransform={projectsRemoteTransform}
            />
          </ContentGrid>
        </>
      );
    }}
  </SkillContainer>
);

export default SkillDevOps;
