// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../style.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
// import { data } from "./shared";

const FirstSlide = () => {
  return (
    <div
      className="opacity-75 bg-no-repeat px-10 flex flex-col text-white h-full w-full justify-center"
      style={{
        backgroundImage: `url(https://www.mercedes-benz.com/en/_jcr_content/root/slider_copy_copy_cop/sliderchilditems/slideritem_194632730/image/MQ7-0-image-20220202085701/mercedes-benz-g-class_3400x1440.jpeg)`,
        backgroundSize: "cover",
    }}
    >
      <div className="mr-10 md:mr-24 w-full">

      <p className="text-right my-3 text-[20px] md:text-[24px] font-semibold">نص يمكن استبدالة</p>
      <h1 className="text-right font-bold w-3/5 text-[32px] md:text-[80px]">
        هذا النص
        يمكن استبدالة
      </h1>
      <div className="bg-transparent hover:scale-[1.02] cursor-pointer hover:text-white hover:bg-gradient-to-br from-slate-100 via-transparent to-neutral-200 border-2 p-2 mt-10 text-center w-fit font-semibold text-[20px] md:text-[24px]">اكتشف الان</div>
      </div>
    </div>
  );
};



export default function VerticalSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* {data.map( el => {
            return <SwiperSlide>{<img 
                className="w-full h-72"
                width="100%"
                src={el.image}
                alt=""
                // style={{
                //   backgroundImage: `url(${el.image})`,
                //   backgroundSize: "cover",
                // }}
                />}</SwiperSlide>
        })} */}
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
