import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import pic1 from '../assets/chris-moore-lTmTva3H_ic-unsplash.jpg'
import pic2 from '../assets/hannah-gibbs-WOC-DFTx8IY-unsplash.jpg'
import pic3 from '../assets/kuan-fang-WaQ5xQq2E6g-unsplash.jpg'
import pic4 from '../assets/michal-parzuchowski-j3Ls3isC2mU-unsplash.jpg'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={pic4} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
