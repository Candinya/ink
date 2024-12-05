"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import Frontend from "./Frontend";
import Backend from "./Backend";
import Projects from "./Projects";

import SkillContainer from "../Container";

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
          <motion.div
            className="grid"
            initial={{
              gridTemplateRows: "0fr",
            }}
            style={{
              gridTemplateRows: techStackTransform,
            }}
          >
            <div className="h-full overflow-hidden">
              <div className="pt-12 w-full flex flex-col gap-12 justify-center items-center">
                <Frontend opacityTransform={techStackFrontendTransform} />
                <Backend opacityTransform={techStackBackendTransform} />
              </div>
            </div>
          </motion.div>

          {/*项目*/}
          <motion.div
            className="grid"
            initial={{
              gridTemplateRows: "0fr",
            }}
            style={{
              gridTemplateRows: projectsTransform,
            }}
          >
            <div className="h-full overflow-hidden">
              <div className="pt-12 w-full flex flex-col gap-12 justify-center items-center">
                <Projects
                  ownOpacityTransform={projectsOwnTransform}
                  contributeOpacityTransform={projectsContributeTransform}
                />
              </div>
            </div>
          </motion.div>
        </>
      );
    }}
  </SkillContainer>
);

export default SkillDeveloper;
