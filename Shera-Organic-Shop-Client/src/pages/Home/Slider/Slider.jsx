import "./Slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="container mx-auto mb-3 -pt-16">
    <div className="h-[640px]">
      <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" grid grid-cols-1 lg:grid-cols-2 ms-0 md:ms-6 justify-center items-center">
            <div className=" text-start relative ps-4 sm:ps-0">
              <img
                className=" absolute animate-spin-slow -top-16 right-1/2"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/hero-circle-sm.png?v=v2.5.1"
                alt=""
              />
              <h3 className=" text-xl text-[#fd7e14] Charmonman-Bold">
                Genuine 100% Organic Products
              </h3>
              <h1 className=" text-4xl md:text-6xl font-bold my-4">
                Online Fresh <br /> Grocery Products
              </h1>
              <p className=" w-full lg:w-10/12 my-4 text-[#5d6374] text-lg">
                Assertively target market-driven intellectual capital with
                worldwide human capital holistic.
              </p>
              <div className=" flex flex-col md:flex-row gap-2 md:gap-10">
                <Link
                  to={"/"}
                  className="btn btn-secondary bg-[#fd7e14] border-0 hover:bg-[#6eb356] text-white w-44 h-14 rounded-md normal-case  text-base font-normal"
                >
                  Explore Now
                </Link>
                <Link
                  to={"/"}
                  className="btn btn-secondary bg-[#6eb356] border-0 hover:bg-[#fd7e14] text-white w-32 sm:w-44 h-14 rounded-md normal-case  text-base font-normal"
                >
                  About Us
                </Link>
              </div>
              <img
                className=" absolute mt-20 md:bottom-50 animate-bounce-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/mango.png?v=v2.5.1"
                alt=""
              />
            </div>

            <div className="relative mx-0 lg:mx-10 h-96">
              <img
                className=" absolute -top-[100%] -z-40 sm:-top-72 lg:-top-1 -right-24 md:right-0 animate-bounce-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/leaf-shadow.png?v=v2.5.1"
                alt=""
              />
              <img
                className="animate-spin-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/hero-circle-lg.png?v=v2.5.1"
                alt=""
              />
              <img
                className=" absolute top-0  right-10 lg:right-0 lg:top-10"
                src="https://grostore.themetags.com/public/uploads/media/3XYKoNGPCc3N1Pj5cXcMJSaRw3dXSGSsvPH7A0nz.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid grid-cols-1 lg:grid-cols-2 ms-0 md:ms-6 justify-center items-center">
            <div className=" text-start relative ps-4 sm:ps-0">
              <img
                className=" absolute animate-spin-slow -top-16 right-1/2"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/hero-circle-sm.png?v=v2.5.1"
                alt=""
              />
              <h3 className=" text-xl text-[#fd7e14] Charmonman-Bold">
                Genuine 100% Organic Products
              </h3>
              <h1 className=" text-4xl md:text-6xl font-bold my-4">
                Online Fresh <br /> Grocery Products
              </h1>
              <p className=" w-full lg:w-10/12 my-4 text-[#5d6374] text-lg">
                Assertively target market-driven intellectual capital with
                worldwide human capital holistic.
              </p>
              <div className=" flex flex-col md:flex-row gap-2 md:gap-10">
                <Link
                  to={"/"}
                  className="btn btn-secondary bg-[#fd7e14] border-0 hover:bg-[#6eb356] text-white w-44 h-14 rounded-md normal-case  text-base font-normal"
                >
                  Explore Now
                </Link>
                <Link
                  to={"/"}
                  className="btn btn-secondary bg-[#6eb356] border-0 hover:bg-[#fd7e14] text-white w-32 sm:w-44 h-14 rounded-md normal-case  text-base font-normal"
                >
                  About Us
                </Link>
              </div>
              <img
                className=" absolute mt-20 md:bottom-50 animate-bounce-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/mango.png?v=v2.5.1"
                alt=""
              />
            </div>

            <div className="relative mx-0 lg:mx-10 h-96">
              <img
                className=" absolute -top-[100%] -z-40 sm:-top-72 lg:-top-1 -right-24 md:right-0 animate-bounce-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/leaf-shadow.png?v=v2.5.1"
                alt=""
              />
              <img
                className="animate-spin-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/hero-circle-lg.png?v=v2.5.1"
                alt=""
              />
              <img
                className=" absolute top-0  right-10 lg:right-0 lg:top-10"
                src="https://grostore.themetags.com/public/uploads/media/3XYKoNGPCc3N1Pj5cXcMJSaRw3dXSGSsvPH7A0nz.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Slider;
