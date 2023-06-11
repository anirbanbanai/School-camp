// import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import useAproveClasses from "../Hooks/useAproveClass";
// import SubPopularClass from "./SubPopularClass";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const PopularClasses = () => {
    const [classes] = useAproveClasses()
    return (
        <div className="m-10 border-2 bg-red-200">
            <h3 className="text-4xl text-center font-semibold">Popular Classes</h3>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
                modules={[Pagination]}
                className="mySwiper w-3/4"
            >
                {
                    classes.map(m => <SwiperSlide key={m._id} m={m}>
                       <div className="text-center">
                       <h3 className="text-2xl font-semibold">{m.name}</h3>
                        <img className="h-60 mx-auto" src={m.img} alt="" />
                        <h4 className="text-xl font-semibold mb-10">{m.details}</h4>
                       </div>
                    </SwiperSlide>)
                }
               
            </Swiper>
            <Link to='/class' className="flex justify-center">
        <button className="btn btn-warning ">Show All Class</button>
        </Link>
           
        </div>
    );
};

export default PopularClasses;


