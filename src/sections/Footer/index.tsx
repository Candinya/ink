import { IconSparkles } from "@tabler/icons-react";

import Link from "./Link.tsx";
import FooterImage from "./assets/image.webp";

const Footer = () => (
  <div className="w-full mt-12">
    <div className="flex justify-center items-center -mb-12">
      <img className="w-48" src={FooterImage} alt="喵" />
    </div>

    <div className="w-full bg-neutral-800 text-white pt-12">
      <div className="w-full mx-auto max-w-7xl px-12 py-6">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-2 lg:gap-4">
          <span>&copy; {new Date().getUTCFullYear()} Nya Candy 版权所有</span>
          <span className="flex flex-row gap-1 items-center">
            <IconSparkles className="size-4" />
            <span>
              由 <Link href={"https://github.com/Candinya/ink"} text={"Ink"} />{" "}
              强力驱动
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
