import bgShape5 from "./../../assets/images/bg/bg-shape-6-curve-bottom-white.png";
function SectionTitle({title}) {
  return (
    <div>
      <div>
        <div className=" bg-[rgba(110,179,86,.13)] h-full w-full py-16">
          <h1 className=" text-3xl font-bold text-center">{title}</h1>
        </div>
        <div
          className="bg-[rgba(110,179,86,.13)]  h-[89px] bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgShape5})` }}
        ></div>
      </div>
    </div>
  );
}

export default SectionTitle;
