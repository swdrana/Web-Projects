import { Link } from "react-router-dom"
import { BsArrowRightShort } from "react-icons/bs";
function ProductCard() {
    return (
        <div className=" w-full  lg:w-[424px] h-full md:h-[154px] flex flex-col md:flex-row p-4 md:items-center bg-base-100 rounded-md gap-7">
            <img className=" mx-auto md:mx-0 md:h-[120px] bg-[#f3f3f3] rounded-md" src="https://grostore.themetags.com/public/uploads/media/xjVdlK6g0PT8vq5BdxjSb8D441BPj0384WahBdRl.png" alt="" />
            <div className="">
                <h3 className=" font-bold text-[15px] pb-2">Green Melon ± 50 gm</h3>
                <p><strong className="text-[#ff0406] text-[17px]">৳400</strong> <span className="text-[14px]">/kg</span></p>
                <Link className=" flex font-bold text-[#6eb356] hover:text-[#ff7c08] transition-all text-[13px] pt-2">Buy Now <BsArrowRightShort size={20} /></Link>
            </div>
        </div>
    )
}

export default ProductCard;
