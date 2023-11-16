import { useParams } from "react-router-dom";
import useProductDetails from "../../../hooks/useProductDetails";
import { FaCheckCircle, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
// import { MdShoppingCartCheckout } from "react-icons/md";



function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error fetching product details: {error}</p>;
  }

  if (!product) {
    return <p>No product found with the given ID</p>;
  }

  return (
    <div className="bg-base-100">

    
      <div className=" container mx-auto ">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="py-6 px-4">
            <ProductDetailsCard/>
            <div className="product-info-tab  rounded-lg bg-red-300 shadow-lg  overflow-hidden pt-6 mt-4">
              <ul
                className="nav nav-tabs border-bottom justify-content-center gap-5 pt-info-tab-nav"
                role="tablist"
              >
                <li>
                  <a
                    href="#description"
                    className="active"
                    data-bs-toggle="tab"
                    aria-selected="true"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    href="#info"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex="-1"
                    role="tab"
                  >
                    Additional Information
                  </a>
                </li>
                <li>
                  <a
                    href="#review"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex="-1"
                    role="tab"
                  >
                    Reviews(02)
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active px-4 py-5"
                  id="description"
                  role="tabpanel"
                >
                  <h6 className="mb-2">Details:</h6>
                  <p className="mb-4">Italy's best, reimagined...</p>
                  <ul className="list-disc mb-4">{/* List items go here */}</ul>
                  <h6 className="mb-2">Ingredients:</h6>
                  <p className="mb-0">
                    Italian Plum Tomatoes From Italy's San Marzano Region, Extra
                    Virgin Olive Oil, Fresh Garlic, Fresh Onions, Sea Salt,
                    Fresh Basil, Spices, Citric Acid.
                  </p>
                </div>
                <div
                  className="tab-pane fade px-4 py-5"
                  id="info"
                  role="tabpanel"
                >
                  <h6 className="mb-2">Additional Information:</h6>
                  <table className="w-100 product-info-table">
                    <tbody>
                      <tr>
                        <td className="text-dark font-bold">Colors</td>
                        <td>Black, Green, Orange, Red</td>
                      </tr>
                      <tr>
                        <td className="text-dark font-bold">Weight</td>
                        <td>0.5Kg, 1Kg, 2Kg, 5Kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade px-4 py-5"
                  id="review"
                  role="tabpanel"
                >
                  <div className="review-tab-box bg-white rounded pt-30 pb-40 px-4">
                    {/* Reviews content goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>







          <div className="">
            <div className="">
              <div className="rounded-lg shadow-lg bg-white mt-6">
                {/* Free Shipping */}
                <div className="flex items-center gap-3 p-4">
                  <span className=" h-14  w-14 bg-[#ddf4d3] rounded-full inline-flex items-center justify-center">
                    <img
                      src="https://grostore.themetags.com/public/uploads/media/pgSJr9x2xaqcftpGHAT1aXCtqnV2Xnf8ScreQrmW.png"
                      className="img-fluid"
                      alt=""
                    />
                  </span>
                  <div className="info-right">
                    <h6 className="mb-1 font-bold">Free Shipping</h6>
                    <span className=" text-sm">For orders from ৳5000</span>
                  </div>
                </div>
                <hr/>
                <div className="flex items-center gap-3 p-4">
                  <span className=" h-14  w-14 bg-[#ddf4d3] rounded-full inline-flex items-center justify-center">
                    <img
                      src="https://grostore.themetags.com/public/uploads/media/otQQporcARCuhzsqJ0AYFEmrjU4UvIs8uqkDrIjT.png"
                      className="img-fluid"
                      alt=""
                    />
                  </span>
                  <div className="info-right">
                    <h6 className="mb-1 font-bold">100% Money Back</h6>
                    <span className=" text-sm">Guaranteed Product Warranty</span>
                  </div>
                </div>
                <hr/>
                <div className="flex items-center gap-3 p-4">
                  <span className=" h-14  w-14 bg-[#ddf4d3] rounded-full inline-flex items-center justify-center">
                    <img
                      src="https://grostore.themetags.com/public/uploads/media/MyoQJmTOmbaYUaSnGUF8k4bGcKnV6moevKnFsGgp.png"
                      className="img-fluid"
                      alt=""
                    />
                  </span>
                  <div className="info-right">
                    <h6 className="mb-1 font-bold">Safety & Secure</h6>
                    <span className=" text-sm">Call us Anytime & Anywhere</span>
                  </div>
                </div>
              </div>

              {/* Banner Widget */}
              <div className="sidebar-widget banner-widget mt-4 rounded-lg shadow-lg">
                <a href="">
                  <img
                    src="https://grostore.themetags.com/public/uploads/media/4XLlX5B52ESQ9DQW7D79aNa6OUooSX4Y13F9lMp9.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              {/* End of Banner Widget */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
