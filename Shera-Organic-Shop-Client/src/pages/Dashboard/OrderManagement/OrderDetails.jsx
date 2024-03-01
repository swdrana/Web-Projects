import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../../provider/axios";
import LoadingProgress from "../../../components/LoadingProgress/LoadingProgress";
// import DDMonYYYY from "../../../components/Date/DDMonYYYY";
import DDMonYYYYWithTime from "../../../components/Date/DDMonYYYYWithTime";
import OrderRow from "./OrderRow";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { id } = useParams();
  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState("");
//   console.log(orderData);
  useEffect(() => {
    const fetchOrderById = async (orderId) => {
      try {
        const response = await instance.get(`/orders/${orderId}`);
        // Assuming your API returns the order data in the response.data property
        setOrderData(response.data);
        setDeliveryStatus(response.data.status);
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
  

  const handleDeliveryStatusChange = async (newStatus) => {
    try {
      await instance.put(`/orders/${id}`, { status: newStatus });
      // Optionally, you can update the local order data after a successful update
      // setOrderData((prevOrderData) => ({ ...prevOrderData, status: newStatus }));
      toast.info("Delivery Status Updated");
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };

  if (loading) return <LoadingProgress />;
  if (error) return <p>Error fetching order: {error.message}</p>;
  if (!orderData) return <p>No order data found</p>;
  console.log({ orderData });
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
                <div className="col-auto flex-grow-1">
                  <h5 className=" text-xl font-bold">
                    Order Invoice
                  </h5>
                  <span className="text-muted">
                    Order ID:{" "}
                    <span className=" text-secondary text-sm ">
                      #S-Shop:{orderData._id}
                    </span>
                  </span>
                  <br />
                  <span className="text-muted">
                    Order Date:{" "}
                    <span className=" text-gray-400">
                      <DDMonYYYYWithTime date={orderData.createdAt} />
                    </span>
                  </span>
                </div>

                {/* <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Payment Status</span>
                  </div>
                  <select className="select select-bordered select-sm">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Paid</option>
                    <option>Unpaid</option>
                    <option>COD</option>
                  </select>
                </label> */}

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Delivery Status</span>
                  </div>

                  <select
          className="select select-bordered select-sm"
          value={deliveryStatus}
          onChange={(e) => {
            const newStatus = e.target.value;
            setDeliveryStatus(newStatus);
            handleDeliveryStatusChange(newStatus);
          }}
          onBlur={handleDeliveryStatusChange}
        >
          <option disabled value="">
            Pick one
          </option>
          <option value="pending">Pending</option>
          {/* <option value="picked_up">Picked Up</option> */}
          <option value="processing">Processing</option>
          <option value="out_for_delivery">Out For Delivery</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
                </label>
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
                  <div className="text-sm">
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
                <div className="col-auto">
                  <h6 className=" font-bold">Payment Method</h6>
                  <span>
                    {orderData.payment.method == "paynow" ? (`Online: ${orderData.payment.details.paymentProvider}`): ""}
                    <br />
                    {orderData.payment.method == "paynow" && orderData.payment.details.accountNo ? 'A/C: '+orderData.payment.details.accountNo: ""}
                  </span>
                  <span>
                    {orderData.payment.method == "cod" ? "COD" : ""}
                  </span>
                </div>
                <div className="col-auto">
                  <h6 className="mb-1">Sub Total</h6>
                  <strong>৳{orderData.orderSummary.subtotal}</strong>
                </div>
                <div className="col-auto">
                  <h6 className="mb-1">Shipping Cost</h6>
                  <strong>৳{orderData.orderSummary.deliveryCharge}</strong>
                </div>
                <div className="col-auto">
                  <h6 className="mb-1">Discount</h6>
                  <strong>৳{orderData.orderSummary.discount}</strong>
                </div>
                <div className="col-auto">
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
};
export default OrderDetails;
