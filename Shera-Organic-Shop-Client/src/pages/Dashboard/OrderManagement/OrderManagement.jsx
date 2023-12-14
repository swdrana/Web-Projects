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
        // console.log(response.data);
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
            <table className="table">
              <thead></thead>
              <tbody></tbody>
            </table>
            <div className="">
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
                        {/* {order.orderSummary.items.reduce(
                          (total) => total + order.quantity,
                          0
                        )} */}
                        {order.orderSummary.items.length}
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
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-4 py-4 bg-success text-white">
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
