import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import "../../../style.css";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper";
import ProductsContext from "../../../utils/contexts/ProductsContext";

export default function Slider(props) {
  const [swiperRef, setSwiperRef] = useState(null);
  const comps = !!props.comp && props.comp;
  const [slides, setSlides] = useState(comps);
  const [reachStart, setReachStart] = useState(false);
  const [reachEnd, setReachEnd] = useState(false);
  const { pagination, products, setPagination, info } =
    useContext(ProductsContext);
  const type = !!props.type && props.type;

  const isFirstAndClicked = () => {
    console.log("index = ",swiperRef.realIndex)
    return swiperRef.realIndex === 0
  }
  const isLastAndClicked = () => {
    console.log("index = ",swiperRef.realIndex)
    return swiperRef.realIndex === 7
  }
  const nextSlide = () => {
    swiperRef.slideNext(100);
  };
  const prevSlide = () => {
    swiperRef.slidePrev(100);
  };
  useEffect(() => {
    setSlides(comps);
  }, [comps]);

  useEffect(() => {
    if (reachEnd && type === "items" && info.totalPages > pagination) {
      console.log(info.totalPages);
      console.log(pagination, reachEnd, comps);
      console.log(swiperRef)
      if (swiperRef !== undefined) swiperRef.slideTo(0, 100);
      setPagination(pagination + 1);
      setReachEnd(false);
    }
  }, [reachEnd]);

  useEffect(() => {
    if (reachStart && type === "items" && pagination > 1) {
      console.log(pagination, "reach start = ", reachStart, comps);
      console.log(swiperRef)
      // if (swiperRef !== undefined) swiperRef.slideTo(0, 100);
      setPagination(pagination - 1);
      setReachStart(false);
    }
  }, [reachStart]);
  
  
  return (
    <>
      <div className="flex md:justify-between items-center">
        <>{props.header}</>
        <div className="flex w-fit gap-3 mr-auto my-5 text-[30px]">
          <div className="h-50 w-50" onClick={() => {prevSlide(); setReachStart(isFirstAndClicked())}}>
            <BsChevronRight className="cursor-pointer" />
          </div>

          <div className="h-50 w-50" onClick={() => {nextSlide(); 
            setReachEnd(isLastAndClicked())
            }}>
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
          rows: props.rows,
          fill: "rows",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        autoplay={props.autoPlay}
        style={{ height: "fit content" }}
      
        // className="w-full flex gap-4 "
      >
        {slides.map((el) => {
          return (
            <SwiperSlide
              style={{
                marginLeft: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                height: "fit-content",
                paddingBottom: "42px",
              }}
            >
              {el}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
