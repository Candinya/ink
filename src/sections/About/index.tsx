import SectionTitle from "@/components/SectionTitle";
import Name from "./Name";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="-mt-screen/4 w-full flex flex-col justify-center items-center">
      <SectionTitle title={"关于我"} />
      <Name />
      <Skills />
    </div>
  );
};

export default About;
