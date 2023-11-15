import useProducts from "../../../hooks/useProducts";
import SectionTitle from "../../components/Pages/SectionTitle";
import ProductCardBig from "./../../components/ProductCard/ProductCardBig";
import {FaSearch} from 'react-icons/fa'
function Products() {
  const [products, isLoading] = useProducts();

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <>
      {/* Title Section */}
      <SectionTitle title={"Products"}/>
      {/* Products Container */}
      <div className=" bg-gray-white">
        <div className="container mx-auto py-20">
            <div className=" flex gap-6 flex-col md:flex-row ">
                <div className=" w-full lg:w-1/4 bg-white p-5">
                  <h3 className=" text-md font-black py-5">Search Now</h3>
                  <div className=" flex gap-2 pb-5">
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary" />
                    <button className="btn btn-outline btn-secondary"><FaSearch className=" hover:text-white"/></button>
                  </div>


                  <div className="divider"></div> 
                  <h3 className=" text-md font-black py-5">Categories</h3>
                  <div className=" flex flex-col h-1/4 overflow-y-scroll gap-3">
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Food</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Coffee</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Ghee</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Milk</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Fresh Foods</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Fast Foods</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md w-full">Others</button>
                  </div>


                  <div className="divider"></div> 
                  <h3 className=" text-md font-black py-5">Filter by Price</h3>
                  <div className=" flex flex-col gap-3">
                    <input type="range" min={0} max={100}  className="range range-xs range-primary" /> 
                    <div className=" flex items-center gap-3">
                        <input type="number" placeholder="0" className="input input-bordered w-1/2 input-secondary" />
                        -
                        <input type="number" placeholder="900" className="input input-bordered w-1/2 input-secondary" />
                    </div>
                    <button className="btn btn-primary text-white">Filter</button>
                  </div>


                  <div className="divider"></div> 
                  <h3 className=" text-md font-black py-5">Tags</h3>
                  <div className=" flex flex-col h-1/3 overflow-y-scroll gap-3"><div className=" flex flex-wrap items-center gap-3">
                      <button className="btn btn-sm btn-outline btn-primary">Food</button>  
                      <button className="btn btn-sm btn-outline btn-primary">Coffee</button>  
                      <button className="btn btn-sm btn-outline btn-primary">Ghee</button>  
                      <button className="btn btn-sm btn-outline btn-primary">Milk</button>  
                      <button className="btn btn-sm btn-outline btn-primary">Fresh Foods</button>  
                      <button className="btn btn-sm btn-outline btn-primary">Fast Foods</button>  
                      <button className="btn btn-sm btn-outline btn-primary">Oil</button>  
                    </div>
                  </div>
                  {/* Left Side End Here Right Side Start Here  */}
                </div>
                <div className="  w-full lg:w-3/4 bg-white ">
                  <div className=" flex flex-col lg:flex-row gap-5 items-center justify-between p-5 font-bold">
                    <h3 className=" text-lg">Showing 1-9 of 35 results</h3>
                    <div className=" flex items-center gap-2">
                      <p>Show: &nbsp;</p>
                      <input  type="number" className="input input-bordered input-sm w-14 " name="" value={9} id="" />
                      <p>Sort by: &nbsp; </p>
                      <select className="select select-bordered select-sm w-24">
                        <option disabled selected>Select</option>
                        <option>Apple</option>
                        <option>Orange</option>
                        <option>Tomato</option>
                      </select>
                    </div>
                  </div>
                  
                    <div className="flex flex-wrap gap-5">
                  {products.map((product) => (
                    <ProductCardBig key={product._id} product={product} />
                  ))}
                </div>
                    <div className="join  justify-center w-full py-10">
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
