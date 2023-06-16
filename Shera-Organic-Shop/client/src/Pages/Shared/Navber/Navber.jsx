import { Link } from "react-router-dom";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
const Navber = () => {
  const [hiddenMenu, setHiddenMenu] = useState("hidden");
  const navOptions = (
    <>
      <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li>
              <Link to={"/biscuits"}>Biscuits</Link>
            </li>
            <li>
              <Link to={"breakfast"}>Breakfast</Link>
            </li>
            <li>
              <Link to={"baby"}>Baby</Link>
            </li>
            <li>
              <Link to={"organic"}>Organic</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to={"/products"}>Products</Link>
      </li>
      <li>
        <Link to={"/campaigns"}>Campaigns</Link>
      </li>
      <li>
        <Link to={"/coupons"}>Coupons</Link>
      </li>

      <li tabIndex={0}>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li>
              <Link to={"blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"terms-conditions"}>Terms & Conditions</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <>
      <div className="h-28">
        <div className=" bg-[#6eb356] md:h-[75px] h-0 relative ">
          <div className="container mx-auto py-2 text-white flex justify-between">
            <p className="">Welcome to Shera Organic Shop</p>
            <div className="flex gap-6">
              <p>groshop@support.com</p>
              <p className="">Dark</p>
            </div>
          </div>
          <div className="navbar bg-base-100 max-w-screen-xl  absolute md:top-10 top-0 left-1/2 -translate-x-1/2 rounded-lg">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <BsGrid3X3GapFill
                    className=" absolute "
                    size={25}
                    color="green"
                  ></BsGrid3X3GapFill>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navOptions}
                </ul>
              </div>
              <Link to={"/"} className="btn btn-ghost">
                <img
                  src="https://grostore.themetags.com/public/uploads/media/0vDgRJLm6biMs5zCaVAze5RFwEwcTF4kSuHsZ9OT.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>

            {/* Search Cart Profile  */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <BsSearch size={20} />
                </div>
              </label>
              <div
                tabIndex={0}
                className={`card card-compact dropdown-content  bg-sky-400 shadow`}
              >
                <div className="card-body flex flex-row">
                  <input
                    className=" input border-gray-300"
                    type="text"
                    name=""
                    id=""
                  />
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">Go</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className={`mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow`}
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            {/* Search Cart Profile End */}
            <div className="navbar-end">
              <BsGrid3X3GapFill size={25} color="green"></BsGrid3X3GapFill>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-t-[1px] fixed bottom-0 bg-white backdrop-filter backdrop-blur bg-opacity-50  sm:hidden w-full h-[64px] grid grid-cols-4 text-xs">
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link className="flex flex-col justify-center items-center">
            <FiMenu size={20} />
            <p className=" text-gray-500">Menu</p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link className="flex flex-col justify-center items-center">
            <BsSearch size={20} />
            <p className=" text-gray-500">Search</p>{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link className="flex flex-col justify-center items-center">
            <HiOutlineUserCircle size={23} />
            <p className=" text-gray-500">Account</p>{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center border-r-[1px]">
          <Link className="flex flex-col justify-center items-center">
            <BsCartPlus size={20} />
            <p className=" text-gray-500">54985</p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navber;