import GitHub from "./GitHub";
import Music from "./Music";
import WorldContainer from "@/components/WorldContainer";

const Favorite = () => (
  <WorldContainer title={"我心水的"}>
    <div className="grid grid-cols-1 gap-12">
      {/*GitHub Stars*/}
      <GitHub />

      {/*音乐播放*/}
      <Music />
    </div>
  </WorldContainer>
);

export default Favorite;
