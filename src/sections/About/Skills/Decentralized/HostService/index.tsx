import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

interface HostServiceProps {
  introTransform: MotionValue<number>;
  beliefTransform: MotionValue<number>;
}
const HostService = ({ introTransform, beliefTransform }: HostServiceProps) => (
  <div className="flex flex-col text-center gap-8">
    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: introTransform,
      }}
    >
      <p>我曾帮忙托管一些中心化平台的替代品，</p>
    </motion.div>

    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: beliefTransform,
      }}
    >
      <p>相信开源社区的力量，致力于自由信息的发展。</p>
    </motion.div>
  </div>
);

export default HostService;
