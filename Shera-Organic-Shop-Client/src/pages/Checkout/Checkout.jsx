import { useEffect, useState } from "react";
import SectionTitle from "../../components/Pages/SectionTitle";
import { useLocation } from "react-router-dom";
import instance from "../../provider/axios";
import useCurrentUser from "../../../hooks/useCurrentUser";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";

function Checkout() {
  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedThana, setSelectedThana] = useState(null);


  const { isLoading, isError, userInfo, error, refetch } = useCurrentUser();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productId = params.get("productId");
  const selectedVariant = params.get("selectedVariant");
  const quantity = params.get("quantity");
  console.log(productId, selectedVariant, quantity);

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod"); // Set a default value

  const [totalPrice, setTotalPrice] = useState(0);
  const [delivaryCharge, setDelivaryCharge] = useState(0);
  const [totalPriceWithDelivaryCharge, setTotalPriceWithDelivaryCharge] =
    useState(0);
  useEffect(() => {
    // Function to calculate total price
    const calculateTotalPrice = async () => {
      try {
        const response = await instance.post("products/calculateTotalPrice", {
          productId,
          selectedVariant,
          quantity,
        });

        const { totalPrice, delivaryCharge, totalPriceWithDelivaryCharge } =
          response.data;
        setTotalPrice(totalPrice);
        setDelivaryCharge(delivaryCharge);
        setTotalPriceWithDelivaryCharge(totalPriceWithDelivaryCharge);
      } catch (error) {
        console.error("Error calculating total price:", error.message);
      }
    };

    // Call the function when productId, selectedVariant, or quantity changes
    calculateTotalPrice();
  }, [productId, selectedVariant, quantity]);

  useEffect(() => {
    fetch("bd-districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data.districts));
    fetch("bd-upazilas.json")
      .then((res) => res.json())
      .then((data) => setThanas(data.upazilas));
  }, []);
  // console.log(districts)
  if (isLoading) {
    return <LoadingProgress/>
  }
  return (
    <div className=" bg-gray-white">
      <SectionTitle title="Checkout" />
      <div className="container mx-auto py-16 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" w-full lg:w-8/12">
            <div className=" bg-white pb-8 rounded-lg">
              <h1 className=" text-2xl font-bold p-5">Personal Information</h1>
              <div className=" flex flex-col gap-5 mx-5">
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered input-primary w-full"
                    defaultValue={userInfo?.displayName}
                  />
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="input input-bordered input-primary w-full"
                    required
                    defaultValue={userInfo?.phoneNumber}
                  />
                </div>
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                  <input
                    type="tel"
                    placeholder="Alternative Phone No"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full"
                    defaultValue={userInfo?.email}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className=" bg-white pb-8 mt-6 rounded-lg">
              <h1 className=" text-2xl font-bold p-5 py-7">Shipping Address</h1>
              <div className=" flex flex-col gap-5 mx-5">
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                  <select className="select select-primary  w-full">
                    <option disabled selected>
                      Bangladesh
                    </option>
                  </select>
                  <select
                    className="select select-primary w-full "
                    onChange={(event) => {
                      const selectedId = event.target.value;
                      const foundDistrict = districts.find(
                        (dist) => dist.name.toString() === selectedId
                      );
                      setSelectedDistrict(foundDistrict);
                    }}
                  >
                    <option disabled selected>
                      District
                    </option>
                    {districts
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((dist) => {
                        return <option key={dist.id}>{dist.name}</option>;
                      })}
                  </select>
                  <select
                    className="select select-primary  w-full"
                    onChange={(event) => {
                      const selectedId = event.target.value;
                      const foundThana = thanas.find(
                        (thana) => thana.name.toString() === selectedId
                      );
                      setSelectedThana(foundThana);
                    }}
                  >
                    <option disabled selected>
                      Thana
                    </option>
                    {selectedDistrict?.id &&
                      thanas
                        .filter(
                          (thana) => thana.district_id === selectedDistrict.id
                        )
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((thana) => {
                          return <option key={thana.id}>{thana.name}</option>;
                        })}
                  </select>
                </div>
                <textarea
                  className="textarea textarea-primary "
                  placeholder="Home/ House No, Name of Area, Post Code etc."
                ></textarea>
              </div>
            </div>
            <div className="bg-white pb-8 mt-6 rounded-lg">
              <h1 className="text-2xl font-bold p-5 py-7">Payment Method</h1>
              <div
                className="flex items-center justify-between gap-3 border-primary border rounded mx-4 p-4 mt-3"
                onClick={() => {
                  setShowPaymentDetails(false);
                  setSelectedPaymentMethod("cod");
                }}
                style={{ cursor: "pointer" }}
              >
                <input
                  className="radio radio-success"
                  type="radio"
                  name="payment_method"
                  id="cod"
                  value="cod"
                  checked={selectedPaymentMethod === "cod"}
                />
                <label
                  htmlFor="cod"
                  className="ms-2 text-h6 mb-0 cursor-pointer flex  justify-between w-full"
                >
                  <p>Cash on delivery (COD)</p>
                  <img
                    src="https://grostore.themetags.com/public/frontend/pg/cod.svg?v=v2.7.0"
                    alt="cod"
                    className="img-fluid"
                  />
                </label>
              </div>

              <div
                className=" gap-3 border-primary border  rounded p-4 mx-4 mt-3"
                onClick={() => {
                  setShowPaymentDetails(true);
                  setSelectedPaymentMethod("paynow");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" flex items-center justify-between">
                  <div className=" flex items-center justify-center">
                    <input
                      className="radio radio-success"
                      type="radio"
                      name="payment_method"
                      onChange={() => setSelectedPaymentMethod("paynow")}
                      checked={selectedPaymentMethod === "paynow"}
                      required
                    />
                    <label htmlFor="paynow" className="ms-2 text-h6 mb-0">
                      Pay Now
                    </label>
                  </div>
                  <div className="radio-right text-end">
                    <img
                      src="https://i.ibb.co/nb2WyYQ/payment-logo.png"
                      alt="paynow"
                      className="h-6"
                    />
                  </div>
                </div>
                {showPaymentDetails && selectedPaymentMethod === "paynow" && (
                  <div className="m-4">
                    <p>
                      নিচের যেকোন একটা একাউন্টে টাকা পাঠিয়ে জানিয়ে দিন-
                      <br />
                      ১। বিকাশ / নগদ (পারসোনাল) 01793143054
                      <br />
                      ২। রকেট (পারসোনাল) 017931430546
                      <br />
                      ৩। DBBL : Md. Mehedi Hasan A/C 1801050028888 Branch:
                      Satkhira
                      <br />
                      ৪। Islami Bank Bangladesh LTD : Shera Organic Shop A/C
                      20501690100465100 Kalaroa Branch, Satkhira
                    </p>
                    <input
                      type="text"
                      placeholder="bKash, Nagad, Rocket, DBBL, IBBL"
                      className="input input-bordered input-primary w-full mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Your Account No"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 lg:p-5">
            <div className="sticky top-32">
              <h1 className="text-2xl font-bold pb-7">Order Summary</h1>
              <div className="flex justify-between py-3">
                <p>(+) Items(4):</p> <p>৳ {totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between py-3">
                <p>(+) Tax:</p> <p>৳ 0.00</p>
              </div>
              <div className="flex justify-between py-3">
                <p>(+) Shipping:</p> <p>৳ {delivaryCharge.toFixed(2)}</p>
              </div>
              <div className="divider"></div>

              <div className="flex justify-between py-3">
                <h3 className="text-lg font-bold">Total</h3>
                <p className="text-lg font-bold">
                  ৳ {totalPriceWithDelivaryCharge.toFixed(2)}
                </p>
              </div>

              <div className="divider"></div>
              <button className="btn btn-primary w-full text-white">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
