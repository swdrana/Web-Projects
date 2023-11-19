import { useEffect, useState } from "react";
import SectionTitle from "../../components/Pages/SectionTitle";
import { useLocation } from "react-router-dom";
import instance from "../../provider/axios";

function Checkout() {
  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedThana, setSelectedThana] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productId = params.get("productId");
  const selectedVariant = params.get("selectedVariant");
  const quantity = params.get("quantity");
  console.log(productId, selectedVariant, quantity);



  const [totalPrice, setTotalPrice] = useState(0);
  const [delivaryCharge, setDelivaryCharge] = useState(0);
  const [totalPriceWithDelivaryCharge, setTotalPriceWithDelivaryCharge] = useState(0);
  useEffect(() => {
    // Function to calculate total price
    const calculateTotalPrice = async () => {
      try {
        const response = await instance.post("products/calculateTotalPrice", {
          productId,
          selectedVariant,
          quantity,
        });

        const { totalPrice, delivaryCharge, totalPriceWithDelivaryCharge } = response.data;
        setTotalPrice(totalPrice);
        setDelivaryCharge(delivaryCharge);
        setTotalPriceWithDelivaryCharge(totalPriceWithDelivaryCharge)
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
                  />
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="input input-bordered input-primary w-full"
                    required
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
                    readOnly
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
            <div className=" bg-white pb-8 mt-6 rounded-lg">
              <h1 className=" text-2xl font-bold p-5 py-7">Payment Method</h1>
              <div className=" flex flex-col gap-5 mx-5">
                <div className="checkout-radio flex items-center justify-between gap-3 bg-white rounded p-4 mt-3">
                  <div className="radio-left inline-flex items-center">
                    <div className="theme-radio">
                      <input
                        type="radio"
                        name="payment_method"
                        id="cod"
                        value="cod"
                        required
                      />
                      <span className="custom-radio"></span>
                    </div>
                    <label htmlFor="cod" className="ms-2 text-h6 mb-0">
                      Cash on delivery (COD)
                    </label>
                  </div>
                  <div className="radio-right text-end">
                    <img
                      src="https://grostore.themetags.com/public/frontend/pg/cod.svg?v=v2.7.0"
                      alt="cod"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="checkout-radio flex items-center justify-between gap-3 bg-white rounded p-4 mt-3">
                  <div className="radio-left inline-flex items-center">
                    <div className="theme-radio">
                      <input
                        type="radio"
                        name="payment_method"
                        id="paypal"
                        value="paypal"
                        required
                      />
                      <span className="custom-radio"></span>
                    </div>
                    <label htmlFor="paypal" className="ms-2 text-h6 mb-0">
                      Pay Now
                    </label>
                  </div>
                  <div className="radio-right text-end">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png"
                      alt="paypal"
                      className=" h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-4/12 sticky top-0 z-10 bg-base-100 p-5">
            <h1 className=" text-2xl font-bold pb-7">Order Summery</h1>
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
              <p className=" text-lg font-bold">৳ {totalPriceWithDelivaryCharge.toFixed(2)}</p>
            </div>

            <div className="divider"></div>
            <button className=" btn btn-primary w-full text-white">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
