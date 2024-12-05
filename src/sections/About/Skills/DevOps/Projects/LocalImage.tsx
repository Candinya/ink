"use client";

import Image, { StaticImageData } from "next/image";

interface LocalImageProps {
  containerClassName: string;
  contentClassName: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}
const LocalImage = ({
  containerClassName,
  contentClassName,
  src,
  alt,
  width,
  height,
}: LocalImageProps) => (
  <div
    className={`w-full h-full rounded hover:overflow-visible hover:z-10 group relative ${containerClassName}`}
  >
    <div
      className={`w-full h-full flex justify-center items-center overflow-clip ${contentClassName}`}
    >
      <div className="w-full">
        <Image
          className="w-full h-full object-contain"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>

    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-visible opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="w-full">
        <Image
          className="w-full h-full object-contain rounded-3xl"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  </div>
);

export default LocalImage;
