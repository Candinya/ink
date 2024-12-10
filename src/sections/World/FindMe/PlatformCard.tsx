import type { ReactNode } from "react";

interface PlatformCardProps {
  className: string;
  text: string;
  icon: (props: any) => ReactNode;
  link?: string;
}
const PlatformCard = ({
  className,
  text,
  icon: Icon,
  link,
}: PlatformCardProps) => (
  <a
    className={`w-full h-full rounded-lg relative group ${className}`}
    href={link}
    target="_blank"
  >
    <div className="absolute w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      <div className="w-full h-full flex justify-center items-center">
        <Icon className="size-12 sm:size-16 md:size-24 lg:size-36" />
      </div>
    </div>

    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-full h-full flex justify-center items-center text-2xl md:text-3xl lg:text-5xl">
        {text}
      </div>
    </div>
  </a>
);

export default PlatformCard;
