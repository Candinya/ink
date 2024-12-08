import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

interface CountLineProps {
  github: number;
  misskey: number;
}
const CountLine = ({ github, misskey }: CountLineProps) => {
  // 数量动画
  const githubCount = useMotionValue(0);
  const misskeyCount = useMotionValue(0);
  const githubCountRounded = useTransform(githubCount, Math.round);
  const misskeyCountRounded = useTransform(misskeyCount, Math.round);

  const countLineRef = useRef<HTMLDivElement>(null);
  const isCountLineInView = useInView(countLineRef);

  useEffect(() => {
    if (isCountLineInView) {
      const githubCountControls = animate(githubCount, github, {
        duration: 3,
      });
      const misskeyCountControls = animate(misskeyCount, misskey, {
        duration: 3,
      });
      return () => {
        githubCountControls.stop();
        misskeyCountControls.stop();
      };
    }
  }, [isCountLineInView]);

  return (
    <p ref={countLineRef} className="text-lg text-center">
      <motion.span className="font-bold text-green-500">
        {githubCountRounded}
      </motion.span>{" "}
      次提交，
      <motion.span className="font-bold text-blue-500">
        {misskeyCountRounded}
      </motion.span>{" "}
      条帖文
    </p>
  );
};

export default CountLine;
