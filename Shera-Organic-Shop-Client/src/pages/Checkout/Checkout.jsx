import SectionTitle from "../../components/Pages/SectionTitle";

function Checkout() {
  return (
    <div className=" bg-gray-white">
      <SectionTitle title="Checkout" />
      <div className="container mx-auto py-16 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" w-full lg:w-8/12">
            <h1 className=" text-2xl font-bold pb-7">Shipping Address</h1>
          </div>
          <div className=" w-full lg:w-4/12 sticky top-0 z-10 bg-base-100 p-5">
            <h1 className=" text-2xl font-bold pb-7">Order Summery</h1>
            <div className="flex justify-between py-3"><p>(+) Items(4):</p>	<p>৳ 27,760.00</p></div>
            <div className="flex justify-between py-3"><p>(+) Tax:</p>	<p>৳ 0.00</p></div>
            <div className="flex justify-between py-3"><p>(+) Shipping:</p>	<p>৳ 100.00</p></div>
            <div className="divider"></div>

            <div className="flex justify-between py-3"><h3 className="text-lg font-bold">Total</h3><p className=" text-lg font-bold">৳ 100.00</p></div>
            
            <div className="divider"></div>
            <button className=" btn btn-primary w-full text-white">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
