import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
function ProductCardSmall({product}) {
  const {_id, productName,shortDescription, description, productCategory,variants, isPublished, productThumbnail, productGallery} = product;
  return (
    <Link to={`/details/${_id}`}  className=" group">
      <div className=" w-full  h-full md:h-[154px] flex flex-col md:flex-row p-4 md:items-center bg-base-100 rounded-md gap-7">
        <div className="relative flex justify-center items-center">
        <img
          className=" mx-auto md:mx-0 md:h-[120px] bg-[#f3f3f3] rounded-md"
          src={productThumbnail}
          alt={productThumbnail}
        />

      <div className=" bg-[#00000065] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 absolute  w-full h-full flex justify-center items-center">
        <Link  to={`/details/${_id}`}  className=" rounded-full p-2 group  hover:bg-primary transition-all duration-200 bg-white opacity-100 absolute hover:text-white">
          <FaRegEye></FaRegEye>
        </Link>
      </div>
        </div>


        <div className="">
          <h3 className=" font-bold text-[15px] pb-2">{productName}</h3>
          <p>
            <strong className="text-[#ff0406] text-[17px]">৳{variants[0].price} </strong>{" "}
            <span className="text-[14px]">/{variants[0].size}</span>
          </p>
          <Link to={`/details/${_id}`}  className=" flex font-bold text-[#6eb356] hover:text-[#ff7c08] transition-all text-[13px] pt-2">
            Buy Now <BsArrowRightShort size={20} />
          </Link>
        </div>
      </div>

    </Link>
  );
}

export default ProductCardSmall;
