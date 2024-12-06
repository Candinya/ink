import { useQuery } from "@tanstack/react-query";
import { motion, type Variants } from "motion/react";

type BlogPostInfo = {
  cover: string;
  date: string;
  title: string;
  link: string;
};

const wrapperVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const postVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

interface DateTagProps {
  date: string;
}
const DateTag = ({ date }: DateTagProps) => {
  const parsedDate = new Date(date);
  return (
    <span>
      {parsedDate.getFullYear()}年{parsedDate.getMonth() + 1}月
    </span>
  );
};

const Blog = () => {
  // 拉取项目信息
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
    <motion.ul
      className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-6 px-16 w-full mx-auto max-w-2xl xl:max-w-7xl"
      initial="offscreen"
      whileInView="onscreen"
      variants={wrapperVariants}
      viewport={{ once: true, amount: 1.0 }}
    >
      {data.map((post: BlogPostInfo) => (
        <motion.li
          key={post.link}
          className="w-full h-full"
          variants={postVariants}
        >
          <a
            href={post.link}
            target="_blank"
            className="group w-full h-full flex flex-col lg:aspect-square rounded-3xl overflow-clip border-2"
          >
            {/*封面图片*/}
            <div className="row-span-2 w-full h-full overflow-clip">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/*其他信息*/}
            <div className="flex flex-row xl:flex-col justify-between items-start xl:justify-end px-4 pb-4 h-24">
              {/*<DateTag date={post.date} />*/}
              <h4 className="text-xl group-hover:text-theme transition-colors duration-500">
                {post.title}
              </h4>
            </div>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Blog;
