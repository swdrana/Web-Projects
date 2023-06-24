import "./Slider.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="slider w-full h-screen">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" grid grid-cols-1 lg:grid-cols-2 mx-20 justify-center items-center h-full">
            <div className=" relative">
              <h3 className=" text-xl text-orange">
                Genuine 100% Organic Products
              </h3>
              <h1 className=" text-6xl font-bold my-4">
                Online Fresh <br /> Grocery Products
              </h1>
              <p className=" w-full lg:w-10/12 my-4  text-g_gray2 text-lg">
                Assertively target market-driven intellectual capital with
                worldwide human capital holistic.
              </p>
              <div className=" flex gap-10">
                <Link to={'/'} className="btn btn-secondary bg-[#fd7e14] border-0 hover:bg-[#6eb356] text-white w-44 h-14 rounded-md normal-case  text-base font-normal">
                  Explore Now
                </Link>
                <Link to={'/'} className="btn btn-secondary bg-[#6eb356] border-0 hover:bg-[#fd7e14] text-white w-44 h-14 rounded-md normal-case  text-base font-normal">
                About Us
                </Link>
              </div>
                <img className=" absolute mt-20 bottom-50 animate-bounce-slow" src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/mango.png?v=v2.5.1" alt="" />
            </div>

            <div className="relative mx-0 lg:mx-10">
              <img
                className=" absolute -top-1 right-0 animate-bounce-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/leaf-shadow.png?v=v2.5.1"
                alt=""
              />
              <img
                className="animate-spin-slow"
                src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/hero-circle-lg.png?v=v2.5.1"
                alt=""
              />
              <img
                className=" absolute top-0  right-10 lg:right-0 lg:top-10 "
                src="https://grostore.themetags.com/public/uploads/media/3XYKoNGPCc3N1Pj5cXcMJSaRw3dXSGSsvPH7A0nz.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex">
          <div>
            <h3>Genuine 100% Organic Products</h3>
            <h1>Online Fresh Grocery Products</h1>
            <p>
              Assertively target market-driven intellectual capital with
              worldwide human capital holistic.
            </p>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
          </div>
          <div>
            <img
              src="https://grostore.themetags.com/public/uploads/media/3XYKoNGPCc3N1Pj5cXcMJSaRw3dXSGSsvPH7A0nz.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          Slide 2
          <img
            src="https://grostore.themetags.com/public/uploads/media/tqX3y27qUHZweGhb3SBIDn5oaBmdNtTpoArgngd8.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          Slide 3
          <img
            src="https://grostore.themetags.com/public/uploads/media/94xjsBdRXNRUzF1D7zC54waCUu6Di7mv9rVQ4bmq.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
