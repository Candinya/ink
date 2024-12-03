// 渐入的特效参数
export const fadeInAnimateInitialProps = {
  y: 10,
  opacity: 0,
};
export const buildFadeInAnimateFinalProps = (delay?: number) => ({
  y: 0,
  opacity: 100,
  transition: { duration: 0.5, delay: delay ? delay * 0.5 : undefined },
});
