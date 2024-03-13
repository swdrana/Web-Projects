import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import SectionTitle from "../../components/Pages/SectionTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { CheckoutContext } from "../../provider/CheckoutProvider";
import instance from "../../provider/axios";
import { Purchase } from "../../utilities/facebookPixel";
import OrderSummary from "./OrderSummary";
import PaymentDetails from "./PaymentDetails";
import PersonalInformation from "./PersonalInformation";
import ShippingAddress from "./ShippingAddress";
import EditProfile from "../Profile/EditProfile";

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

  const { isLoading, userInfo, refetch } = useContext(AuthContext);

  useEffect(() => {
    setSelectedDistrict(userInfo?.shippingAddress?.district);
    setSelectedThana(userInfo?.shippingAddress?.thana);
  }, [userInfo?.shippingAddress]);

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

        const totalPriceSum = results.reduce(
          (sum, result) => sum + result.totalPrice,
          0
        );
        const deliveryCharge =
          results.length > 0 ? results[0].deliveryCharge : 0;
        const totalPriceWithDeliveryChargeSum = totalPriceSum + deliveryCharge;

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

    calculateTotalPrice();
  }, [checkoutData, discount]);

  const applyCoupon = async () => {
    try {
      const response = await instance.get(`/coupon/code/${couponCode}`);
      const validatedCoupon = response.data;

      if (response.status === 200 && validatedCoupon && validatedCoupon._id) {
        setDiscount(validatedCoupon.discountAmount);
        setCouponError(null);
        toast.success("Coupon applied successfully!");
      } else {
        toast.warning("Invalid coupon code");
        setDiscount(0);
        setCouponError("Invalid coupon code");
      }
    } catch (error) {
      console.error("Error applying coupon:", error.message);
      toast.error("Error applying coupon");
      setCouponError("Error applying coupon");
      setDiscount(0);
    }
  };

  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");

  const handlePlaceOrder = async () => {
    const paymentMethod = selectedPaymentMethod;
    const paymentDetails = showPaymentDetails ? getPaymentDetails() : "";

    const orderItems = checkoutData.map((item) => ({
      productId: item.productDetails._id,
      variant: item.selectedVariant,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    }));

    const effectiveDistrict =
      selectedDistrict != ""
        ? selectedDistrict
        : userInfo?.shippingAddress?.district?.name
        ? userInfo?.shippingAddress?.district
        : userInfo?.shippingAddress?.district;
    const effectiveThana =
      selectedThana != ""
        ? selectedThana
        : userInfo?.shippingAddress?.thana?.name
        ? userInfo?.shippingAddress?.thana
        : userInfo?.shippingAddress?.thana;

    const effectiveStreetAddress =
      streetAddress || userInfo?.shippingAddress?.streetAddress;

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
        const updatedUserData = {
          ...userInfo,
          shippingAddress: {
            district: effectiveDistrict,
            thana: effectiveThana,
            streetAddress: effectiveStreetAddress,
            apartment,
          },
        };

        const updateUserResponse = await instance.put(
          `/users/user/${userInfo._id}`,
          updatedUserData
        );
        refetch();
        if (updateUserResponse.data) {
          const response = await instance.post("/orders", orderData);

          if (response.status === 200) {
            console.log("Order placed successfully:", response.data);
            const order = response.data;
            Purchase(
              order.personalInformation._id,
              order._id,
              order.orderSummary.subtotal,
              order.orderSummary.items.length
            );
            navigate("/profile/my-order");
          } else {
            console.error("Error placing order:", response.data);
          }
        } else {
          console.error("Error updating user data:", updateUserResponse.data);
        }
      } catch (error) {
        console.error("Error placing order:", error.message);
      }
    }
  };

  const getPaymentDetails = () => {
    if (selectedPaymentMethod === "paynow") {
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
    <form onSubmit={(e) => e.preventDefault()} className=" bg-gray-white">
      <SectionTitle title="Checkout" />
      <div className="container mx-auto py-16 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" w-full lg:w-8/12">
            <PersonalInformation userInfo={userInfo} />
            <ShippingAddress
              setStreetAddress={setStreetAddress}
              setApartment={setApartment}
              districts={districts}
              thanas={thanas}
              selectedDistrict={selectedDistrict}
              selectedThana={selectedThana}
              setSelectedDistrict={setSelectedDistrict}
              setSelectedThana={setSelectedThana}
              userInfo={userInfo}
            />

            <PaymentDetails
              showPaymentDetails={showPaymentDetails}
              selectedPaymentMethod={selectedPaymentMethod}
              setSelectedPaymentMethod={setSelectedPaymentMethod}
              setSelectedPaymentMethod2={setSelectedPaymentMethod2}
              setAccount={setAccount}
              setShowPaymentDetails={setShowPaymentDetails}
            />
          </div>

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
