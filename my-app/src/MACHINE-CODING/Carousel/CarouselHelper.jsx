import React from "react";
import Carousel from "./Carousel";
import "./CarouselStyle.css";

const imageList = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400",
  "https://picsum.photos/id/1020/800/400",
];

const CarouselHelper = () => {
  return (
    <div className="app-container">
      <h2>Image Carousel</h2>
      <Carousel images={imageList} autoPlay={true} interval={3000} />
    </div>
  );
};

export default CarouselHelper;
