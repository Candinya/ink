import Feed from "./Feed";
import ActivityCount from "./ActivityCount";

const Activities = () => (
  <div className="w-full mt-screen/2">
    {/*Feed*/}
    <Feed />

    {/*活动统计*/}
    <ActivityCount />
  </div>
);

export default Activities;
