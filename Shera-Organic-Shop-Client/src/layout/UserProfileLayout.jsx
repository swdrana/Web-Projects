import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaTruckArrowRight } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { BsCartCheck } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
function UserProfileLayout() {
  return (
    <div className="bg-gray-white">
      <Header isFixed={true} />{" "}
      <div className=" mx-auto container">
        <div className="flex align-items gap-6 p-4 p-sm-6    bg-white rounded-lg my-4 mb-4 flex-wrap lg:flex-nowrap">
          <div className="rounded-md w-44">
            <img
              src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
              alt="avatar"
              className="rounded-md"
            />
          </div>
          <div className=" flex  gap-4 justify-center flex-col">
            <div>
              <h4 className=" text-2xl font-bold">Robert Jacobs</h4>
              <div className="flex  items-center gap-2 gap-md-4 text-sm flex-wrap">
                <span className=" flex justify-center items-center gap-2">
                  <FaRegEnvelope /> customer@sheraorganic.com
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
      </div>
      {/* ***************************** Layout Header End Here ***************************** */}
      <div className="drawer lg:drawer-open container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ms-0 md:ms-4 p-4 bg-white rounded-lg">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden w-1/2"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-52 min-h-full bg-base-100 text-base-content rounded-lg">
            {/* Sidebar content here */}
            <li className=" border-b">
              <Link to="/profile">Dashboard</Link>
            </li>
            <li className=" border-b">
              <Link to="my-order">Order History</Link>
            </li>
            <li className=" border-b">
              <Link to="/profile">Edit Profile</Link>
            </li>
            <li>
              <Link to="/profile">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UserProfileLayout;
