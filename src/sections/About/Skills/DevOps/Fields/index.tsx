"use client";

import { motion } from "motion/react";
import type { MotionValue } from "motion/react";
import Link from "@/sections/About/Skills/Link";

interface FieldsProps {
  hardwareTransform: MotionValue<number>;
  softwareTransform: MotionValue<number>;
}
const Fields = ({ hardwareTransform, softwareTransform }: FieldsProps) => (
  <div className="flex flex-col text-center gap-8">
    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: hardwareTransform,
      }}
    >
      <p>我会建设 网络层 的基础设施，</p>
      <p>无论是作为乙方时的 压接水晶头，</p>
      <p>
        还是作为甲方时的{" "}
        <Link
          href={
            "https://candinya.com/posts/understand-fluke-network-cable-report/"
          }
        >
          验收测试
        </Link>{" "}
        ，
      </p>
      <p>我都可以胜任。</p>
    </motion.div>

    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: softwareTransform,
      }}
    >
      <p>当然也可以完成相关软件设施的协调：</p>
      <p>
        从{" "}
        <Link
          href={
            "https://code.nya.work/nyawork/init-server/src/branch/main/init.sh"
          }
        >
          使用自动化脚本
        </Link>{" "}
        管理服务器，
      </p>
      <p>
        到{" "}
        <Link
          href={
            "https://github.com/Candinya/NyaTrace/blob/master/.github/workflows/build-artifacts.yml"
          }
        >
          配置 CI/CD 流水线
        </Link>{" "}
        自动化构建，
      </p>
      <p>
        还可以{" "}
        <Link
          href={
            "https://github.com/RSS3-Network/Payment-Processor/blob/8c125ef5af82c95710fdeebd57a77d6ae15bd3d7/deploy/docker-compose.dev.yml"
          }
        >
          使用 Docker Compose
        </Link>{" "}
        来更加方便地管理应用。
      </p>
    </motion.div>
  </div>
);

export default Fields;
