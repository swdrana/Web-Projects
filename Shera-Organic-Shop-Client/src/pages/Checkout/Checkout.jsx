import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/Pages/SectionTitle";
import {useNavigate } from "react-router-dom";
import instance from "../../provider/axios";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import { CheckoutContext } from "../../provider/CheckoutProvider";
import { toast } from "react-toastify";
import PersonalInformation from "./PersonalInformation";
import ShippingAddress from "./ShippingAddress";
import PaymentDetails from "./PaymentDetails";
import OrderSummary from "./OrderSummary";
import { AuthContext } from "../../provider/AuthProvider";

function Checkout() {
  const navigate = useNavigate();
  const {
    checkoutData,
    couponCode,
    setCouponCode,
    discount,
    setDiscount,
    couponError,
    setCouponError,
  } = useContext(CheckoutContext);

  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedThana, setSelectedThana] = useState(null);

  console.log("CK ",selectedDistrict)
  const { isLoading, userInfo, refetch } = useContext(AuthContext);
// console.log(userInfo?.shippingAddress.thana)
useEffect(()=>{
  setSelectedDistrict(userInfo?.shippingAddress?.district);
  setSelectedThana(userInfo?.shippingAddress?.thana);
},[userInfo?.shippingAddress])
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod"); // Set a default value
  const [selectedPaymentMethod2, setSelectedPaymentMethod2] = useState(""); // Set a default value
  const [account, setAccount] = useState(""); // Set a default value

  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [totalPriceWithDeliveryCharge, setTotalPriceWithDeliveryCharge] =
    useState(0);

  useEffect(() => {
    fetch("bd-districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data.districts));
    fetch("bd-upazilas.json")
      .then((res) => res.json())
      .then((data) => setThanas(data.upazilas));
  }, []);

  useEffect(() => {
    // Function to calculate total price
    const calculateTotalPrice = async () => {
      try {
        const totalPricePromises = checkoutData.map(async (item) => {
          const productId = item.productDetails._id;
          const selectedVariant = item.selectedVariant;
          const quantity = item.quantity;

          const response = await instance.post(
            "/products/calculateTotalPrice",
            {
              productId,
              selectedVariant,
              quantity,
            }
          );

          return response.data;
        });

        const results = await Promise.all(totalPricePromises);

        // Summing up total prices
        const totalPriceSum = results.reduce(
          (sum, result) => sum + result.totalPrice,
          0
        );
        // Using the delivery charge from the first item (assuming it's the same for all items)
        const deliveryCharge =
          results.length > 0 ? results[0].deliveryCharge : 0;
        const totalPriceWithDeliveryChargeSum = totalPriceSum + deliveryCharge;

        // Apply discount if available
        const discountedTotal = totalPriceWithDeliveryChargeSum - discount;
        setTotalPrice(totalPriceSum);
        setDeliveryCharge(deliveryCharge);
        setTotalPriceWithDeliveryCharge(
          discountedTotal < 0 ? 0 : discountedTotal
        );
      } catch (error) {
        console.error("Error calculating total price:", error.message);
      }
    };

    // Call the function when checkoutData or discount changes
    calculateTotalPrice();
  }, [checkoutData, discount]);

  const applyCoupon = async () => {
    try {
      // Make an API call to validate the coupon code and get the discount amount
      const response = await instance.get(`/coupon/code/${couponCode}`);
      const validatedCoupon = response.data;

      if (response.status === 200 && validatedCoupon && validatedCoupon._id) {
        // Set the discount and clear any previous error
        setDiscount(validatedCoupon.discountAmount);
        setCouponError(null);
        toast.success("Coupon applied successfully!");
      } else {
        // Show a toast for coupon not found or invalid, and set discount to 0
        toast.warning("Invalid coupon code");
        setDiscount(0);
        setCouponError("Invalid coupon code");
      }
    } catch (error) {
      console.error("Error applying coupon:", error.message);
      toast.error("Error applying coupon");
      setCouponError("Error applying coupon");
      // Set discount to 0 in case of an error
      setDiscount(0);
    }
  };

  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");

  // Order
  // Function to handle placing the order
// ... (existing code)

// Function to handle placing the order
const handlePlaceOrder = async () => {
  // Collect payment information
  const paymentMethod = selectedPaymentMethod;
  const paymentDetails = showPaymentDetails ? getPaymentDetails() : "";

  // Collect order summary information
  const orderItems = checkoutData.map((item) => ({
    productId: item.productDetails._id,
    variant: item.selectedVariant,
    quantity: item.quantity,
    totalPrice: item.totalPrice,
  }));

  // Check if selectedDistrict and selectedThana are empty, and use the values from userInfo if available
  const effectiveDistrict =
    selectedDistrict !='' ? selectedDistrict :
    (userInfo?.shippingAddress?.district?.name
      ? userInfo?.shippingAddress?.district
      : userInfo?.shippingAddress?.district);
  const effectiveThana =
    selectedThana  !='' ? selectedThana :
    (userInfo?.shippingAddress?.thana?.name
      ? userInfo?.shippingAddress?.thana
      : userInfo?.shippingAddress?.thana);

  // Check if streetAddress is empty, and use the value from userInfo if available
  const effectiveStreetAddress =
    streetAddress || userInfo?.shippingAddress?.streetAddress;

  // Assemble all collected information
  const orderData = {
    personalInformation: { ...userInfo },
    shippingAddress: {
      district: effectiveDistrict?.name,
      thana: effectiveThana?.name,
      streetAddress: effectiveStreetAddress,
      apartment,
    },
    payment: {
      method: paymentMethod,
      details: paymentDetails,
    },
    orderSummary: {
      items: orderItems,
      subtotal: totalPrice,
      deliveryCharge: deliveryCharge,
      discount: discount,
      total: totalPriceWithDeliveryCharge,
    },
  };

  if (!effectiveDistrict) {
    console.log("Missing District");
    toast.warning("Missing District");
  } else if (!effectiveThana) {
    console.log("Missing Thana");
    toast.warning("Missing Thana");
  } else if (!effectiveStreetAddress) {
    console.log("Missing Street Address");
    toast.warning("Missing Street Address");
  } else if (
    paymentMethod === "paynow" &&
    paymentDetails.paymentProvider === "" &&
    paymentDetails.accountNo === ""
  ) {
    console.log("Missing Payment Info");
    toast.warning("Missing Payment Info");
  } else {
    try {
      // Update user data with the shipping address
      const updatedUserData = {
        ...userInfo,
        
        shippingAddress: {
          district: effectiveDistrict,
          thana: effectiveThana,
          streetAddress: effectiveStreetAddress,
          apartment,
        },
      };

      // Send the updated user data to the backend
      const updateUserResponse = await instance.put(
        `/users/user/${userInfo._id}`,
        updatedUserData
      );
      refetch();
      if (updateUserResponse.data) {
        // Continue with placing the order

        // Send the order data to the database (replace this with your actual API endpoint)
        const response = await instance.post("/orders", orderData);

        // Handle success or show an error message based on the response
        if (response.status === 200) {
          // Order placed successfully, you can navigate to a success page or show a confirmation message
          console.log("Order placed successfully:", response.data);
          navigate("/profile/my-order");
        } else {
          console.error("Error placing order:", response.data);
          // Handle the error and inform the user
        }
      } else {
        console.error(
          "Error updating user data:",
          updateUserResponse.data
        );
        // Handle the error and inform the user
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
      // Handle the error and inform the user
    }
  }
};






// ... (existing code)


  // Function to get payment details if applicable
  const getPaymentDetails = () => {
    if (selectedPaymentMethod === "paynow") {
      // Collect payment details for 'Pay Now' method
      const paymentProvider = selectedPaymentMethod2;
      const accountNo = account;

      return {
        paymentProvider,
        accountNo,
      };
    }

    return null;
  };
  if (isLoading) {
    return <LoadingProgress />;
  }
  return (
    <form onSubmit={(e)=>e.preventDefault()} className=" bg-gray-white">
      <SectionTitle title="Checkout" />
      <div className="container mx-auto py-16 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" w-full lg:w-8/12">
            {/* Personal Information */}
            <PersonalInformation userInfo={userInfo} />

            {/* Shipping Address */}
            <ShippingAddress
              setStreetAddress={setStreetAddress}
              setApartment={setApartment}
              districts={districts}
              thanas={thanas}
              selectedDistrict={selectedDistrict} // Pass selectedDistrict
              selectedThana={selectedThana} // Pass selectedThana
              setSelectedDistrict={setSelectedDistrict}
              setSelectedThana={setSelectedThana}
              userInfo={userInfo}
            />

            {/* Payment Method */}
            <PaymentDetails
              showPaymentDetails={showPaymentDetails}
              selectedPaymentMethod={selectedPaymentMethod}
              setSelectedPaymentMethod={setSelectedPaymentMethod}
              setSelectedPaymentMethod2={setSelectedPaymentMethod2}
              setAccount={setAccount}
              setShowPaymentDetails={setShowPaymentDetails}
            />
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-4/12">
            <OrderSummary
              applyCoupon={applyCoupon}
              couponError={couponError}
              setCouponCode={setCouponCode}
              couponCode={couponCode}
              checkoutData={checkoutData}
              totalPrice={totalPrice}
              deliveryCharge={deliveryCharge}
              discount={discount}
              totalPriceWithDeliveryCharge={totalPriceWithDeliveryCharge}
              handlePlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
