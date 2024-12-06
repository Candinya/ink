import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// 流星雨的特效参数 https://ui.aceternity.com/components/background-beams-with-collision

type MeteorOptions = {
  initialX?: number;
  translateX?: number;
  initialY?: number;
  translateY?: number;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
};

const meteorsDurationRange = [3, 7];
const meteorsRepeatDelayRange = [2, 14];
const meteorsDelayRange = [2, 16];
const meteorsRotateRange = [25, 45];
const meteorsClassNames = ["h-6", "h-12", "h-14", "h-20"];

const randomBetween = (range: number[]) => {
  return Math.random() * (range[1] - range[0]) + range[0];
};

const MeteorsRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 流星雨参数
  const [meteors, setMeteors] = useState<MeteorOptions[]>([]);

  const genMeteors = () => {
    if (!containerRef.current) return; // 无效的状态
    // 状态有效，开始计算
    const newMeteors: MeteorOptions[] = [];
    const { width, height } = containerRef.current.getBoundingClientRect();
    const count = Math.floor(width / 480) + 4; // 最少 4 颗，宽度为 1920 px (FHD) 时 8 颗
    const maxX = width + height / 4; // 可以从右侧飞入，但不能太远
    const endY = height + 200; // 确保消失
    for (let i = 0; i < count; i++) {
      // 数量可以自行调整
      // 随机生成流星雨：斜向从右上角飞入
      const rotateDegree = randomBetween(meteorsRotateRange);
      const startX = Math.random() * maxX;
      const endX = startX - Math.sin((rotateDegree * Math.PI) / 180) * endY; // 将角度转换成弧度
      newMeteors.push({
        initialX: startX,
        translateX: endX,
        translateY: endY,
        duration: randomBetween(meteorsDurationRange),
        delay: randomBetween(meteorsDelayRange),
        repeatDelay: randomBetween(meteorsRepeatDelayRange),
        rotate: rotateDegree,
        className:
          meteorsClassNames[
            Math.floor(Math.random() * meteorsClassNames.length)
          ],
      });
    }
    // 使用新的数组
    setMeteors(newMeteors);
  };

  // 初始化生成流星雨
  useEffect(genMeteors, [containerRef.current]);

  // 浏览器大小改变时重新生成流星雨
  useEffect(() => {
    window.addEventListener("resize", genMeteors);
    return () => window.removeEventListener("resize", genMeteors);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen fixed top-0 left-0 flex items-center overflow-hidden z-0 opacity-75" // 定宽定高
    >
      {meteors.map((meteor) => (
        <Meter key={meteor.initialX + "meteor-idx"} meteorOptions={meteor} />
      ))}
    </div>
  );
};

interface MeteorProps {
  meteorOptions: MeteorOptions;
}
const Meter = ({ meteorOptions }: MeteorProps) => (
  <motion.div
    animate="animate"
    initial={{
      translateY: meteorOptions.initialY || "-200px",
      translateX: meteorOptions.initialX || "0px",
      rotate: meteorOptions.rotate || 0,
    }}
    variants={{
      animate: {
        translateY: meteorOptions.translateY || "1800px",
        translateX: meteorOptions.translateX || "0px",
        rotate: meteorOptions.rotate || 0,
      },
    }}
    transition={{
      duration: meteorOptions.duration || 8,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: meteorOptions.delay || 0,
      repeatDelay: meteorOptions.repeatDelay || 0,
    }}
    className={`absolute left-0 top-20 m-auto w-px rounded-full bg-gradient-to-t from-sky-500 via-purple-500 to-transparent ${meteorOptions.className}`}
  />
);

export default MeteorsRain;
