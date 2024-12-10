import { motion } from "motion/react";

interface LogoWithTitleProps {
  link: string;
  logo: string;
  title: string;
  darkInvert?: boolean;
}
const LogoWithTitle = ({
  link,
  logo,
  title,
  darkInvert = false,
}: LogoWithTitleProps) => (
  <a href={link} target="_blank" className="h-full">
    <motion.div
      className="h-full px-6 py-4 rounded-3xl border-2 border-gray-300 shadow-xl flex flex-col justify-around bg-background"
      initial={{
        y: 0,
      }}
      whileHover={{
        y: -30,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.6,
        },
      }}
    >
      <motion.div className="flex flex-col gap-4 items-center">
        <img
          src={logo}
          alt={title}
          className={`rounded-2xl size-20 lg:size-24 xl:size-32${darkInvert ? " dark:invert" : ""}`}
        />
        <span className="font-normal lg:font-semibold text-sm md:text-base lg:text-xl">
          {title}
        </span>
      </motion.div>
    </motion.div>
  </a>
);

export default LogoWithTitle;
