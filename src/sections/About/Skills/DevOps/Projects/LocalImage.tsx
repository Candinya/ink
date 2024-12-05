"use client";

import Image, { StaticImageData } from "next/image";

interface LocalImageProps {
  className: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}
const LocalImage = ({
  className,
  src,
  alt,
  width,
  height,
}: LocalImageProps) => (
  <div className={`w-full h-full rounded overflow-clip group ${className}`}>
    <Image
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </div>
);

export default LocalImage;
