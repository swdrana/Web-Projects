import codSvg from "./../../assets/images/icon/cod.svg"
const PaymentDetails = ({
  showPaymentDetails,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  setSelectedPaymentMethod2,
  setAccount,
  setShowPaymentDetails,
}) => {
  return (
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
            src={codSvg}
            alt={codSvg}
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
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
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
              ৩। DBBL : Md. Mehedi Hasan A/C 1801050028888 Branch: Satkhira
              <br />
              ৪। Islami Bank Bangladesh LTD : Shera Organic Shop A/C
              20501690100465100 Kalaroa Branch, Satkhira
            </p>
            <input
              type="text"
              placeholder="bKash, Nagad, Rocket, DBBL, IBBL"
              onChange={(e) => setSelectedPaymentMethod2(e.target.value)}
              className="input input-bordered input-primary w-full mb-4"
              required
            />
            <input
              type="text"
              placeholder="Your Account No"
              onChange={(e) => setAccount(e.target.value)}
              className="input input-bordered input-primary w-full"
              required
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;
