import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { IconCategory, IconClock } from "@tabler/icons-react";

import WorldContainer from "@/components/WorldContainer";

import DateTag from "./DateTag.tsx";
import type { BlogPostInfo } from "./types.ts";
import { postVariants, wrapperVariants } from "./animate.ts";

const BlogPosts = () => {
  // 拉取最新文章
  const { isPending, error, data } = useQuery({
    queryKey: ["feed", "blog"],
    queryFn: async () => {
      const res = await fetch(`https://api.ncd.moe/feed/blog`);
      return await res.json();
    },
  });

  if (isPending) {
    return "让我找找看…";
  }

  if (error) {
    console.log("博客文章拉取错误", error);
    return "哎呀，出现了些小问题呢";
  }

  return (
    <motion.div
      className="mx-auto grid auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-3"
      initial="offscreen"
      whileInView="onscreen"
      variants={wrapperVariants}
      viewport={{ once: true }}
    >
      {data.map((post: BlogPostInfo) => (
        <motion.article
          key={post.link}
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
          variants={postVariants}
        >
          <img
            alt={post.title}
            src={post.cover}
            className="absolute inset-0 -z-10 size-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <div className="flex flex-wrap gap-4 overflow-hidden text-sm/6 text-gray-300">
            <div className="flex gap-2 items-center">
              <IconClock className="size-4" />
              <DateTag date={post.date} />
            </div>
            {post.categories.length > 0 && (
              <div className="flex items-center gap-2">
                <IconCategory className="size-4" />
                <div className="flex gap-x-2.5">{post.categories[0]}</div>
              </div>
            )}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-theme transition-colors duration-500">
            <a href={post.link} target="_blank">
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
        </motion.article>
      ))}
    </motion.div>
  );
};

const Blog = () => (
  <WorldContainer title={"最新文章"}>
    <BlogPosts />
  </WorldContainer>
);

export default Blog;
