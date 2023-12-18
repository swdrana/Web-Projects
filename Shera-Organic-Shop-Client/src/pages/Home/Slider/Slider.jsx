import "./Slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import heroCercle from './../../../assets/images/bg/hero-circle-sm.png'
import heroCercleLG from './../../../assets/images/bg/hero-circle-lg.png'
import mango from './../../../assets/images/bg/mango.png'
import leafShadow from './../../../assets/images/bg/leaf-shadow.png'
const Slider = () => {
  return (
      <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" container mx-auto">
          <div className=" mt-5 px-1 md:px-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className=" text-start relative ps-4 sm:ps-0">
              <img
                className=" absolute animate-spin-slow -top-16 right-1/2"
                src={heroCercle}
                alt={heroCercle}
              />
              <h3 className=" text-xl text-[#fd7e14] Charmonman-Bold">
                Genuine 100% Organic Products
              </h3>
              <h1 className=" text-4xl md:text-6xl font-bold my-4">
                খাটি পন্য <br /> ভেজাল মুক্ত
              </h1>
              <p className=" w-full lg:w-10/12 my-4 text-[#5d6374] text-lg">
                Assertively target market-driven intellectual capital with
                worldwide human capital holistic.
              </p>
              <div className=" flex flex-col md:flex-row gap-2 md:gap-10">
                <Link
                  to={"/products"}
                  className="btn btn-secondary bg-[#fd7e14] border-0 hover:bg-[#6eb356] text-white w-44 h-14 rounded-md normal-case  text-base font-normal"
                >
                  Explore Now
                </Link>
                <Link
                  to={"/about-us"}
                  className="btn btn-secondary bg-[#6eb356] border-0 hover:bg-[#fd7e14] text-white w-32 sm:w-44 h-14 rounded-md normal-case  text-base font-normal"
                >
                  About Us
                </Link>
              </div>
              <img
                className=" absolute mt-20 md:bottom-50 animate-bounce-slow"
                src={mango}
                alt={mango}
              />
            </div>
            <div className="relative">
              <img
                className=" absolute -top-[100%] -z-40 sm:-top-72 lg:-top-1 -right-24 md:right-0 animate-bounce-slow"
                src={leafShadow}
                alt={leafShadow}
              />
              <img
                className="animate-spin-slow"
                src={heroCercleLG}
                alt={heroCercleLG}
              />
              <img
                className=" absolute top-0  right-0 lg:right-0 lg:top-10"
                src="https://i.ibb.co/n0tp9qq/extra-virgin-coconut-oil-Banner-1.png"
                alt=""
              />
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Slider;
