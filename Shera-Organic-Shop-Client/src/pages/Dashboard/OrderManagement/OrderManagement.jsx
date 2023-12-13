// // OrderManagement.jsx
// import React from 'react';
// import { useOrder } from './OrderContext';

// const OrderManagement = () => {
//   const { state } = useOrder();

//   return (
//     <div>
//       <h2>Order Management</h2>
//       <ul>
//         {state.orders.map((order, index) => (
//           <li key={index}>
//             {/* Display order details as needed */}
//             Order ID: {order.id}, Total: {order.total}, Products: {order.products.join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderManagement;

import { useEffect, useState } from "react";
import instance from "../../../provider/axios";
import DDMonYYYY from "../../../components/Date/DDMonYYYY";
import TwelveHourTime from "../../../components/Date/TwelveHourTime";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const OrderManagement = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`orders/`);
        console.log(response.data);
        setAllOrders(response.data);
      } catch (error) {
        console.error("Error fetching user orders:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="p-4">
      <div className="container">
        <h2 className="text-base md:text-lg lg:text-xl font-bold mb-0">
          Orders
        </h2>

        <div className="">
          <div className="card mb-4" id="section-1">
            <form
              className="app-search"
              action="https://grostore.themetags.com/admin/orders"
              method="GET"
            >
              <div className="card-header border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="flex-grow-1 md:hidden"></div>
                  <div className="flex-grow-1">
                    <div className="tt-search-box">
                      <div className="relative">
                        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </span>
                        <input
                          className="form-input rounded-l-start w-full"
                          type="text"
                          id="search"
                          name="search"
                          placeholder="Search by name/phone"
                        />
                      </div>
                    </div>
                  </div>
                  {/* ... (rest of the form elements) */}
                </div>
              </div>
            </form>

            <table className="table">
              <thead></thead>
              <tbody></tbody>
            </table>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th className=" w-5">Order ID</th>
                    <th>Customer</th>
                    <th>Placed On</th>
                    <th>Items</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="text-xs">SOS{order._id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          {/* <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="/tailwind-css-component-profile-2@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div> */}
                          <div>
                            <div className="font-bold">
                              {order.personalInformation.displayName}
                            </div>
                            <div className="text-sm opacity-50">
                              {order.personalInformation.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <DDMonYYYY date={order.createdAt}></DDMonYYYY>
                        <br />
                        <TwelveHourTime date={order.createdAt}></TwelveHourTime>
                      </td>
                      <td>
                        {order.orderSummary.items.reduce(
                          (total) => total + order.quantity,
                          0
                        )}
                      </td>
                      <td>
                        {order.payment.method == "paynow" ? (
                          <span className=" badge badge-primary badge-outline text-xs text-primary">
                            Paid
                          </span>
                        ) : (
                          <span className="badge  badge-error badge-outline text-xs">
                            COD
                          </span>
                        )}
                      </td>
                      <td>
                        <p className="">
                          {order.status == "out_for_delivery" ? (
                        <div className="badge bg-blue-200 text-blue-600">
                          Shipped
                        </div>
                      ) : order.status == "pending" ? (
                        <div className="badge bg-purple-200 text-purple-600">
                          Pending
                        </div>
                      ) : order.status == "processing" ? (
                        <div className="badge bg-orange-200 text-orange-600">
                          Processing
                        </div>
                      ) : order.status == "delivered" ? (
                        <div className="badge bg-green-200 text-green-600">
                          Delivered
                        </div>
                      ) : order.status == "cancelled" ? (
                        <div className="badge bg-red-200 text-red-600">
                          Cancelled
                        </div>
                      ) : (
                        ""
                      )}
                        </p>
                      </td>
                      <td>
                          <Link to={`details/${order._id}`}><FaRegEye /></Link>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-4 pb-4">
              <span>{`Showing 1-${allOrders.length} of ${allOrders.length} results`}</span>
              <nav>
                <ul className="pagination">{/* ... (pagination items) */}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderManagement;
