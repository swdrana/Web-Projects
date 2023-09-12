import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
function ProductCardSmall() {
  return (
    <div className=" group transition-all duration-300">
      <div className=" w-full  h-full md:h-[154px] flex flex-col md:flex-row p-4 md:items-center bg-base-100 rounded-md gap-7">
        <div className="relative flex justify-center items-center">
        <img
          className=" mx-auto md:mx-0 md:h-[120px] bg-[#f3f3f3] rounded-md"
          src="https://grostore.themetags.com/public/uploads/media/xjVdlK6g0PT8vq5BdxjSb8D441BPj0384WahBdRl.png"
          alt=""
        />

      <div className=" bg-[#00000065] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 absolute  w-full h-full flex justify-center items-center">
        <button className=" rounded-full p-2 group  hover:bg-primary transition-all duration-200 bg-white opacity-100 absolute hover:text-white">
          <FaRegEye></FaRegEye>
        </button>
      </div>
        </div>


        <div className="">
          <h3 className=" font-bold text-[15px] pb-2">Green Melon ± 50 gm</h3>
          <p>
            <strong className="text-[#ff0406] text-[17px]">৳400</strong>{" "}
            <span className="text-[14px]">/kg</span>
          </p>
          <Link className=" flex font-bold text-[#6eb356] hover:text-[#ff7c08] transition-all text-[13px] pt-2">
            Buy Now <BsArrowRightShort size={20} />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default ProductCardSmall;
