import React, { useState, useEffect } from "react";
import instance from "../../provider/axios";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import OrderItem from "./OrderItem"; // You need to create this component
import useCurrentUser from "../../../hooks/useCurrentUser";

function MyOrders() {
  const { userInfo, isLoading, isError, refetch } = useCurrentUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        if (userInfo && userInfo.email) {
          const response = await instance.get(`orders/user/${userInfo.email}`);
          console.log(response.data)
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Error fetching user orders:", error.message);
      }
    };

    fetchUserOrders();
  }, [userInfo]);

  if (isLoading) {
    return <LoadingProgress />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold p-5 py-7">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
