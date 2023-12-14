import { useContext, useEffect, useState } from "react";
import instance from "../../provider/axios";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import DDMonYYYY from "../../components/Date/DDMonYYYY";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
function DashboardUser() {
  const {userInfo, loading} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        if (userInfo && userInfo.email) {
          const response = await instance.get(`orders/user/${userInfo.email}`);
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Error fetching user orders:", error.message);
      }
    };

    fetchUserOrders();
  }, [userInfo]);
  // console.log(orders);
  if (loading) return <LoadingProgress />;
  // if (error || isError) return error || isError;
  return (
    <div>
      Recent 10 Orders
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className=" text-center">
              <th>#</th>
              <th>Order ID</th>
              <th>Placed On</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 10).map((item, index) => {
              return (
                <tr key={index} className=" text-center">
                  <th>{index + 1}</th>
                  <td>#S-Shop:{item._id}</td>
                  <td>
                    <DDMonYYYY date={item.createdAt} />
                  </td>
                  <td className=" font-bold">{item.orderSummary.items.length}</td>
                  <td className=" text-secondary font-bold">৳{item.orderSummary.total}</td>
                  <td>
                    {item.status == "out_for_delivery" ? (
                      <div className="badge bg-blue-200 text-blue-600">
                        Shipped
                      </div>
                    ) : item.status == "pending" ? (
                      <div className="badge bg-purple-200 text-purple-600">
                        Pending
                      </div>
                    ) :item.status == "processing" ? (
                        <div className="badge bg-orange-200 text-orange-600">
                          Processing
                        </div>
                      ):item.status == "delivered" ? (
                        <div className="badge bg-green-200 text-green-600">
                          Delivered
                        </div>
                      ):item.status == "cancelled" ? (
                        <div className="badge bg-red-200 text-red-600">
                          Cancelled
                        </div>
                      ): (
                      ""
                    )}
                  </td>
                  <td className="flex justify-center">
                    <Link to={`invoice/${item._id}`} className=" p-1 hover:text-primary"><FaEye size={15} /></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardUser;
