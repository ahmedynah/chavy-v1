import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";


import "../style.css";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper";

export default function Slider(props) {
  const [swiperRef, setSwiperRef] = useState(null);

  const comps = !!props.comp && props.comp;
  const type = !!props.type && props.type;
  const nextSlide = () => {
    swiperRef.slideNext(100);
    console.log("in")
  };
  const prevSlide = () => {
    swiperRef.slidePrev(100);
    console.log("in")
  };
  useEffect(() => {
    console.log(props.header)
    console.log("rows= ",props.rows)

  },);
  return (
    <>
    <div className="flex md:justify-between items-center">
      <>
      {props.header}
      </>
      <div className="flex w-fit gap-3 mr-auto my-5 text-[30px]">
        <div className="h-50 w-50" onClick={() => prevSlide()}>
          <BsChevronRight className="cursor-pointer" />
        </div>
          
        <div className="h-50 w-50" onClick={() => nextSlide()}>
          <BsChevronLeft className="cursor-pointer" />
        </div>
      </div>
    </div>
      <Swiper
        onSwiper={setSwiperRef}
        cssMode={true}
        slidesPerView={props.slides}
        spaceBetween={20}
        // navigation={true}
        grid={{
          rows: props.rows ,
          fill: "rows"
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        autoplay={props.autoPlay}
        style={{ height:"fit content"}}
        

        // className="w-full flex gap-4 "
      >
        {comps.map((el) => {
          return <SwiperSlide style={{
            marginLeft: "0px",
            display:"flex",
            flexDirection:"column",
            justifyContent: "start",
            height:"fit-content",
            paddingBottom:"42px",
          }}>{el}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
