import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface LocalImageProps {
  className: string;
  src: string;
  alt: string;
}
const LocalImage = ({ className, src, alt }: LocalImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full h-full rounded overflow-clip group cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <motion.img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={src}
          alt={alt}
          layoutId={`about-skills-devops-projects-${alt}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 top-0 bottom-0 left-0 right-0 p-16 w-screen h-screen cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              className="w-full h-full object-contain pointer-events-none"
              src={src}
              alt={alt}
              layoutId={`about-skills-devops-projects-${alt}`}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocalImage;
