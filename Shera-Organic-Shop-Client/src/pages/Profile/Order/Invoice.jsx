import DDMonYYYYWithTime from "../../../components/Date/DDMonYYYYWithTime";
import LoadingProgress from "../../../components/LoadingProgress/LoadingProgress";
import OrderRow from "../../Dashboard/OrderManagement/OrderRow";
import instance from "../../../provider/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderStatusBadge from "../../../components/Order/OrderStatusBadge";

function Invoice() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   console.log(orderData);
  useEffect(() => {
    const fetchOrderById = async (orderId) => {
      try {
        const response = await instance.get(`/orders/${orderId}`);
        // Assuming your API returns the order data in the response.data property
        setOrderData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order:", error);
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchOrderById function with the order ID from the URL
    fetchOrderById(id);
  }, [id]); // Add id to the dependency array to re-run the effect when the ID changes

  if (loading) return <LoadingProgress />;
  if (error) return <p>Error fetching order: {error.message}</p>;
  if (!orderData) return <p>No order data found</p>;
  console.log(orderData);
  return (
    <section className=" p-4 bg-gray-white">
      <div className="container">
        {/* <div className="flex items-center justify-between border rounded-md h-20  bg-base-100">
              <div className="tt-page-title">
                <h2 className=" ms-5 text-xl">Order Details</h2>
              </div>
              <div className=" me-5">
                <a
                  href="https://grostore.themetags.com/admin/orders/invoice-download/109"
                  className="btn btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Invoice
                </a>
              </div>
            </div> */}

        <div className=" bg-white border rounded-md my-5">
          {/* Left Sidebar */}
          <div className="">
            <div className="card mb-4" id="section-1">
              {/* Order Status */}
              <div className="flex justify-between items-center g-3 bg-gray-white p-5">
                <div className="flex-grow-1">
                  <h5 className=" text-lg md:text-2xl font-bold">
                    Order Invoice <OrderStatusBadge status={orderData.status} />
                  </h5>
                  <span className=" font-bold text-gray-deep">
                    Order ID: &emsp;&emsp;
                    <span className=" font-normal text-sm ">
                      #S-Shop:{orderData._id}
                    </span>
                  </span>
                  <br />
                  <span className=" font-bold">
                    Order Date:&emsp;
                    <span className=" font-light">
                      <DDMonYYYYWithTime date={orderData.createdAt} />
                    </span>
                  </span>
                </div>
                <div className=" flex flex-col justify-center items-end ">
                    <div className=" flex items-center justify-center"><img className=" w-10 md:w-14" src="https://i.ibb.co/8xhhZQk/Shera-Organic-Shop-logo.png" alt="" />
                    <h2 className=" text-md md:text-2xl font-bold text-primary">Shera Organic Shop</h2></div>
                    <address className=" text-end">Kalaroa Bajar, Kalaroa 9410, Satkhira
                    <br />
                    <a href="tel:+8801793143054" className=" font-normal" target="_blank" rel="noreferrer">01793-143054</a>
                    </address>
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex justify-between items-center p-5">
                <div className="">
                  <h6 className="mb-2 font-bold">Customer Info</h6>
                  <div className=" text-sm">
                    <p className="mb-0">
                      Name: {orderData.personalInformation.displayName}
                    </p>
                    <p className="mb-0">
                      Email: {orderData.personalInformation.email}
                    </p>
                    <p className="mb-0">
                      Phone: {orderData.personalInformation.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="">
                  <h6 className="mb-2 font-bold">Shipping Address</h6>
                  <div className="text-sm text-end">
                    <p>{orderData.shippingAddress.apartment}</p>
                    <p>{orderData.shippingAddress.streetAddress}</p>
                    <p>
                      {orderData.shippingAddress.thana},{" "}
                      {orderData.shippingAddress.district}, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="overflow-x-auto px-5">
                <table className="table  table-xs">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>S/L</th>
                      <th>Products</th>
                      <th>Unit Price</th>
                      <th>QTY</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderData.orderSummary.items.map((item, index) => {
                      return (
                        <OrderRow
                          key={index}
                          item={item}
                          index={index}
                        ></OrderRow>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Grand Total */}
              <div className="flex items-center justify-between p-4 bg-gray-white rounded-md border m-6 ">
                <div>
                  <h6 className=" font-bold">Payment Method</h6>
                  <span>
                    {orderData.payment.method == "paynow" ? "Online" : ""}
                  </span>
                  <span>
                    {orderData.payment.method == "cod" ? "Online" : ""}
                  </span>
                </div>
                <div>
                  <h6 className="mb-1">Sub Total</h6>
                  <strong>৳{orderData.orderSummary.subtotal}</strong>
                </div>
                <div>
                  <h6 className="mb-1">Shipping Cost</h6>
                  <strong>৳{orderData.orderSummary.deliveryCharge}</strong>
                </div>
                <div>
                  <h6 className="mb-1">Discount</h6>
                  <strong>৳{orderData.orderSummary.discount}</strong>
                </div>
                <div>
                  <h6 className="mb-1">Grand Total</h6>
                  <strong>৳{orderData.orderSummary.total}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invoice;
