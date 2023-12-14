import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaTruckArrowRight } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { BsCartCheck } from "react-icons/bs";
const UserProfile = () => {
  return (
    <div className="flex align-items gap-6 p-4 p-sm-6 bg-white rounded mb-4 flex-wrap lg:flex-nowrap">
      <div className="rounded-md w-44">
        <img
          src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
          alt="avatar"
          className="rounded-md"
        />
      </div>
      <div className=" flex  gap-4 justify-center flex-col">
        <div>
          <h4 className=" text-2xl font-bold">Developer Rana</h4>
          <div className="flex  items-center gap-2 gap-md-4 text-sm flex-wrap">
            <span className=" flex justify-center items-center gap-2">
              <FaRegEnvelope /> codingbengal@gmail.com
            </span>
            <span className=" flex justify-center items-center gap-2">
              <FaPhoneAlt />
              +880 1235 385 478
            </span>
          </div>
        </div>

        <div className="flex items-center flex-wrap mt-6 gap-5">
          <div className="flex items-center gap-3">
            <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-green-600 bg-green-200 h-14 w-14">
              <AiOutlineHome size={40} />
            </span>
            <div>
              <h4 className=" font-bold text-2xl">4</h4>
              <span className=" text-gray-light">Total Delivered</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-blue-600 bg-blue-200 h-14 w-14">
              <FaTruckArrowRight size={40} />
            </span>
            <div>
              <h4 className=" font-bold text-2xl">4</h4>
              <span className=" text-gray-light">Total Shipped</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-orange-600 bg-orange-200 h-14 w-14">
              <RiLoopLeftFill size={40} />
            </span>
            <div>
              <h4 className=" font-bold text-2xl">4</h4>
              <span className=" text-gray-light">Order Processing</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-purple-600 bg-purple-200 h-14 w-14">
              <BsCartCheck size={40} />
            </span>
            <div>
              <h4 className=" font-bold text-2xl">4</h4>
              <span className=" text-gray-light">New Orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
