import { Link } from "react-router-dom";
import SectionTitle from "../../components/Pages/SectionTitle";
function Carts() {
  return (
    <div>
      <SectionTitle title="Carts" />
      <div className=" bg-gray-white">
        <div className=" container mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Product Info</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://grostore.themetags.com/public/uploads/media/RyXLvsaQVjFo3vC1QuphM8VSG5wNPtmK8f1u2gbI.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brit Premium Cat Indoor</div>
                        <div className="text-sm opacity-50">Weight: 1kg </div>
                      </div>
                    </div>
                  </td>
                  <td className=" text-secondary font-bold">৳1,440.00</td>
                  <td>
                    <div>
                      <label className="input-group">
                        <button className="btn btn-sm btn-primary">-</button>
                        <input
                          type="text"
                          placeholder="143"
                          className="input input-sm input-primary input-bordered w-12"
                          readOnly
                        />
                        <button className="btn btn-sm btn-primary">+</button>
                      </label>
                    </div>
                  </td>
                  <th>
                    <button className="btn btn-error btn-xs">X</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Product Info</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex flex-col w-full lg:flex-row py-10">
            <div className="flex-1 p-10 card bg-base-100 rounded-box">
              <h1 className=" text-2xl py-5 font-bold">Have a coupon?</h1>
              <p className="  text-gray-600">Apply coupon to get discount.</p>
              <div className="form-control py-2">
                <div className="input-group">
                  <input type="text" placeholder="Enter Your Coupon Code" className="input input-bordered" />
                  <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className=" flex-1 p-10 card bg-base-100 rounded-box">
              <div className=" flex justify-between">
                <h1 className=" text-2xl py-5">Subtotal</h1>
                <h1 className=" text-2xl py-5 font-bold">৳1,440.00</h1>
              </div>
              <p className="  text-gray-600">Shipping options will be updated during checkout.</p>
              <div className="py-2">
                <div className=" flex justify-between">
                  <Link to='/' className=" btn btn-secondary btn-outline">Continue Shopping</Link>
                  <Link to='/checkout' className=" btn btn-primary hover:btn-secondary"> <p className=" text-white">Checkout</p> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
