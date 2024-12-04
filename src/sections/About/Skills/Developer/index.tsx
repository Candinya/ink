import Frontend from "./Frontend";
import Backend from "./Backend";
import Projects from "./Projects";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const SkillDeveloper = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  const textFadeInTransform1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const textFadeInTransform2 = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    [0, 1],
  );

  const techStackTransform = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.6, 0.65],
    ["0fr", "1fr", "1fr", "0fr"],
  );
  const techStackFrontendTransform = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [0, 1, 1, 0],
  );
  const techStackBackendTransform = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 1, 0],
  );

  const projectsTransform = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.95, 1],
    // ["0fr", "1fr", "1fr", "0fr"], // 这个配置模式下最后标题回回到中间
    ["0fr", "1fr", "1fr", "1fr"], // 这个配置模式下最后标题不会回到中间
  );
  const projectsOwnTransform = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 0.95],
    // [0, 1, 1, 0], // 这个配置模式下最后会淡出
    [0, 1, 1, 1], // 这个配置模式下最后不会淡出
  );
  const projectsContributeTransform = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95],
    // [0, 1, 0], // 同上
    [0, 1, 1],
  );

  return (
    <div ref={scrollContainerRef} className="-mt-screen/2 h-[600vh] w-full">
      <div className="min-h-screen max-w-3xl xl:max-w-6xl p-8 mx-auto w-full sticky top-0 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-4 text-3xl lg:text-4xl">
          <motion.span
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: textFadeInTransform1,
            }}
          >
            我是一名
          </motion.span>
          <motion.span
            className="font-semibold"
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: textFadeInTransform2,
            }}
          >
            全栈开发者
          </motion.span>
        </div>

        {/*内容模块*/}
        {/*为了实现同位置复用所以这样设计，不知道是否有更好的办法*/}
        <div className="w-full text-xl lg:text-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default SkillDeveloper;
