import useProducts from "../../../../hooks/useProducts";
import ProductCardSmall from "../../../components/ProductCard/ProductCardSmall";
import bgShapeBottomWhite from './../../../assets/images/bg/bg-shape-2.png'
import featureImg from './../../../assets/images/feature/product-page-feature.png'

const OurFeaturedProducts = () => {
  const [products, isLoading] = useProducts();
  if(isLoading) return <>Loading...</>
  // console.log(products)
  return (
    <div className=" bg-[#eef6eb] py-24 md:py-32 px-0 lg:px-5 relative">
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
                    {products.slice(0,4).map(product=>{
                      return <ProductCardSmall key={product._id} product={product}/>
                    })}
                </div>
                <div className="hidden xl:flex flex-1 flex-col  items-center justify-center bg-base-100 rounded-md">
                    <img src={featureImg} alt={featureImg}/>
                </div>
                <div className=" flex flex-1 flex-col gap-4 items-center mt-5 md:mt-0 p-3 md:px-10 lg:p-0">
                {products.slice(4,8).map(product=>{
                      return <ProductCardSmall key={product._id} product={product}/>
                    })}
                </div>
            </div>
        </div>
      <img
        className=" absolute bottom-0"
        src={bgShapeBottomWhite}
        alt=""
      />
    </div>
  );
};

export default OurFeaturedProducts;
