
import React, { useState } from "react";
import "./carousel.css";
import CarouselImage from "./CarouselCard";
import { ImgData } from "../utils/constants";




const Carousel = () => {
  const [count, setCount] = useState(7);
  const [left, setLeft] = useState(0);

  const nextImg = () => {
    setLeft((previous) => {
      const newPosition = previous + 33;
      return newPosition <= 0 ? newPosition : 0;
    });
  };

  const prevImg = () => {
    setLeft((previous) => {
      const newPosition = previous - 33;
      const maxLeft = -((count - 1) * 33);
      return newPosition >= maxLeft ? newPosition : maxLeft;
    });
  };

  return (
    <div className="container">
      <div className="carouselHeading">
        <h2>All Themes</h2>
        <h4>What type of website are you looking for?</h4>
      </div>
      <div
        className="parent"
        style={{ position: "relative", left: `${left}vw` }}
      >
        {ImgData.map((item, index) => (
            <CarouselImage key={index}  props={item}/>
          ))}
      </div>
      <div className="controls">
        <div>

        </div>
        <div>
          <button className="btnBrows">Browse All Templates</button>
        </div>
        <div className="nextPrev">
          <button className="btnCircle" onClick={nextImg}>
          &#8249;
          </button>
          <button className="btnCircle" onClick={prevImg}>
          &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
