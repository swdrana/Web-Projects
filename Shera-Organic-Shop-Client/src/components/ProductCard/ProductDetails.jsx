import { useParams } from "react-router-dom";
import useProductDetails from "../../../hooks/useProductDetails";
import ProductDetailsCard from "./ProductDetailsCard";
// import { MdShoppingCartCheckout } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LoadingProgress from "../LoadingProgress/LoadingProgress";
import carIcon from './../../assets/images/icon/car.png'
import returnIcon from './../../assets/images/icon/return.png'
import loveIcon from './../../assets/images/icon/love.png'
import productPageFeature from './../../assets/images/feature/product-page-feature.png'
function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);
  if(loading){
    return <LoadingProgress/>
  }
  const {description} = product;

  if (error) <p>Error fetching product details: {error}</p>;
  if (!product) <p>No product found with the given ID</p>;

  return (
    <div className="bg-base-100">
      <div className=" container mx-auto ">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="py-6 w-full">
            <div className=""><ProductDetailsCard product={product} /></div>
            <div className="w-full product-info-tab rounded-lg shadow-lg overflow-hidden pt-6 mt-4">
              <Tabs>
                <TabList className="flex border-b justify-center gap-5 pt-info-tab-nav">
                  <Tab>
                    <a className="active">Description</a>
                  </Tab>
                  {/* <Tab>
                    <a>Additional Information</a>
                  </Tab>
                  <Tab>
                    <a>Reviews(02)</a>
                  </Tab> */}
                </TabList>

                <div className="tab-content">
                  <TabPanel className="w-full">
                    {description ? (
                      <div className="px-4 py-5" dangerouslySetInnerHTML={{ __html: description }}>
                        {/* Ensure that yourHtmlData is the HTML content retrieved from your database */}
                      </div>
                    ) : (
                      <p>Loading HTML content...</p>
                    )}
                  </TabPanel>
                  {/* <TabPanel className="w-full">
                    <div className="px-4 py-5">
                      <h6 className="mb-2">Additional Information:</h6>
                      <table className="w-full product-info-table">
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
                  </TabPanel> */}
                  {/* <TabPanel className="w-full">
                    <div className="px-4 py-5">
                      <div className="review-tab-box bg-white rounded pt-30 pb-40 px-4">
                         Reviews content goes here
                      </div>
                    </div>
                  </TabPanel> */}
                </div>
              </Tabs>
            </div>
          </div>

          <div>
              <div className="rounded-lg shadow-lg bg-white mt-6">
                {/* Free Shipping */}
                <div className="flex items-center gap-3 p-4">
                  <span className=" h-14  w-14 bg-[#ddf4d3] rounded-full inline-flex items-center justify-center">
                    <img
                      src={carIcon}
                      className="img-fluid"
                      alt={carIcon}
                    />
                  </span>
                  <div className="info-right">
                    {/* <h6 className="mb-1 font-bold">Free Shipping</h6> */}
                    <h6 className="mb-1 font-bold">Fast Shipping</h6>
                    <span className=" text-sm">
                      We will try to fast shipping
                    </span>
                  </div>
                </div>
                <hr />
                <div className="flex items-center gap-3 p-4">
                  <span className=" h-14  w-14 bg-[#ddf4d3] rounded-full inline-flex items-center justify-center">
                    <img
                      src={returnIcon}
                      className="img-fluid"
                      alt={returnIcon}
                    />
                  </span>
                  <div className="info-right">
                    <h6 className="mb-1 font-bold">100% Money Back</h6>
                    <span className=" text-sm">
                      Guaranteed Product Warranty
                    </span>
                  </div>
                </div>
                <hr />
                <div className="flex items-center gap-3 p-4">
                  <span className=" h-14  w-14 bg-[#ddf4d3] rounded-full inline-flex items-center justify-center">
                    <img
                      src={loveIcon}
                      className="img-fluid"
                      alt={loveIcon}
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
                    src={productPageFeature}
                    alt={productPageFeature}
                    className="img-fluid"
                  />
                </a>
              </div>
              {/* End of Banner Widget */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
