import BlogSection from "./BlogSection";
import SectionTwo from "./sectionTwo/SectionTwo";
import Slider from "./Slider";
import Sponsor from "./Sponsor";
import Statistic from "./Statistic";

export default function Home() {
  return (
    <>
      <Slider />
      <div className=" container mx-auto">
        <SectionTwo />
        <Statistic />
        <Sponsor />
        <BlogSection/>
      </div>
    </>
  );
}
