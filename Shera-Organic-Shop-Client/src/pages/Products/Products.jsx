import bgShape5 from "./../../assets/images/bg/bg-shape-6-curve-bottom-white.png";
import ProductCardBig from "./../../components/ProductCard/ProductCardBig";
function Products() {
  return (
    <>
      {/* Title Section */}
      <div>
        <div className=" bg-[rgba(110,179,86,.13)] h-full w-full py-16">
          <h1 className=" text-3xl font-bold text-center">Products</h1>
        </div>
        <div
          className="bg-[rgba(110,179,86,.13)]  h-[89px] bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgShape5})` }}
        ></div>
      </div>
      {/* Products Container */}
      <div className=" bg-gray-white">
        <div className="container mx-auto py-20">
            <div className=" flex gap-6 flex-col md:flex-row ">
                <div className=" w-full lg:w-1/4 bg-white ">Search Now
                Categories
Apples
08
Organic Vegetable
09
Avocados
06
Dried Fruits & Nuts
10
Coffee
11
Juice Drinks
15
Fresh Fish
18
Filter by Price
0
-
10000
Rating

48

14

36

24
Tags.
Best Selling
product
Strawberry juice Fruit
$140.00
product
Strawberry juice Fruit
$140.00
product
Strawberry juice Fruit
$140.00
product
Strawberry juice Fruit
$140.00

                </div>
                <div className="  w-full lg:w-3/4 bg-white ">Showing 1-12 of 45 resultfa-spin
                    <div className="flex flex-wrap gap-5">
                    <ProductCardBig/>
                    <ProductCardBig/>
                    <ProductCardBig/>
                    <ProductCardBig/>
                    <ProductCardBig/>
                    <ProductCardBig/>
                    </div>
                    <div className="join  justify-center w-full">
                        <button className="join-item btn">1</button>
                        <button className="join-item btn">2</button>
                        <button className="join-item btn btn-disabled">...</button>
                        <button className="join-item btn">99</button>
                        <button className="join-item btn">100</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Products;
