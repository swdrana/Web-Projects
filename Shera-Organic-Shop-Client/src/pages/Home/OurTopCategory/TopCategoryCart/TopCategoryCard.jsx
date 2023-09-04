import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 1px dashed ${(props) => (props.dotcolor ? props.dotcolor : "red")};
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
    background-color: ${(props) => (props.dotcolor ? props.dotcolor : "red")};
    border-radius: 50%;
  }
  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    right: 5px;
    top: 12px;
    background-color: ${(props) => (props.dotcolor ? props.dotcolor : "red")};
    border-radius: 50%;
  }
`;
const ItemNo = styled.p`
  /* color:${(props) => (props.dotcolor ? props.dotcolor : "white")}; */
  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 7px;
    background-color: ${(props) => (props.dotcolor ? props.dotcolor : "red")};
    border-radius: 50%;
    transform: translateY(-1px);
  }
`;
// eslint-disable-next-line react/prop-types
const TopCategoryCard = ({dotcolor, caticon, catname, catitemno, categoryLink}) => {
  return (
    <Link to={categoryLink}>
      <div className=" w-44 h-52 border rounded-lg flex items-center justify-center flex-col">
        <Div dotcolor={dotcolor}>
          <Img src={caticon} alt={caticon} dotcolor={dotcolor} className=" image-full"></Img>
        </Div>
        <h2 className=" text-md font-bold mt-2 mb-1">{catname}</h2>
        <ItemNo dotcolor={dotcolor}>{`${catitemno} ${
          catitemno == 1 ? "Item" : "Items"
        }`}</ItemNo>
      </div>
    </Link>
  );
};

export default TopCategoryCard;
