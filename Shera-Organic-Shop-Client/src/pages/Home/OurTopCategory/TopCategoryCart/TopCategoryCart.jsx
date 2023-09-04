import { styled } from "styled-components";

const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 1px dashed #6eb356;
  padding: 8px;
  border-radius: 50%;
`;
const Div = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: 6px;
    bottom: 9px;
    background-color: ${(props) => (props.dotColor ? props.dotColor : "red")};
    border-radius: 50%;
  }
  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    right: 5px;
    top: 12px;
    background-color: ${(props) => (props.dotColor ? props.dotColor : "red")};
    border-radius: 50%;
  }
`;
const ItemNo = styled.p`
  /* color:${(props) => (props.dotColor ? props.dotColor : "white")}; */
  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 7px;
    background-color: ${(props) => (props.dotColor ? props.dotColor : "red")};
    border-radius: 50%;
    transform: translateY(-1px);
  }
`;
const TopCategoryCart = () => {
  const dotColor = "#6eb356";
  const catIcon =
    "https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png";
  const catName = "Cat 21";
  const catItemNo = 1;
  return (
    <div>
      <div
        className=" w-44 h-52 border rounded-lg flex items-center justify-center flex-col
       
      "
      >
        <Div dotColor={dotColor}>
          <Img src={catIcon} alt={catIcon} className=" image-full"></Img>
        </Div>
        <h2 className=" text-md font-bold mt-2 mb-1">{catName}</h2>
        <ItemNo dotColor={dotColor}>{`${catItemNo} ${
          catItemNo == 1 ? "Item" : "Items"
        }`}</ItemNo>
      </div>
    </div>
  );
};

export default TopCategoryCart;
