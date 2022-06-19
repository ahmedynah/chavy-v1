// import React from 'react'
import Carousel from "react-grid-carousel";
import ProductCard from "./ProductCard";
import { data } from "./shared";
const Gallery = () => {
  return (
    <Carousel
      cols={3}
      rows={2}
      containerStyle={{ background: "transparent", width:"100%" }}
      gap={1}
      autoplay={2500}
      loop
      showDots={true}
    >
      {data.map((el) => {
        return (
          <Carousel.Item>
            <ProductCard link={el.image}/>
          </Carousel.Item>
        );
      })}

      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
    </Carousel>
  );
};
export default Gallery;
