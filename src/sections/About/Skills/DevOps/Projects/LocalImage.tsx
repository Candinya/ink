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
        <motion.div
          className="w-full h-full"
          layoutId={`about-skills-devops-projects-local-image-${id}-image`}
        >
          <Image
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </motion.div>
      </motion.button>

      {/*点击后展开全屏展示的模态框*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // layoutId={`about-skills-devops-projects-local-image-${id}-container`}
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen rounded-3xl z-10"
          >
            {/*关闭图片的覆叠层*/}
            <motion.button
              className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={() => {
                setIsOpen(false);
              }}
            />

            {/*图片*/}
            <motion.div
              className="absolute top-0 left-0 w-full h-full p-16 overflow-clip pointer-events-none"
              layoutId={`about-skills-devops-projects-local-image-${id}-image`}
            >
              <Image
                className="w-full h-full object-contain"
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocalImage;
