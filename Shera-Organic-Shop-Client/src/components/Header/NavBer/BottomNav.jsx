import { Link } from "react-router-dom"

import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
function BottomNav({userInfo}) {
    return (
        <div className=" z-10 border-t-[1px] fixed bottom-0 bg-gray-200 backdrop-filter backdrop-blur bg-opacity-20  lg:hidden w-full h-[45px] sm:h-[64px] grid grid-cols-4 text-xs">
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link to='/' className="flex flex-col justify-center items-center">
          <AiOutlineHome size={20}/>
            <p className=" text-gray-500">Home</p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link to='/products' className="flex flex-col justify-center items-center">
          <RiProductHuntLine size={23} />
            <p className=" text-gray-500">Products</p>{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link to="/profile" className="flex flex-col justify-center items-center">
            <HiOutlineUserCircle size={23} />
            <p className=" text-gray-500">Account</p>{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link
            to="/carts"
            className="flex flex-col justify-center items-center"
          >
            <BsCartPlus size={20} />
            <p className=" text-gray-500">{userInfo?.cart?.length}</p>{" "}
          </Link>
        </div>
      </div>
    )
}

export default BottomNav
