import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

import { candyMadeURL } from "./constants";
import CandyMade from "./CandyMade";

const queryClient = new QueryClient();

interface ProjectsProps {
  ownOpacityTransform: MotionValue<number>;
  contributeOpacityTransform: MotionValue<number>;
}
const Projects = ({
  ownOpacityTransform,
  contributeOpacityTransform,
}: ProjectsProps) => (
  <div className="flex flex-col text-center gap-8">
    <motion.div
      className="flex flex-col text-center gap-6"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: ownOpacityTransform,
      }}
    >
      <p>我独立开发过不少项目。例如这些：</p>

      <QueryClientProvider client={queryClient}>
        <CandyMade />
      </QueryClientProvider>

      <p>
        您可以在{" "}
        <a
          href={candyMadeURL}
          target="_blank"
          className="underline underline-offset-4 decoration-theme hover:opacity-50  transition-all duration-300"
        >
          CandyMade
        </a>{" "}
        查看完整列表。
      </p>
    </motion.div>

    <motion.div
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: contributeOpacityTransform,
      }}
    >
      <p>我还参与过不少项目的协同开发。</p>
      <p>同时，作为一名开源爱好者，我也一直积极地给各个开源项目提交 PR 。</p>
    </motion.div>
  </div>
);

export default Projects;
