import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { InitiateCheckout } from "../../utilities/facebookPixel";
function ProductCardSmall({ product }) {
  const { _id, productName, variants, productThumbnail } = product;
  return (
    <Link to={`/details/${_id}`} className=" group w-full">
      <div className=" w-full  h-full md:h-[154px] flex flex-row p-4 md:items-center bg-base-100 rounded-md gap-7">
        <div className="relative flex justify-center items-center w-4/12">
          <img
            className=" mx-auto md:mx-0 md:h-[120px] bg-[#f3f3f3] rounded-md"
            src={productThumbnail}
            alt={productThumbnail}
          />

          <div className=" bg-[#00000065] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 absolute  w-full h-full flex justify-center items-center">
            <div className=" rounded-full p-2 group  hover:bg-primary transition-all duration-200 bg-white opacity-100 absolute hover:text-white">
              <FaRegEye></FaRegEye>
            </div>
          </div>
        </div>
        <div className=" w-8/12">
          <h3 className=" font-bold text-[15px] pb-2">{productName}</h3>
          <p>
            <strong className="text-[#ff0406] text-[17px]">
              ৳{variants[0].price}{" "}
            </strong>{" "}
            <span className="text-[14px]">/{variants[0].size}</span>
          </p>
          <div className=" flex font-bold text-[#6eb356] hover:text-[#ff7c08] transition-all text-[13px] pt-2" onClick={()=>InitiateCheckout(_id,productName,variants[0].price)}>
            Buy Now <BsArrowRightShort size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCardSmall;
