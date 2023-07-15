import React from "react";

const CarouselImage = (item) => {
    let {imgUrls} = item.props
    return (
      <div className="cImage">
        <img src={imgUrls} alt="carouselImg" />
      </div>
    );
  };

  export default CarouselImage;
