import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ActivityCountAPIResponse } from "../types.ts";

const colorMapGithub = [
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
];

const colorMapMisskey = [
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
];

const colorMappingCalc = (val: number, max: number, into: number) =>
  Math.floor((Math.log((val / max) * 100) / Math.log(100)) * into);

const wrapperVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const itemVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

interface HeatMapProps {
  data: ActivityCountAPIResponse;
}
const HeatMap = ({ data }: HeatMapProps) => {
  return (
    <motion.div
      className="w-full p-4 overflow-x-auto"
      initial="offscreen"
      whileInView="onscreen"
      variants={wrapperVariants}
      viewport={{ once: true, amount: 1.0 }}
    >
      {/*热力图*/}
      <div className="grid grid-rows-7 grid-flow-col gap-1 w-fit mx-auto">
        {/*星期填充物*/}
        {Array(
          (new Date(
            new Date().getTime() - data.days * 86400_000, // 计算起始天
          ).getDay() + // 获得起始天是星期几
            6) % // 先 -1 将首日修正为周一（getDay 函数的返回从周日(0)开始，周一是 1 ，周二是 2 ，周日是 0），为了确保结果为正数所以 +7 ，综合下来就是 -1+7=+6
            7, // 取模以避免填充一个没用的周
        )
          .fill(null)
          .map((_, i) => (
            <div key={i} />
          ))}

        {/*计数天*/}
        {Array(data.days)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={i}
              className="rounded border border-gray-400 size-4 bg-gray-100 overflow-clip"
              variants={itemVariants}
            >
              {
                data.github.day[i] > 0 && data.misskey.day[i] > 0 ? ( // 都有
                  <div
                    style={{
                      transform: "translateX(-3px) translateY(-15px)",
                    }}
                  >
                    <div className="-rotate-45">
                      <div
                        className={`${
                          colorMapGithub[
                            colorMappingCalc(
                              data.github.day[i],
                              data.github.max,
                              colorMapGithub.length,
                            )
                          ]
                        } size-6`}
                      />
                      <div
                        className={`${
                          colorMapMisskey[
                            colorMappingCalc(
                              data.misskey.day[i],
                              data.misskey.max,
                              colorMapMisskey.length,
                            )
                          ]
                        } size-6`}
                      />
                    </div>
                  </div>
                ) : data.github.day[i] > 0 ? ( // 仅有 GitHub
                  <div
                    className={`${
                      colorMapGithub[
                        colorMappingCalc(
                          data.github.day[i],
                          data.github.max,
                          colorMapGithub.length,
                        )
                      ]
                    } w-full h-full`}
                  />
                ) : data.misskey.day[i] > 0 ? ( // 仅有 Misskey
                  <div
                    className={`${
                      colorMapMisskey[
                        colorMappingCalc(
                          data.misskey.day[i],
                          data.misskey.max,
                          colorMapMisskey.length,
                        )
                      ]
                    } w-full h-full`}
                  />
                ) : null // 什么都没有
              }
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default HeatMap;
