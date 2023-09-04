import styled from "styled-components";
import TopCategoryCard from "./TopCategoryCart/TopCategoryCard";

const topCategory = [
  {
    catName: "Ghee",
    categoryLink:'ghee',
    catItemNo: 3,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/5oephm2sfLrK3ISeqQThhR9rA5FKcCsDnRsOezBZ.png",
    dotColor: "#ff89c9",
  },
  {
    catName: "Grocery",
    categoryLink:'grocery',
    catItemNo: 7,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png",
    dotColor: "#6eb356",
  },
  {
    catName: "Honey",
    categoryLink:'honey',
    catItemNo: 9,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/B1w5t5CWLo5OtLqvM332UQfsWzIarG9qiyEVUNb0.png",
    dotColor: "#ff89c9",
  },
  {
    catName: "Nuts",
    categoryLink:'nuts',
    catItemNo: 4,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/wUmBSdLhhuyiPqNrzJJbxdtFemrBtwS2lDcfecbf.png",
    dotColor: "#6eb356",
  },
  {
    catName: "Oil",
    categoryLink:'oil',
    catItemNo: 8,
    catIcon:
      "https://grostore.themetags.com/public/uploads/media/TMmhA1bTP1CTsrU3FpNspex6S3WNdqKy2xZR9aM8.png",
    dotColor: "#ff89c9",
  },
  {
    catName: "Tea & Snacks",
    categoryLink:'tea-and-snacks',
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
    <div className=" container mx-auto relative my-5">
      <h2 className=" text-center text-2xl">Our Top Categories</h2>
      <CatBorder className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-2 overflow-scroll">
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
  );
};

export default OurTopCategory;
