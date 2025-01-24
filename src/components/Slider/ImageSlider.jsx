import React from "react";
import Slider from "react-slick";

const ImageSlider = ({ sliderRef, sliderClassName, sliderSettings, onImageClick }) => {
  const images = [
    "https://mironcoder-hotash.netlify.app/images/product/single/02.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/03.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/04.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/05.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/02.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/04.webp",
  ];

  return (
    <Slider ref={sliderRef} className={`${sliderClassName}`} {...sliderSettings}>
      {images.map((src, index) => (
        <div
          className="item"
          key={index}
          onClick={() => onImageClick && onImageClick(index)} // Handle click on each image
        >
          <img src={src} alt={`image-${index}`} className="w-100" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
