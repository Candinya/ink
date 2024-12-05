"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

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
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-30 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex w-full min-h-full justify-center text-center items-center p-16">
            <DialogPanel
              transition
              className="relative transform overflow-hidden transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <motion.div
                className="w-full"
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default LocalImage;
