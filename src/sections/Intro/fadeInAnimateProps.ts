// 渐入的特效参数
export const fadeInContainerVariantProps = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const fadeInMembersVariantProps = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
