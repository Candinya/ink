import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "motion/react";

const ScrollDown = () => (
  <motion.div
    className="fixed bottom-8 left-0 right-0 flex flex-col justify-center items-center text-white text-opacity-50 animate-bounce"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 3 } }}
  >
    <IconChevronDown />
  </motion.div>
);

export default ScrollDown;
