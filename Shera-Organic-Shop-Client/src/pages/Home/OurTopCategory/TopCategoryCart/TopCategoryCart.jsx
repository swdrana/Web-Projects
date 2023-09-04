import { styled } from "styled-components";

const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 1px dashed #6eb356;
  padding: 8px;
  border-radius: 50%;
`;
const TopCategoryCart = () => {
  return (
    <div>
      <div className=" w-44 h-52 border rounded-lg flex items-center justify-center flex-col">
        <Img
          src="https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png"
          alt=""
          className=" image-full"
        ></Img>
        <h2 className=" text-md font-bold mt-2 mb-1">Cat 1</h2>
        <p>3 Items</p>
      </div>
    </div>
  );
};

export default TopCategoryCart;
