import { Link, useNavigate } from "react-router-dom";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import { AuthContext } from "../../../provider/AuthProvider";
const NavBer = ({ isScrolled }) => {
  const { user, logOut } = useContext(AuthContext);
  const [haveUser, setHaveUser] = useState(false);
  //   const [hiddenMenu, setHiddenMenu] = useState("hidden");
  //for sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navOptions = (
    <>
      <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li>
              <Link to={"/categories"}>All</Link>
            </li>
            <li>
              <Link to={"categories/biscuits"}>Biscuits</Link>
            </li>
            <li>
              <Link to={"categories/breakfast"}>Breakfast</Link>
            </li>
            <li>
              <Link to={"categories/baby"}>Baby</Link>
            </li>
            <li>
              <Link to={"categories/organic"}>Organic</Link>
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
      <div className=" h-14 md:h-28">
        <div
          className={` ${
            isScrolled ? "" : "bg-[#6eb356]"
          }   md:h-[75px]  h-0 relative `}
        >
          {/* Top Info Nav  */}
          <div
            className={`container mx-auto py-2 text-white flex justify-between ${
              isScrolled ? "hidden" : ""
            } `}
          >
            <p className="">Welcome to Shera Organic Shop</p>
            <div className="flex gap-6">
              <a
                href="mailto:sheraorganicshop@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                sheraorganicshop@gmail.com
              </a>
              <p className="">DL</p>
            </div>
          </div>
          {/* Main Nav  */}
          <div
            className={` navbar bg-base-100  shadow-md  md:top-10 top-0  rounded-lg ${
              isScrolled
                ? " mx-auto w-full px-0 lg:px-24 rounded-none"
                : "absolute left-1/2 -translate-x-1/2 max-w-screen-xl"
            }`}
          >
            <div className="navbar-start">
              <Link to={"/"} className="btn btn-ghost">
                <img
                  className=" w-14"
                  src="https://i.ibb.co/8xhhZQk/Shera-Organic-Shop-logo.png"
                  alt=""
                />
                <p>Shera Organic Shop</p>
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>

            <div className="navbar-end">
              {/* Search Cart Profile Start Here */}
              <div className="dropdown dropdown-end hidden md:block">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <BsSearch size={20} />
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className={`card card-compact dropdown-content  shadow`}
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

              {/* desktop cart start here  */}
              {true && (
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
                      <span className="badge badge-sm indicator-item">0</span>
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
                        <Link to="carts" className="btn btn-primary btn-block">
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* user profile icon and functionality start here  */}
              {true && (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          "https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png"
                        }
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {/* Login & Register Button */}
                    {user ? (
                    <>
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
                        <button onClick={()=>{
                          logOut().then(()=>{}).catch(err=>console.log(err))

                        }}>Logout</button>
                      </li>
                    </>
                    ) : (
                      <>
                        <li>
                          <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                          <Link to={"/signup"}>Register</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              {/* Search Cart End */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost px-1 ">
                  <BsGrid3X3GapFill size={35} color="green"></BsGrid3X3GapFill>
                </label>

                <div
                  tabIndex={0}
                  className={`mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow`}
                >
                  <div className="card-body">
                    <ul className="menu  px-1">{navOptions}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className=" z-10 border-t-[1px] fixed bottom-0 bg-gray-200 backdrop-filter backdrop-blur bg-opacity-20  lg:hidden w-full h-[45px] sm:h-[64px] grid grid-cols-4 text-xs">
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
          <Link
            to="carts"
            className="flex flex-col justify-center items-center"
          >
            <BsCartPlus size={20} />
            <p className=" text-gray-500">54985</p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBer;
