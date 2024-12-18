import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

import { candyMadeURL } from "./constants";
import CandyMade from "./CandyMade";
import Link from "@/components/Link";

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
      <p>我会写一些自己喜欢的项目，例如这些：</p>

      <CandyMade />

      <p>
        您可以在 <Link href={candyMadeURL}>CandyMade</Link> 查看完整列表。
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
