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
        <div className=" container pt-3 mx-auto">
            <div className=" flex justify-between">
                <div className=" flex justify-center items-center rounded border border-orange-400 border-dashed w-full h-96 m-5 ">Products</div>
                <div className=" flex justify-center items-center rounded border border-orange-400 border-dashed w-full h-96 m-5 ">Image</div>
                <div className=" flex justify-center items-center rounded border border-orange-400 border-dashed w-full h-96 m-5 ">Products</div>
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
