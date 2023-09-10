import TBProductCard from "./TBProductCard";

const TrendingProducts = () => {
    return (
        <div className=" container mx-auto pt-16">
            <header className=" flex flex-col lg:flex-row justify-between pb-10">
                <h1 className=" text-2xl font-bold">Top Trending Products</h1>
                <ul className=" flex gap-3">
                    <button>All Products</button>
                    <button>Breakfast</button>
                    <button>Fresh Organic</button>
                    <button>Vegetables</button>
                </ul>
            </header>
            <section>
                <TBProductCard></TBProductCard>
            </section>
        </div>
    );
};

export default TrendingProducts;
