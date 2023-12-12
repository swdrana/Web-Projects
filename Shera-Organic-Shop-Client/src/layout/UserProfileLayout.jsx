import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaTruckArrowRight } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { BsCartCheck,BsCartX } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import useCurrentUser from "../../hooks/useCurrentUser";
import LoadingProgress from "../components/LoadingProgress/LoadingProgress";
import { useContext, useEffect, useState } from "react";
import instance from "../provider/axios";
import demoUserPhoto from './../assets/images/people/demo-user.jpg'
import { AuthContext } from "../provider/AuthProvider";
import { HiMenu } from "react-icons/hi";
function UserProfileLayout() {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const { isLoading, isError, userInfo, error } = useCurrentUser();
    const [orderCounts, setOrderCounts] = useState({
      delivered: 0,
      out_for_delivery: 0,
      processing: 0,
      newOrder: 0,
      cancelled:0 // Assuming 'picked_up' and 'pending' are treated as new orders
    });
    
    useEffect(() => {
      const fetchUserOrders = async () => {
        try {
          if (userInfo && userInfo.email) {
            const response = await instance.get(`orders/user/${userInfo.email}`);
    
            // Initialize an object to store the counts
            const counts = {
              delivered: 0,
              out_for_delivery: 0,
              processing: 0,
              pending: 0,
              cancelled:0
            };
    
            // Update count variables based on order status
            response.data.forEach((item) => {
              const status = item.status;
            //   console.log(status);
              if (status in counts) {
                counts[status] += 1;
              }
            });
    
            // Update state variable with the counts object
            setOrderCounts(counts);
          }
        } catch (error) {
          console.error("Error fetching user orders:", error.message);
        }
      };
    
      fetchUserOrders();
    }, [userInfo]);
    
    // Access counts for each status as needed
    // console.log(orderCounts.delivered);
    // console.log(orderCounts.out_for_delivery);
    // console.log(orderCounts.processing);
    // console.log(orderCounts.newOrder);
    

  if (isLoading) return <LoadingProgress />;
  if (error || isError) return error || isError;
//   console.log(userInfo);
  return (
    <div className="bg-gray-white">
      <Header isFixed={true} />{" "}
      <div className=" mx-auto container">
        <div className="flex align-items gap-6 p-4 p-sm-6 bg-white rounded-lg my-4 mb-4 flex-wrap lg:flex-nowrap">
          <div className="rounded-md w-44">
            <img
              src={userInfo.photoURL?userInfo.photoURL:demoUserPhoto}
              alt={userInfo.photoURL}
              className="rounded-md border max-h-44 mx-auto"
            />
          </div>
          <div className=" flex  gap-4 justify-center flex-col w-full">
            <div>
              <h4 className=" text-2xl font-bold">{userInfo.displayName}</h4>
              <div className="flex  items-center gap-2 gap-md-4 text-sm flex-wrap">
                <span className=" flex justify-center items-center gap-2">
                  <FaRegEnvelope /> {userInfo.email}
                </span>
                <span className=" flex justify-center items-center gap-2">
                  <FaPhoneAlt />
                  <a href={`tel:${userInfo.phoneNumber}`} target="_blank" rel="noreferrer">{userInfo.phoneNumber}</a>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap mt-6 gap-5">
              <div className="flex items-center gap-3 w-40">
                <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-purple-600 bg-purple-200 h-14 w-14">
                  <BsCartCheck size={40} />
                </span>
                <div>
                  <h4 className=" font-bold text-2xl">{orderCounts.pending}</h4>
                  <span className=" text-gray-light">New Orders</span>
                </div>
              </div>
              <div className="flex items-center gap-3 w-52">
                <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-orange-600 bg-orange-200 h-14 w-14">
                  <RiLoopLeftFill size={40} />
                </span>
                <div>
                  <h4 className=" font-bold text-2xl">{orderCounts.processing}</h4>
                  <span className=" text-gray-light">Order Processing</span>
                </div>
              </div>
              <div className="flex items-center gap-3 w-40">
                <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-blue-600 bg-blue-200 h-14 w-14">
                  <FaTruckArrowRight size={40} />
                </span>
                <div>
                  <h4 className=" font-bold text-2xl">{orderCounts.out_for_delivery}</h4>
                  <span className=" text-gray-light">On the way</span>
                </div>
              </div>
              <div className="flex items-center gap-3 w-52">
                <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-green-600 bg-green-200 h-14 w-14">
                  <AiOutlineHome size={40} />
                </span>
                <div>
                  <h4 className=" font-bold text-2xl">{orderCounts.delivered}</h4>
                  <span className=" text-gray-light">Total Delivered</span>
                </div>
              </div>
              <div className="flex items-center gap-3 w-52">
                <span className=" inline-flex items-center justify-center flex-shrink-0 rounded-md  text-red-600 bg-red-200 h-14 w-14">
                  <BsCartX size={40} />
                </span>
                <div>
                  <h4 className=" font-bold text-2xl">{orderCounts.cancelled}</h4>
                  <span className=" text-gray-light">Total Cancelled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************** Layout Header End Here ***************************** */}
      <div className="drawer lg:drawer-open container mx-auto z-50">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ms-0 md:ms-4 p-4 bg-white rounded-lg">
          {/* Page content here */}
          <div className=" mt-4 flex justify-end me-4">
              <label
                htmlFor="my-drawer-2"
                className=" btn btn-primary  text-gray-white btn-sm  border-0 drawer-button lg:hidden"
              >
               <HiMenu size={30} /> Open Drawer 
              </label>
            </div>
          <Outlet></Outlet>
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden w-1/2"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-52 min-h-full bg-base-100 text-base-content rounded-lg md:mt-0">
            {/* Sidebar content here */}
            <li className=" border-b">
              <Link to="/">Home</Link>
            </li>
            <li className=" border-b">
              <Link to="/profile">Dashboard</Link>
            </li>
            <li className=" border-b">
              <Link to="my-order">Order History</Link>
            </li>
            <li className=" border-b">
              <Link to="address">Address Book</Link>
            </li>
            <li className=" border-b">
              <Link to="edit-profile">Edit Profile</Link>
            </li>
            <li onClick={()=>{
                navigate('/login');
                logOut()
            }}>
              <p>Log Out</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UserProfileLayout;
