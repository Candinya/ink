import SectionTitle from "@/components/SectionTitle";

import Activities from "./Activities";
import Favorite from "./Favorite";
import FindMe from "./FindMe";

const World = () => (
  <div className="mt-4 w-full flex flex-col justify-center items-center">
    <SectionTitle title={"数字孪生世界"} />

    <div className="w-full p-8 lg:p-12 mt-20">
      <Activities />
      <Favorite />
      <FindMe />
    </div>
  </div>
);

export default World;
