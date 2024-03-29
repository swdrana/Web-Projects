import { useContext } from "react";
import { BsCartPlus, BsGrid3X3GapFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import logoBig from './../../../assets/images/logo/logo-big.png';
import userIcon from './../../../assets/images/people/user-icon.png';
import BottomNav from "./BottomNav";
import ThemeChange from "./ThemeChange";
const NavBer = ({ isScrolled }) => {
  const navigate = useNavigate();
  const { user, userInfo, logOut } = useContext(AuthContext);
  const navOptions = (
    <>
      
      {/* <li tabIndex={0}>
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
      </li> */}
      <li>
        <Link to={"/products"}>Products</Link>
      </li>
      {/* <li>
        <Link to={"/campaigns"}>Campaigns</Link>
      </li> */}
      <li>
          <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/about-us"}>About Us</Link>
      </li>
      
      {userInfo?.role=='admin'?( 
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      ): (
        <li>
            <Link to={"/contact-us"}>Contact Us</Link>
        </li>
        )
      }
      <li tabIndex={0}>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
          <li>
        <Link to={"/coupons"}>Coupons</Link>
      </li>{userInfo?.role=='admin'? <li>
        <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/contact-us"}>Contact Us</Link>
      </li>: <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>}
            <li>
              <Link to={"/terms-conditions"}>Terms & Conditions</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <>
      <div className=" h-14 md:h-28 print:hidden">
        <div
          className={` ${
            isScrolled ? "" : "bg-[#6eb356]"
          }   md:h-[75px]  h-0 relative `}
        >
          {/* Top Info Nav  */}
          <div className={` font-light container mx-auto p-2 text-white flex justify-between ${isScrolled ? "hidden" : ""} `}>
            <p className= " hidden md:block">Welcome to Shera Organic Shop</p>
            <div className="flex gap-6">
              <a href="mailto:sheraorganicshop@gmail.com"target={"_blank"}rel="noreferrer">
                sheraorganicshop@gmail.com
              </a>
              {/* <p className="">DL</p> */}
              <ThemeChange/>
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
              <Link to={"/"} className=" btn btn-ghost m-0 md:-mt-2">
                <img
                  className=" w-60"
                  src={logoBig}
                  alt=""
                />
                {/* <p className=" text-xs md:text-lg font-semibold">Shera Organic Shop</p> */}
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>

            <div className="navbar-end">
              {/* Search Cart Profile Start Here */}
              {/* <div className="dropdown dropdown-end hidden md:block">
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
              </div> */}

              {/* desktop cart start here  */}
              {user && (
                <Link to='/carts' className="dropdown dropdown-end md:block hidden ">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <BsCartPlus size={20} />
                      <span className="badge badge-sm indicator-item">{userInfo?.cart?.length || 0}</span>
                    </div>
                  </label>

                  <div
                    tabIndex={0}
                    className={`mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow`}
                  >
                    {/* <div className="card-body">
                      <span className="font-bold text-lg">{userInfo?.cart?.length} Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <Link to="/carts" className="btn btn-primary btn-block">
                          View cart
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </Link>
              )}

              {/* user profile icon and functionality start here  */}
              {true && (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img className=" border rounded-full"
                        src={userInfo?userInfo.photoURL?userInfo.photoURL:
                          userIcon:userIcon}
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
                          <Link to='/profile' className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link to='/profile/my-order'>
                            My Orders
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              logOut()
                                .then(() => {
                                  navigate('/login');
                                })
                                .catch((err) => console.log(err));
                            }}
                          >
                            Logout
                          </button>
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
      <BottomNav userInfo={userInfo}/>
    </>
  );
};

export default NavBer;
