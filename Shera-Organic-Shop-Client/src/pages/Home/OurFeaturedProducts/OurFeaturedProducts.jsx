import FeaturedProductCard from "./FeaturedProductCard/FeaturedProductCard";

const OurFeaturedProducts = () => {
  return (
    <div className=" bg-[#eef6eb] py-24 md:py-32 relative">
      <div>
        <h1 className="text-3xl text-center font-bold">
          Our Featured Products
        </h1>
        <p className=" text-center text-[#5d6374] text-md">
          Platform mindshare through effective infomediaries Dynamically
          implement.
        </p>
      </div>
        <div className=" px-8 pt-3 mx-auto">
            <div className=" flex flex-col md:flex-row justify-between">
                <div className=" flex flex-col gap-2 p-3 justify-center items-center rounded border border-orange-400 border-dashed w-full m-5 ">
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                </div>
                <div className=" hidden sm:block  p-3 items-center rounded border border-orange-400 border-dashed w-full m-5 ">
                    <img src="https://grostore.themetags.com/public/uploads/media/4XLlX5B52ESQ9DQW7D79aNa6OUooSX4Y13F9lMp9.png" alt="" />
                </div>
                
                <div className=" flex flex-col gap-2 p-3 justify-center items-center rounded border border-orange-400 border-dashed w-full m-5 ">
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                </div>
            </div>
        </div>
      <img
        className=" absolute bottom-0"
        src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/bg-shape-2.png"
        alt=""
      />
    </div>
  );
};

export default OurFeaturedProducts;
