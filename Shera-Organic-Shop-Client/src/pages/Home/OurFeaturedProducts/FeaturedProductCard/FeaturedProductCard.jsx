import { Link } from "react-router-dom"
import { BsArrowRightShort } from "react-icons/bs";
function FeaturedProductCard() {
    return (
        <div className="  w-[406px] h-[136px] flex p-3 bg-white rounded-md flex gap-6">
            <div className=" ">
            <img className=" h-[88px] bg-[#f3f3f3] rounded-md" src="https://grostore.themetags.com/public/uploads/media/xjVdlK6g0PT8vq5BdxjSb8D441BPj0384WahBdRl.png" alt="" /></div>
            <div className=" flex flex-col justify-center gap-1">
                <h3 className=" font-bold text-[15px]">Green Melon ± 50 gm</h3>
                <p><strong className="text-[#ff0406] text-[17px]">৳400</strong> <span className="text-[14px]">/kg</span></p>
                <Link className=" flex font-bold text-[#6eb356] hover:text-[#ff7c08] transition-all text-[13px]">Buy Now <BsArrowRightShort size={20} /></Link>
            </div>
        </div>
    )
}

export default FeaturedProductCard
