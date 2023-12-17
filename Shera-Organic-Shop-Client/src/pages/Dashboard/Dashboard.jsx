import { Link } from "react-router-dom"

function Dashboard() {
    return (
        <div>
            <h1 className=" text-3xl text-center">Welcome to Admin Dashboard</h1>
            <ul className="menu p-4 bg-base-100 flex items-center justify-center rounded-lg text-base-content mt-14 md:mt-0">
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
    )
}

export default Dashboard
