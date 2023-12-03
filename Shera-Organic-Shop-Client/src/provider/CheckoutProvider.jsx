import { createContext, useState } from "react";

export const CheckoutContext = createContext();

function CheckoutProvider({ children }) {
  const [checkoutData, setCheckoutData] = useState([]);
  const [couponCode, setCouponCode] = useState(""); // Add state for coupon code
  const [discount, setDiscount] = useState(0); // Add state for discount
  const [couponError, setCouponError] = useState(null); // Add state for coupon error

  return (
    <CheckoutContext.Provider
      value={{
        checkoutData,
        setCheckoutData,
        couponCode,
        setCouponCode,
        discount,
        setDiscount,
        couponError,
        setCouponError,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
