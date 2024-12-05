import Image from "next/image";
import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

import GopherLogo from "./icons/gopher.svg";
import PostgresQLLogo from "./icons/postgresql.svg";
import RedisLogo from "./icons/redis.svg";

interface BackendProps {
  opacityTransform: MotionValue<number>;
}
const Backend = ({ opacityTransform }: BackendProps) => (
  <motion.div
    className="flex flex-col text-center lg:flex-row lg:items-center gap-6"
    initial={{
      opacity: 0,
    }}
    style={{
      opacity: opacityTransform,
    }}
  >
    <span>开发后端时，我喜欢使用</span>
    <ul className="flex flex-row gap-4 items-center">
      <li>
        <Image
          className="size-24 lg:size-32"
          src={GopherLogo}
          alt={"Go"}
          height={128}
          width={128}
        />
      </li>
      <li>
        <Image
          className="size-24 lg:size-32"
          src={PostgresQLLogo}
          alt={"PostgresQL"}
          height={128}
          width={128}
        />
      </li>
      <li>
        <Image
          className="size-24 lg:size-32"
          src={RedisLogo}
          alt={"Redis"}
          height={128}
          width={128}
        />
      </li>
    </ul>
  </motion.div>
);

export default Backend;
