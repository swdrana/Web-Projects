import useProducts from "../../../hooks/useProducts";
import useCategory from "../../../hooks/useCategory";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import SectionTitle from "../../components/Pages/SectionTitle";
import ProductCardBig from "./../../components/ProductCard/ProductCardBig";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
function Products() {
  const viewProductRef = useRef(null);

  const [products, isLoading] = useProducts();
  const [categories, loading, refetch, isError, error] = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const { category } = useParams();
  useEffect(() => {
    // Check if category parameter is present in the URL
    if (category) {
      // Filter products based on the category parameter
      setSelectedCategory(category.toLowerCase().trim());
    } else {
      // No category parameter, show all products
      setSelectedCategory("");
    }
  }, [category]);

  const filteredProducts = products.filter((product) => {
    const productCategory = product.productCategory.toLowerCase().trim()
    const selectedCategoryLowerCase = selectedCategory.toLowerCase().trim();
    const productName = product.productName.toLowerCase().trim();
    const searchQuery = searchTerm.toLowerCase().trim();

    const categoryMatch =
      selectedCategoryLowerCase === "" ||
      productCategory === selectedCategoryLowerCase;

    const searchMatch =
      searchQuery === "" ||
      productName.includes(searchQuery) ||
      product.description.includes(searchQuery);

    return categoryMatch && searchMatch;
  });
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  if (isLoading || loading) {
    return <LoadingProgress />;
  }

  return (
    <>
      {/* Title Section */}
      <SectionTitle title={"Products"} />
      {/* Products Container */}
      <div className=" bg-gray-white">
        <div className="container mx-auto py-20">
          <div className=" flex gap-6 flex-col md:flex-row ">
            <div className=" w-full lg:w-1/4 bg-white p-5">
              <h3 className=" text-md font-black py-5">Search Now</h3>
              <div className=" flex gap-2 pb-5">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-secondary"
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={(e) => {
                    return e.key === 'Enter' ?
                      viewProductRef.current.scrollIntoView({ behavior: 'smooth' })
                      : ''
                    }
                  }
                />
                <button className="btn btn-outline btn-secondary" onClick={()=>viewProductRef.current.scrollIntoView({ behavior: 'smooth' })}>
                  <FaSearch className=" hover:text-white" />
                </button>
              </div>

              <div className="divider"></div>
              <h3 className=" text-md font-black py-5">Categories</h3>
              <div className=" flex flex-col h-2/4 overflow-y-scroll gap-3">
                <button
                  className="btn btn-xs sm:btn-sm md:btn-md w-full"
                  onClick={() => {
                    viewProductRef.current.scrollIntoView({ behavior: 'smooth' });
                    setSelectedCategory("");
                    setSearchTerm("");
                  }}
                >
                  {" "}
                  All
                </button>
                {categories.map((category) => (
                  <button
                    
                    key={category._id}
                    className="btn btn-xs sm:btn-sm md:btn-md w-full"
                    onClick={() =>{
                      viewProductRef.current.scrollIntoView({ behavior: 'smooth' });
                      return setSelectedCategory(category.categoryName)
                    }}
                  >
                    {category.categoryName}
                  </button>
                ))}
              </div>

{/* Filter by price  */}
              {/* <div className="divider"></div>
              <h3 className=" text-md font-black py-5">Filter by Price</h3>
              <div className=" flex flex-col gap-3">
                <input
                  type="range"
                  min={0}
                  max={100}
                  className="range range-xs range-primary"
                />
                <div className=" flex items-center gap-3">
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered w-1/2 input-secondary"
                  />
                  -
                  <input
                    type="number"
                    placeholder="900"
                    className="input input-bordered w-1/2 input-secondary"
                  />
                </div>
                <button className="btn btn-primary text-white">Filter</button>
              </div> */}
{/* Tag  */}
              {/* <div className="divider"></div>
              <h3 className=" text-md font-black py-5">Tags</h3>
              <div className=" flex flex-col h-1/3 overflow-y-scroll gap-3">
                <div className=" flex flex-wrap items-center gap-3">
                  <button className="btn btn-sm btn-outline btn-primary">
                    Food
                  </button>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Coffee
                  </button>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Ghee
                  </button>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Milk
                  </button>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Fresh Foods
                  </button>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Fast Foods
                  </button>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Oil
                  </button>
                </div>
              </div> */}
              {/* Left Side End Here Right Side Start Here  */}
            </div>
            <div id="view-product" ref={viewProductRef} className="  w-full lg:w-3/4 bg-white ">
              <div className=" flex flex-col lg:flex-row gap-5 items-center justify-between p-5 font-bold">
                <h3 className=" text-lg">Showing {filteredProducts.length} of {products.length} results</h3>
                {/* <div className=" flex items-center gap-2">
                  <p>Show: &nbsp;</p>
                  <input
                    type="number"
                    className="input input-bordered input-sm w-14 "
                    name=""
                    value={9}
                    id=""
                  />
                  <p>Sort by: &nbsp; </p>
                  <select className="select select-bordered select-sm w-24">
                    <option disabled selected>
                      Select
                    </option>
                    <option>Apple</option>
                    <option>Orange</option>
                    <option>Tomato</option>
                  </select>
                </div> */}
              </div>

              <div className="flex flex-wrap gap-5">
                {filteredProducts.map((product) => (
                  <ProductCardBig key={product._id} product={product} />
                ))}
              </div>
              {/* <div className="join  justify-center w-full py-10">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
