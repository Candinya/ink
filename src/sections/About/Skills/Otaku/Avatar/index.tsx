import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

import Link from "@/components/Link";

import AvatarCharacter from "./layers/character.webp";
import AvatarDecoration from "./layers/decoration.webp";
import AvatarBackground from "./layers/background.webp";

interface AvatarProps {
  textTransform: MotionValue<number>;
  imageTransform: MotionValue<number>;
  imageLayer1Transform: MotionValue<number>;
  imageLayer2Transform: MotionValue<number>;
  imageLayer3Transform: MotionValue<number>;
  imageLayerLeftSideTransform: MotionValue<string>;
  imageLayerRightSideTransform: MotionValue<string>;
  imageRoundTransform: MotionValue<string>;
}
const Avatar = ({
  textTransform,
  imageTransform,

  imageLayer1Transform,
  imageLayer2Transform,
  imageLayer3Transform,

  imageLayerLeftSideTransform,
  imageLayerRightSideTransform,

  imageRoundTransform,
}: AvatarProps) => (
  <div className="flex flex-col text-center gap-8">
    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: textTransform,
      }}
    >
      <p>
        我的头像是我的 OC ，使用{" "}
        <Link href={"https://vroid.com/studio"}>VRoid Studio</Link> 构建，
      </p>
    </motion.div>

    <motion.div
      className="flex flex-col text-center gap-8"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: imageTransform,
      }}
    >
      <p>再稍稍加上一点巧思，就像这样：</p>

      <div className="flex flex-row">
        <motion.div
          className="order-3 z-10 overflow-clip"
          initial={{
            opacity: 0,
            x: "0%",
            borderRadius: "0%",
          }}
          style={{
            opacity: imageLayer3Transform,
            x: imageLayerRightSideTransform,
            borderRadius: imageRoundTransform,
          }}
        >
          <img src={AvatarBackground} alt={"背景"} />
        </motion.div>
        <motion.div
          className="order-2 z-20 overflow-clip"
          initial={{
            opacity: 0,
            x: "0%",
            borderRadius: "0%",
          }}
          style={{
            opacity: imageLayer2Transform,
            x: imageLayerLeftSideTransform,
            borderRadius: imageRoundTransform,
          }}
        >
          <img src={AvatarDecoration} alt={"装饰"} />
        </motion.div>
        <motion.div
          className="order-2 z-30 overflow-clip"
          initial={{
            opacity: 0,
            x: "0%",
            borderRadius: "0%",
          }}
          style={{
            opacity: imageLayer1Transform,
            borderRadius: imageRoundTransform,
          }}
        >
          <img src={AvatarCharacter} alt={"人物"} />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default Avatar;
