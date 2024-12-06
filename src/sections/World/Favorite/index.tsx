import GitHub from "./GitHub";
import Misskey from "./Misskey";
import Music from "./Music";

const Favorite = () => (
  <>
    {/*GitHub Stars*/}
    <GitHub />

    {/*Misskey Reactions*/}
    <Misskey />

    {/*音乐播放*/}
    <Music />
  </>
);

export default Favorite;
