import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
const Img = styled.img`
  width: 80px;
  height: 80px;
  /* border: 1px dashed ${(props) => (props.dotcolor ? props.dotcolor : "red")}; */
  /* padding: 8px; */
  /* border-radius: 50%; */
`;
const Div = styled.div`
  position: relative;
  /* &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: 6px;
    bottom: 9px;
    background-color: ${(props) => (props.dotcolor ? props.dotcolor : "red")};
    border-radius: 50%;
  } */
  /* &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    right: 5px;
    top: 12px;
    background-color: ${(props) => (props.dotcolor ? props.dotcolor : "red")};
    border-radius: 50%;
  } */
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
const TopCategoryCard = ({dotcolor,caticon, catname, catitemno,
}) => {
  return (
    <Link to={`/products/${catname}`} className=" w-full  sm:w-44 relative group  overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="h-52 border rounded-lg flex items-center justify-center flex-col">
        <Div dotcolor={dotcolor}>
          <Img
            src={caticon}
            alt={caticon}
            dotcolor={dotcolor}
            className=" image-full"
          ></Img>
        </Div>
        <h2 className=" text-md font-bold mt-2 mb-1">{catname}</h2>
        <ItemNo dotcolor={dotcolor}>{`${catitemno} ${
          catitemno == 1 ? "Item" : "Items"
        }`}</ItemNo>
      </div>
      <div className=" absolute right-0 transition-all duration-200 bottom-0 p-2 bg-secondary text-white rounded-br-lg opacity-0 scale-x-0 translate-x-8 translate-y-7  group-hover:translate-x-0 group-hover:translate-y-0  group-hover:scale-100 group-hover:opacity-100 ">
        <div className=" rotate-45">
          <FaArrowUp></FaArrowUp>
        </div>
      </div>
    </Link>
  );
};

export default TopCategoryCard;
