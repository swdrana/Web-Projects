import "./Slider.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
const Slider = () => {
  return (
    <div className="slider w-full h-screen">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex mx-20">
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
