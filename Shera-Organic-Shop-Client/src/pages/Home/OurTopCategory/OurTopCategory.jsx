import styled from "styled-components";
import TopCategoryCard from "./TopCategoryCard";
import ghee from "../../../assets/images/categories/Oil_Ghee.png";
import Honey from "../../../assets/images/categories/Honey.png";
import Nuts from "../../../assets/images/categories/Nuts _ Seeds.png";
import Grocery from "../../../assets/images/categories/Grocery _ spices_.png";
import Herbal from "../../../assets/images/categories/Herbal _ powder.png";
import Combo from "../../../assets/images/categories/Combo package_.png";
import bsShape from "../../../assets/images/bg/bg-shape.png";
import useProducts from "../../../../hooks/useProducts";

const CatBorder = styled.div`
  border: 2px dashed #fd7e14;
  border-radius: 10px;
  padding: 40px 32px;
`;

const OurTopCategory = () => {
  const [products] = useProducts();
  // console.log(products)
  const categoryCounts = products.reduce((acc, product) => {
  const category = product.productCategory;
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});
  const topCategory = [
    {
      catName: "Oil & Ghee",
      catItemNo: categoryCounts["Oil & Ghee"] || 0,
      catIcon: ghee,
      dotColor: "#ff89c9",
    },
    {
      catName: "Honey",
      catItemNo: categoryCounts["Honey"] || 0,
      catIcon: Honey,
      dotColor: "#6eb356",
    },
    {
      catName: "Nuts & seeds",
      catItemNo: categoryCounts["Nuts & seeds"] || 0,
      catIcon: Nuts,
      dotColor: "#ff89c9",
    },
    {
      catName: "Grocery & spices ",
      catItemNo: categoryCounts["Grocery & spices"] || 0,
      catIcon: Grocery,
      dotColor: "#6eb356",
    },
    {
      catName: "Herbal & Power",
      catItemNo: categoryCounts["Herbal & Power"] || 0,
      catIcon:Herbal,
      dotColor: "#ff89c9",
    },
    {
      catName: "Combo package",    
      catItemNo: categoryCounts["Combo package"] || 0,
      catIcon:Combo,
      dotColor: "#6eb356",
    },
  ];

  return (
    <div className=" relative">
      <div className="container w-11/12 sm:w-full mx-auto relative bg-base-100">
        <h2 className="text-center text-lg md:text-3xl absolute -top-4 left-1/2 -translate-x-1/2 bg-base-100 font-bold">
          Our Top Categories
        </h2>
        <CatBorder className=" flex flex-wrap justify-center gap-5">
          {topCategory.map((s) => {
            return (
              <TopCategoryCard
                key={s.catName}
                dotcolor={s.dotColor}
                caticon={s.catIcon}
                catname={s.catName}
                catitemno={s.catItemNo}
              />
            );
          })}
        </CatBorder>
      </div>

      <img
        className="absolute bottom-0 -z-10"
        src={bsShape}
        alt={bsShape}
      />
    </div>
  );
};

export default OurTopCategory;
