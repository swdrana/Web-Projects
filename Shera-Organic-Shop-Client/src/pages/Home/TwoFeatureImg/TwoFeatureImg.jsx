import twoFeatureBig from "./../../../assets/images/feature/twoFeatureBig.png";
import twoFeatureSmall from "./../../../assets/images/feature/twoFeatureSmall.png";
import bgShape from "./../../../assets/images/bg/bg-shape.png";
function TwoFeatureImg() {
  return (
    <div className="  relative">
      <div className="bg-gray-white py-7 ">
        <div className="container px-4 mx-auto flex flex-col xl:flex-row gap-5 justify-center items-center ">
          <img className="" src={twoFeatureBig} alt={twoFeatureBig} />
          <img
            className=" hidden lg:block"
            src={twoFeatureSmall}
            alt={twoFeatureSmall}
          />
        </div>
      </div>
      <div
        className=" -mt-16  h-16 bottom-0 z-50 bg-center"
        style={{ backgroundImage: `url(${bgShape})` }}
      ></div>
    </div>
  );
}

export default TwoFeatureImg;
