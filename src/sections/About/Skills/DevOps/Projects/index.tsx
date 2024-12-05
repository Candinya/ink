"use client";

import { motion } from "motion/react";
import type { MotionValue } from "motion/react";
import Image from "next/image";

import Link from "../../Link";
import LocalImage from "./LocalImage";

import PCInnerPhoto from "./images/pc-inner.webp";
import GPUServerPhoto from "./images/gpu-server.webp";
import RackPhoto from "./images/rack.webp";
import NyaOneScreenshot from "./images/nyaone.webp";

interface ProjectsProps {
  localTransform: MotionValue<number>;
  remoteTransform: MotionValue<number>;
}
const Projects = ({ localTransform, remoteTransform }: ProjectsProps) => (
  <div className="flex flex-col text-center gap-8">
    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: localTransform,
      }}
    >
      <p>我组装了自己日常使用的主力机，</p>
      <p>
        并在家里建设了一个{" "}
        <Link href={"https://candinya.com/posts/build-a-datacenter-at-home/"}>
          迷你版的数据中心
        </Link>{" "}
        。
      </p>
      <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-2 justify-center max-h-[36vh]">
        <LocalImage
          containerClassName={"lg:col-span-2"}
          contentClassName={"rounded-t-3xl lg:rounded-tr lg:rounded-tl-3xl"}
          src={PCInnerPhoto}
          alt={"主力机"}
          width={480}
          height={360}
        />
        <LocalImage
          containerClassName={"lg:col-span-2"}
          contentClassName={"lg:rounded-bl-3xl"}
          src={GPUServerPhoto}
          alt={"GPU 服务器"}
          width={480}
          height={360}
        />
        <LocalImage
          containerClassName={"lg:row-span-2"}
          contentClassName={"rounded-b-3xl lg:rounded-bl lg:rounded-r-3xl"}
          src={RackPhoto}
          alt={"数据中心"}
          width={277}
          height={720}
        />
      </div>
    </motion.div>

    <motion.div
      className="flex flex-col text-center gap-4"
      initial={{
        opacity: 0,
      }}
      style={{
        opacity: remoteTransform,
      }}
    >
      <p>
        我还搭建了一个 <Link href={"https://nya.one"}>Misskey 实例</Link>{" "}
        ，作为我分享日常生活的空间：
      </p>
      <a
        className="w-full h-full max-h-[24vh] rounded-3xl overflow-clip group"
        href={"https://nya.one/@Candinya"}
        target="_blank"
      >
        <Image
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={NyaOneScreenshot}
          alt={"喵窝"}
          width={480}
          height={360}
          fill={false}
        />
      </a>
    </motion.div>
  </div>
);

export default Projects;
