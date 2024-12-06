import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { IconSectionSign } from "@tabler/icons-react";

interface SectionTitleProps {
  title: string;
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  const scrollDetectorRef = useRef<HTMLDivElement>(null);
  const isNotScrollUp = useInView(scrollDetectorRef);

  return (
    <motion.div className="sticky w-full top-0">
      <div className="w-full relative">
        {/*滚动可见探测器，当它不可见时触发状态切换动作*/}
        <div ref={scrollDetectorRef} className="absolute -top-4" />

        {/*标题*/}
        <div
          className="absolute top-20 transition-all duration-500 flex flex-row gap-2 items-center"
          style={{
            left: isNotScrollUp ? "50%" : "1rem",
            top: isNotScrollUp ? "4rem" : "1rem",
            transform: isNotScrollUp ? "translateX(-25%)" : "none",
            scale: isNotScrollUp ? 2 : 1,
          }}
        >
          {/*标题图标*/}
          <IconSectionSign
            className="absolute -left-3 size-8 text-gray-400 transition-opacity duration-500"
            style={{
              opacity: isNotScrollUp ? 0 : 1,
              transitionDelay: isNotScrollUp ? "0ms" : "800ms",
            }}
          />

          {/*标题文本*/}
          <h2 className="px-4 lg:px-4 text-xl lg:text-2xl font-semibold">
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
