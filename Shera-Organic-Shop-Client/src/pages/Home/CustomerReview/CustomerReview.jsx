// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import piaz from '../../../assets/images/bg/piaz.png'
import leap from '../../../assets/images/bg/leap.png'
import copi from '../../../assets/images/bg/copi.png'
import sosa from '../../../assets/images/bg/sosa.png'
import frute from '../../../assets/images/bg/frute.png'
import bgShape5 from '../../../assets/images/bg/bg-curve-bottom-white.png'
import mapBG from '../../../assets/images/bg/map-bg.png'
import avata2 from '../../../assets/images/bg/avata1.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CustomerReview.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function CustomerReview() {
  return (
    <div className=" bg-lime relative">
      <div className="container px-3 py-20 lg:px-0 mx-auto">
        <div className=" w-full lg:w-2/3 mx-auto relative">
          <h1 className=" text-2xl md:text-4xl font-bold text-center pb-12">
            What Our Clients Say
          </h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            //   remove the two bellow
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col bg-lime py-16">
                <p className=" py-5 text-[16px] text-center">
                  I want to order something (A perfume) for my mom at BD.
                  Although the delivery area was out of their scope, their
                  support team instantly replied to my query and manged to
                  deliver the product. The best thing I noticed, they informed
                  step by step updated news about the order processing.
                </p>
                <h3 className=" text-lg font-bold">Masuduzzaman Rana</h3>
                <div className="rating rating-sm m-auto pt-2">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input checked readOnly type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>

              <div className="swiper-pagination h-16 w-16 top-0 z-10">
                <img className=" rounded-full" src={'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/277676511_3180203492268845_5769328862801171419_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFeKM92Mc8FVc-Nt_dRms8TzsSYOjOCZ3vOxJg6M4Jne8Rnr60vq0YE22PDl5NnRcLz2HqtpYpmV7a7mN7i7hv5&_nc_ohc=Icht6AKqoWEAX-oTccH&_nc_ht=scontent.fjsr6-1.fna&cb_e2o_trans=q&oh=00_AfBWDzhjNptTilWBJ05okemDCg2vY2gfQyoO1pDAX8LyvQ&oe=65063256'} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col bg-lime py-16 w-full">
                <p className=" py-5 text-[16px]">The best thing I noticed, they informed
                  step by step updated news about the order processing.
                </p>
                <h3 className=" text-lg font-bold">Rana</h3>
                <div className="rating rating-sm m-auto pt-2">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input checked readOnly type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>

              <div className="swiper-pagination h-16 w-16 top-0 z-10">
                <img className=" rounded-full" src={avata2} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>

      <div className=" absolute w-full top-0  bg-center">
        <img src={mapBG} alt="" />
      </div>
        </div>
      </div>
      <div className=" -mt-28  h-28 bottom-0 z-50 bg-center" style={{backgroundImage: `url(${bgShape5})`}}>
      </div>
      <div className="  w-28 h-28  absolute top-10 left-0 z-50 bg-center bg-no-repeat" style={{backgroundImage: `url(${frute})`}}>
      </div>
      <div className="  w-28 h-28  absolute top-0 right-0 z-50 bg-center bg-no-repeat" style={{backgroundImage: `url(${sosa})`}}>
      </div>
      <div className="  w-28 h-28  absolute top-16 right-48 z-50 bg-center bg-no-repeat" style={{backgroundImage: `url(${copi})`}}>
      </div>
      <div className="  w-28 h-28  absolute bottom-28 left-48 z-50 bg-center bg-no-repeat" style={{backgroundImage: `url(${piaz})`}}>
      </div>
      <div className="  w-28 h-28  absolute bottom-10 right-48 z-50 bg-center bg-no-repeat" style={{backgroundImage: `url(${leap})`}}>
      </div>
    </div>
  );
}
