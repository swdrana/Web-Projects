import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { HiMenu } from "react-icons/hi";
function DashboardLayout() {
  return (
    <>
      <Header isFixed={true} />
      <div className=" container mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col border rounded-md ms-5">
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
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-100 border rounded-lg text-base-content mt-14 md:mt-0">
              {/* Sidebar content here */}
              <li>
                <Link to="addCategory">Add Category</Link>
              </li>
              <li>
                <Link to="addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="products">All Products</Link>
              </li>
              <li>
                <Link to="all-orders">Manage Orders</Link>
              </li>
              <li>
                <Link to="manage-admin">Manage Admin</Link>
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
    </>
  );
}

export default DashboardLayout;
