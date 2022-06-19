import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

// import required modules
import { Navigation, Pagination, Mousewheel } from "swiper";

export default function Slider(props) {
  const comps = !!props.comp && props.comp;
  return (
    <>
      <Swiper
        cssMode={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel]}
        className="w-full flex gap-4 "
      >
        {comps.map( el => {
            return <SwiperSlide>{el}</SwiperSlide>
        })}
        
        {/* <SwiperSlide>{comps}</SwiperSlide>
        <SwiperSlide>{comps}</SwiperSlide>
        <SwiperSlide>{comps}</SwiperSlide>
        <SwiperSlide>{comps}</SwiperSlide>
        <SwiperSlide>{comps}</SwiperSlide>
        <SwiperSlide>{comps}</SwiperSlide>
        <SwiperSlide>{comps}</SwiperSlide> */}
      </Swiper>
    </>
  );
}
