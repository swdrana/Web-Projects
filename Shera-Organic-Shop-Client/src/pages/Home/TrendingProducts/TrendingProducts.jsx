import useProducts from "../../../../hooks/useProducts";
import ProductCardBig from "../../../components/ProductCard/ProductCardBig";

const TrendingProducts = () => {
  const [products, isLoading] = useProducts();
  return (
    <div className="container mx-auto mb-16">

    <div className="flex justify-center flex-col pt-16 px-3 md:px-7 lg:px-4">
      <header className=" flex flex-col lg:flex-row items-center lg:items-start md:justify-between pb-10">
        <h1 className=" text-2xl font-bold">Top Trending Products</h1>
        <ul className=" flex flex-col py-5 sm:flex-row justify-center items-center gap-3 text-center font-bold  text-gray-deep transition-all duration-500">
          <div className=" flex  gap-3">
            <button className="text-secondary  transition-all">All Products</button>
            <button className=" hover:text-secondary  transition-all">Breakfast</button>
          </div>
          <div className=" flex gap-3">
            <button className=" hover:text-secondary  transition-all">Fresh Organic</button>
            <button className=" hover:text-secondary  transition-all">Vegetables</button>
          </div>
        </ul>
      </header>
      <section className=" flex flex-wrap justify-center sm:justify-between">
      {products.map((product) => (
                    <ProductCardBig key={product._id} product={product} />
                  ))}
      </section>
    </div>
    </div>
  );
};

export default TrendingProducts;
