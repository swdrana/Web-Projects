import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function DashboardLayout() {
  return (
    <div className="">
        <Header/>
      <div className="drawer lg:drawer-open z-[100]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
                <Link to='addCategory'>Add Category</Link>
            </li>
            <li>
                <Link to='addProduct'>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row ">
        <div className=" w-2/12">Left Side</div>
        <div className=" w-10/12">
          Right Side
          <Outlet></Outlet>
        </div>
      </div> */}
    </div>
  );
}

export default DashboardLayout;
