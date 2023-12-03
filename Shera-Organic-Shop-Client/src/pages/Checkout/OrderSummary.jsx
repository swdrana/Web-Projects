// OrderSummary.js
import React from "react";

function OrderSummary({ checkoutData, totalPrice, deliveryCharge, discount, totalPriceWithDeliveryCharge, handlePlaceOrder, applyCoupon, couponError,setCouponCode,couponCode }) {
  return (
    <div className="bg-white pb-8 mt-6 rounded-lg">
      <h1 className="text-2xl font-bold p-5 py-7">Order Summary</h1>
      {checkoutData.map((item) => (
        <div key={item._id} className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-4">
            <img
              src={item.productDetails.productThumbnail}
              alt={item.productDetails.productName}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="text-lg font-bold">{item.productDetails.productName}</p>
              <p>Quantity: {item.quantity}</p>
              <p>
                Price: ৳{item.productDetails.variants[item.selectedVariant].price}
              </p>
            </div>
          </div>
          <p>Total: ৳{item.totalPrice.toFixed(2)}</p>
        </div>
      ))}
      <div className="p-4 flex justify-between items-center">
        <p>Subtotal:</p>
        <p>৳{totalPrice.toFixed(2)}</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <p>Delivery Charge:</p>
        <p>৳{deliveryCharge.toFixed(2)}</p>
      </div>
      {/* Coupon Section */}
      <div className="bg-white pb-8 mt-6 rounded-lg">
        <h1 className="text-2xl font-bold p-5 py-7">Coupon Code</h1>
        <div className="mx-5 flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="input input-bordered input-primary w-full"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="btn btn-primary" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>
      {couponError && <p className="text-red-500 mx-5">{couponError}</p>}
        {discount > 0 && (
          <div className="p-4 flex justify-between items-center">
            <p>Discount:</p>
            <p>৳{discount.toFixed(2)}</p>
          </div>
        )}
      </div>
      <div className="p-4 flex justify-between items-center font-bold">
        <p>Total:</p>
        <p>৳{totalPriceWithDeliveryCharge.toFixed(2)}</p>
      </div>
      <button
        className="btn btn-primary w-full mt-5"
        onClick={() => handlePlaceOrder()}
      >
        Order Now
      </button>
    </div>
  );
}

export default OrderSummary;
