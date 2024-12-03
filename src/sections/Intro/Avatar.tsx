"use client";

import { motion } from "motion/react";
import {
  buildFadeInAnimateFinalProps,
  fadeInAnimateInitialProps,
} from "./animateProps";
import Image from "next/image";

const Avatar = () => (
  <motion.div
    initial={fadeInAnimateInitialProps}
    animate={buildFadeInAnimateFinalProps(1)}
  >
    <Image
      src={"/avatar.webp"}
      width={256}
      height={256}
      className="size-36 md:size-48 lg:size-64 rounded-full ring-4 ring-white ring-opacity-30 ring-offset-zinc-950 ring-offset-4"
      alt={"Nya Candy"}
      priority={true}
    />
  </motion.div>
);

export default Avatar;
