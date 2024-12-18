import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

import ReactLogo from "./icons/react.svg";
import TypeScriptLogo from "./icons/typescript.svg";
import TailwindCSSLogo from "./icons/tailwindcss.svg";

interface FrontendProps {
  opacityTransform: MotionValue<number>;
}
const Frontend = ({ opacityTransform }: FrontendProps) => (
  <motion.div
    className="flex flex-col text-center lg:flex-row lg:items-center gap-6"
    initial={{
      opacity: 0,
    }}
    style={{
      opacity: opacityTransform,
    }}
  >
    <span>开发前端时，我喜欢使用</span>
    <ul className="flex flex-row gap-4 items-center">
      <li>
        <img className="size-24 lg:size-32" src={ReactLogo} alt={"React"} />
      </li>
      <li>
        <img
          className="size-24 lg:size-32"
          src={TypeScriptLogo}
          alt={"TypeScript"}
        />
      </li>
      <li>
        <img
          className="size-24 lg:size-32"
          src={TailwindCSSLogo}
          alt={"TailwindCSS"}
        />
      </li>
    </ul>
  </motion.div>
);

export default Frontend;
