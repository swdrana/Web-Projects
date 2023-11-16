import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function ProductDetailsCard() {
    return (
        <div className="flex flex-col md:flex-row gap-4 rounded-lg pb-3 shadow-lg ">
              <div className=" w-full md:w-1/2">
                {/* <div className="quickview-double-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide text-center">
                        <img
                          src="https://grostore-html.themetags.com/assets/img/products/p-lg-1.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                      <div className="swiper-slide text-center">
                        <img
                          src="assets/img/products/p-lg-2.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                      <div className="swiper-slide text-center">
                        <img
                          src="assets/img/products/p-lg-3.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                      <div className="swiper-slide text-center">
                        <img
                          src="assets/img/products/p-lg-4.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="swiper mt-80">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                        <img
                          src="assets/img/products/thumb-sm-1.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                      <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                        <img
                          src="assets/img/products/thumb-sm-2.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                      <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                        <img
                          src="assets/img/products/thumb-sm-3.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                      <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                        <img
                          src="assets/img/products/thumb-sm-4.png"
                          alt="jam"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
<div className=" h-96 w-[450px]">
<>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://grostore-html.themetags.com/assets/img/products/p-lg-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://grostore-html.themetags.com/assets/img/products/p-lg-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://grostore-html.themetags.com/assets/img/products/p-lg-3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>

              </div>
                {/* Product Discription and pirce  */}
              <div className=" w-full md:w-1/2">
                <div className="product-info">
                  <h4 className="mt-1 mb-3 text-xl font-bold">
                    Three Carrot Vegetables <br /> Peruvian Cuisine
                  </h4>
                    <div className="flex  items-center flex-nowrap mb-2">
                    <div className="rating rating-xs me-2">
                        <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        checked readOnly
                        />
                    </div>
                    <span className="flex-shrink-0  text-gray-deep text-[12px]">
                        (5.2k Reviews)
                    </span>
                    </div>
                  <div className="font-bold mt-2 text-error">
                  ৳140.00 
                    <span className="font-bold text-gray-500 line-through ms-1">
                    {/* ৳240.00 */}
                    </span>
                  </div>
                  
                  <div className="flex mt-4">
                    <h6 className="mb-1 flex-shrink-0 font-bold text-lg">Description</h6>
                    <span className=" w-full border-b-2 border-secondary mb-3 ms-2 me-5"></span>
            
                  </div>
                  <p className="mb-3 text-gray-deep">
                    Clicks-and-mortar &quot;outside the bethinking. Interactively
                    disseminate innovative intellectual relationships.
                  </p>
                  {/* <ul className="flex flex-col gap-2">
                    <li className=" flex items-center">
                      <span className="me-2 text-primary">
                      <FaCheckCircle />
                      </span>
                      Natural ingredients
                    </li>
                    <li className=" flex items-center">
                      <span className="me-2 text-primary">
                      <FaCheckCircle />
                      </span>
                      Tastes better with milk
                    </li>
                    <li className=" flex items-center">
                      <span className="me-2 text-primary">
                      <FaCheckCircle />
                      </span>
                      Vitamins B2, B3, B5 and B6
                    </li>
                    <li className=" flex items-center">
                      <span className="me-2 text-primary">
                      <FaCheckCircle />
                      </span>
                      Refrigerate for freshness
                    </li>
                  </ul> */}

                  <h6 className="mb-1 mt-4 flex-shrink-0 font-bold text-lg">Weight:</h6>
                  <ul className="product-radio-btn mb-4 flex gap-2">
  <li>
    <input
      type="radio"
      id="weight-150g"
      name="weight"
      value="150g"
      defaultChecked
      className="hidden"
    />
    <label
      htmlFor="weight-150g"
      className={`inline-block px-4 bg-transparent border border-secondary text-secondary cursor-pointer rounded transition duration-300 ease-in-out hover:bg-secondary hover:text-white focus:outline-none focus:ring focus:border-secondary ${
        true ? 'bg-secondary text-white' : ''
      }`}
    >
      150g
    </label>
  </li>
  <li>
    <input
      type="radio"
      id="weight-500g"
      name="weight"
      value="500g"
      className="hidden"
    />
    <label
      htmlFor="weight-500g"
      className={`inline-block px-4 bg-transparent border border-secondary text-secondary cursor-pointer rounded transition duration-300 ease-in-out hover:bg-secondary hover:text-white focus:outline-none focus:ring focus:border-secondary ${
        false ? 'bg-secondary text-white' : ''
      }`}
    >
      500g
    </label>
  </li>
  <li>
    <input
      type="radio"
      id="weight-1kg"
      name="weight"
      value="1kg"
      className="hidden"
    />
    <label
      htmlFor="weight-1kg"
      className={`inline-block px-4 bg-transparent border border-secondary text-secondary cursor-pointer rounded transition duration-300 ease-in-out hover:bg-secondary hover:text-white focus:outline-none focus:ring focus:border-secondary ${
        false ? 'bg-secondary text-white' : ''
      }`}
    >
      1kg
    </label>
  </li>
</ul>

                  <div className="d-flex align-items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                        <div>
                            <label className="input-group">
                                <button className="btn btn-primary text-lg">-</button>
                                <input
                                type="text"
                                placeholder="1"
                                className="input input-primary input-bordered w-14 text-center font-bold text-lg"
                                readOnly
                                />
                                <button className="btn btn-primary text-lg">+</button>
                            </label>
                        </div>
                        <Link to='#' className="btn btn-secondary btn-md text-white">
                        <FaCartArrowDown /> Buy Now
                        </Link>
                    </div>
                  </div>
                  <div className="tt-category-tag mt-4 gap-1 flex">
                    <div className="badge badge-accent ">Vegetable</div>
                    <div className="badge badge-accent ">Healthy</div>
                    <div className="badge badge-accent badge-outline">Organic</div>
                    <div className="badge badge-accent badge-outline">Vegetable</div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default ProductDetailsCard
