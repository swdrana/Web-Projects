// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Sponsor.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const infoData = [
    {
        title:'Empathetic',
        desc:"Developers matter to us. We empathize with developer's needs at every stage of an app's lifecycle, from the first download to the next multi-market campaign.",
        img:"https://assets-official.mobvista.com/v3/page-illustrations/2023/08/03/pic (1).png"
    },
    {
        title:'Craftmanship',
        desc:"We carefully craft our products. We provide developers with best-in-class tools and guidance that help to get quick wins and great returns.",
        img:"https://assets-official.mobvista.com/v3/page-illustrations/2023/08/03/pic (3).png"
    },
    {
        title:'Drive',
        desc:"You can't win on your own. We are driven to help our customers succeed by delivering unbeatable products, support, and services.",
        img:"https://assets-official.mobvista.com/v3/page-illustrations/2023/08/03/pic (2).png"
    },
    {
        title:'Courage',
        desc:"We have strong willingness to embrace change and challenge. We are committed to doing business with integrity and  transparency, even in challenging situations.",
        img:"https://assets-official.mobvista.com/v3/page-illustrations/2023/08/03/pic (4).png"
    },
];
function OurValues() {
  return (
    <div className=" container mx-auto p-6">
      <div className=" p-6">
        <h1 className="text-3xl font-bold leading-none sm:text-4xl ">
          OUR VALUES
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={false}
          pagination={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {infoData.map((info) => (
            <SwiperSlide key={info.title}>
              <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                    <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                      <img
                        class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                        src={info.img}
                        alt="client photo"
                      />

                      <div class="mt-2 md:mx-6">
                        <div>
                          <h2 class="text-3xl font-medium tracking-tight text-base-100">
                            {info.title}
                          </h2>
                        </div>

                        <p class="mt-4   text-white ">
                          {info.desc}
                        </p>

                      </div>
                    </div>
                  </main>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurValues;
