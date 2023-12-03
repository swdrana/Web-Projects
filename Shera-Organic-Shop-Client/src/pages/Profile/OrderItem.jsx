import React from "react";

function OrderItem({ order }) {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Order #{order._id}</h2>
      <p className="text-gray-600 mb-2">Order Date: {order.orderDate}</p>

      <div>
        <h3 className="text-lg font-bold mb-2">Items:</h3>
        <ul>
          {order.personalInformation.cart.length > 0 ? (
            order.personalInformation.cart.map((item) => (
              <li key={item._id}>
                {/* Assuming you have a productDetails field in each item */}
                <p>{item.productDetails?.productName}</p>
                <p>Variant: {item.selectedVariant}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {/* You need to calculate total price based on item data */}</p>
              </li>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Order Summary:</h3>
        <p>Subtotal: {order.orderSummary.subtotal}</p>
        <p>Delivery Charge: {order.orderSummary.deliveryCharge}</p>
        <p>Discount: {order.orderSummary.discount}</p>
        <p>Total: {order.orderSummary.total}</p>
      </div>
    </div>
  );
}

export default OrderItem;
