import ProductCard from "../../../components/ProductCard/ProductCard";


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
        <div className=" container pt-8 mx-auto">
            <div className=" flex flex-col lg:flex-row justify-center gap-0 lg:gap-4">
                <div className=" flex flex-1 flex-col gap-4 items-center p-3 md:px-8 lg:p-0">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
                <div className="hidden xl:flex flex-1 flex-col  items-center justify-center bg-base-100 rounded-md">
                    <img src="https://grostore.themetags.com/public/uploads/media/4XLlX5B52ESQ9DQW7D79aNa6OUooSX4Y13F9lMp9.png" alt="" />
                </div>
                
                <div className=" flex flex-1 flex-col gap-4 items-center mt-5 md:mt-0 p-3 md:px-10 lg:p-0">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
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
