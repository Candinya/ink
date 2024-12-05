import { motion } from "motion/react";
import type { MotionValue } from "motion/react";
import type { PropsWithChildren } from "react";

interface ContentGridProps extends PropsWithChildren {
  transform: MotionValue<string>;
}
const ContentGrid = ({ transform, children }: ContentGridProps) => (
  <motion.div
    className="grid"
    initial={{
      gridTemplateRows: "0fr",
    }}
    style={{
      gridTemplateRows: transform,
    }}
  >
    <div className="h-full overflow-hidden">
      <div className="pt-12 w-full flex flex-col gap-12 justify-center items-center">
        {children}
      </div>
    </div>
  </motion.div>
);

export default ContentGrid;
