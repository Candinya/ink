import { motion, type Variants } from "motion/react";
import { IconCode, IconSocial } from "@tabler/icons-react";

export type FeedItem = {
  date: Date;
  text: string;
  link: string;
  type: "develop" | "social";
};

const wrapperVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

interface FeedTimelineProps {
  isPending: boolean;
  error: Error | null;
  data: FeedItem[];
}
const FeedTimeline = ({ isPending, error, data }: FeedTimelineProps) => {
  if (isPending) {
    return "让我找找看…";
  }
  if (error) {
    return "哎呀，出现了些小问题呢";
  }
  return (
    <motion.ul
      role="list"
      className="space-y-6"
      initial="offscreen"
      whileInView="onscreen"
      variants={wrapperVariants}
      viewport={{ once: true }}
    >
      {data
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((item, index) => (
          <motion.li
            key={item.date.toISOString() + item.link}
            className="relative flex gap-x-4"
            variants={itemVariants}
          >
            <div
              className={`absolute left-0 top-0 flex w-6 justify-center ${index === data.length - 1 ? "h-6" : "-bottom-6"}`}
            >
              <div
                className={`w-px ${
                  item.type === "develop"
                    ? "bg-green-200"
                    : item.type === "social"
                      ? "bg-blue-200"
                      : "bg-gray-200"
                }`}
              />
            </div>
            <div className="relative flex size-6 flex-none items-center justify-center bg-background">
              <div
                className={`size-1.5 rounded-full ${
                  item.type === "develop"
                    ? "bg-green-100"
                    : item.type === "social"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                } ring-1 ${
                  item.type === "develop"
                    ? "ring-green-300"
                    : item.type === "social"
                      ? "ring-blue-300"
                      : "ring-gray-300"
                }`}
              />
            </div>
            <a
              href={item.link}
              target="_blank"
              className={`flex-auto rounded-md p-3 ring-1 ring-inset ${
                item.type === "develop"
                  ? "ring-green-200"
                  : item.type === "social"
                    ? "ring-blue-200"
                    : "ring-gray-200"
              } ${
                item.type === "develop"
                  ? "bg-green-500 dark:bg-green-950"
                  : item.type === "social"
                    ? "bg-blue-500 dark:bg-blue-950"
                    : "bg-gray-500 dark:bg-gray-950"
              } bg-opacity-5 hover:bg-opacity-10 transition-colors`}
            >
              <div className="flex justify-between gap-x-4">
                <time
                  dateTime={item.date.toISOString()}
                  className="flex-none py-0.5 text-xs/5 text-gray-500"
                >
                  {item.date.getFullYear()}-{item.date.getMonth() + 1}-
                  {item.date.getDate()} {item.date.getHours()}:
                  {item.date.getMinutes()}
                </time>
                <div
                  className={`py-0.5 text-xs/5 ${
                    item.type === "develop"
                      ? "text-green-500"
                      : item.type === "social"
                        ? "text-blue-500"
                        : "text-gray-500"
                  }`}
                >
                  <span className="font-medium">
                    {item.type === "develop" ? (
                      <IconCode className="size-4" />
                    ) : item.type === "social" ? (
                      <IconSocial className="size-4" />
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
              <p className="text-sm/6 text-gray-500 dark:text-gray-300">
                {item.text}
              </p>
            </a>
          </motion.li>
        ))}
    </motion.ul>
  );
};

export default FeedTimeline;
