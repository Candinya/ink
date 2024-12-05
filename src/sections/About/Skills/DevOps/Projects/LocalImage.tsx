"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface LocalImageProps {
  id: string;
  className: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}
const LocalImage = ({
  id,
  className,
  src,
  alt,
  width,
  height,
}: LocalImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*图片本身*/}
      <motion.button
        className={`w-full h-full rounded overflow-clip group ${className}`}
        // layoutId={`about-skills-devops-projects-local-image-${id}-container`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <motion.div
            className="w-full"
            layoutId={`about-skills-devops-projects-local-image-${id}-image`}
          >
            <Image
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </motion.div>
        </div>
      </motion.button>

      {/*点击后展开全屏展示的模态框*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // layoutId={`about-skills-devops-projects-local-image-${id}-container`}
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen rounded-3xl z-10"
          >
            {/*背景加深*/}
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />

            {/*图片*/}
            <motion.button
              className="absolute top-0 left-0 w-full h-full overflow-y-auto"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <motion.div
                className="w-full p-16"
                layoutId={`about-skills-devops-projects-local-image-${id}-image`}
              >
                <Image
                  className="w-full object-contain rounded-3xl"
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  fill={false}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocalImage;
