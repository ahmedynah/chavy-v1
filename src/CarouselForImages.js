import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { data } from "./shared";

const items = [
  ...data.map((el) => {
    return (
      // <img
      //   key={el.id}
      //   data-value={el.id}
      //   height={300}
      //   width={200}
      //   src={el.image}
      //   alt=""
      //   className="object-cover"
      // />
      {
        src: `${el.image}`
      }
    );
  }),
];

const CarouselForImages = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Carousel images={items} shouldLazyLoad={true} style={{ height: 500, width: "100%" }} />
    </div>
  );
};
export default CarouselForImages;
