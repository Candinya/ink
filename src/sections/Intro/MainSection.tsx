"use client";

import Titles from "./Titles";
import Avatar from "./Avatar";

const MainSection = () => {
  return (
    <div className="grow w-full flex flex-col justify-center">
      <div className="w-full h-full lg:max-w-4xl 2xl:max-w-6xl p-8 mx-auto flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-16 z-10">
        {/*标题*/}
        <Titles />

        {/*头像*/}
        <Avatar />
      </div>
    </div>
  );
};

export default MainSection;
