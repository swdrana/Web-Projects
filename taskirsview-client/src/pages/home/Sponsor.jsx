// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Sponsor.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";

const imgList = [
  "https://www.mobvista.com/_nuxt/img/img_0.72280da.png",
  "https://www.mobvista.com/_nuxt/img/img_1.564625e.png",
  "https://www.mobvista.com/_nuxt/img/img_2.adbefa5.png",
  "https://www.mobvista.com/_nuxt/img/img_3.61766c0.png",
  "https://www.mobvista.com/_nuxt/img/img_4.6402af9.png",
  "https://www.mobvista.com/_nuxt/img/img_5.1dc57d9.png",
  "https://www.mobvista.com/_nuxt/img/img_6.c564059.png",
  "https://www.mobvista.com/_nuxt/img/img_7.2c55042.png",
];

function Sponsor() {
  return (
    <section className="text-gray-600 body-font py-0 md:py-20">
      <SectionTitle
        title="Our Top Partners"
        description="We adhere to up-to-date user privacy guidelines and secure data in
            privacy-compliant cloud storage"
      />
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {imgList.map((img) => (
            <SwiperSlide key={img}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Sponsor;
