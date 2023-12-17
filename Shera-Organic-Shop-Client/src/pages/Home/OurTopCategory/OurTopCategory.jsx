import styled from "styled-components";
import TopCategoryCard from "./TopCategoryCard";
import ghee from '../../../assets/images/categories/Oil_Ghee.png'
const topCategory = [
  {
    catName: "Ghee",
    categoryLink: "ghee",
    catItemNo: 3,
    catIcon:
      ghee,
    dotColor: "#ff89c9",
  },
  {
    catName: "Grocery",
    categoryLink: "grocery",
    catItemNo: 7,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png",
    dotColor: "#6eb356",
  },
  {
    catName: "Honey",
    categoryLink: "honey",
    catItemNo: 9,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/B1w5t5CWLo5OtLqvM332UQfsWzIarG9qiyEVUNb0.png",
    dotColor: "#ff89c9",
  },
  {
    catName: "Nuts",
    categoryLink: "nuts",
    catItemNo: 4,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/wUmBSdLhhuyiPqNrzJJbxdtFemrBtwS2lDcfecbf.png",
    dotColor: "#6eb356",
  },
  {
    catName: "Oil",
    categoryLink: "oil",
    catItemNo: 8,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/TMmhA1bTP1CTsrU3FpNspex6S3WNdqKy2xZR9aM8.png",
    dotColor: "#ff89c9",
  },
  {
    catName: "Tea & Snacks",
    categoryLink: "tea-and-snacks",
    catItemNo: 5,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/OfNXzapZlaGqPdd3IcLP4D4bp8BkwDEjlRGhGbfh.png",
    dotColor: "#6eb356",
  },
];
const CatBorder = styled.div`
  border: 2px dashed #fd7e14;
  border-radius: 10px;
  padding: 40px 32px;
`;

const OurTopCategory = () => {
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
                categoryLink={s.categoryLink}
              />
            );
          })}
        </CatBorder>
      </div>

      <img
        className="absolute bottom-0 -z-10"
        src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/bg-shape.png"
        alt=""
      />
    </div>
  );
};

export default OurTopCategory;
