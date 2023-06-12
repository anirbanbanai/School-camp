// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import pic1 from '../assets/chris-moore-lTmTva3H_ic-unsplash.jpg'
import pic2 from '../assets/hannah-gibbs-WOC-DFTx8IY-unsplash.jpg'
import pic3 from '../assets/kuan-fang-WaQ5xQq2E6g-unsplash.jpg'
import pic4 from '../assets/michal-parzuchowski-j3Ls3isC2mU-unsplash.jpg'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sectiontwo() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mx-auto"
      >
        {/* <SwiperSlide>
            <img className="h-[400px]" src={pic1} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
            <img className="h-[600px] w-full mx-auto" src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[600px] w-full mx-auto" src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[600px] w-full mx-auto" src={pic4} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
