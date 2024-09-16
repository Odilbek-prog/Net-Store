import React from "react";
import "./Discount.scss";
import Discountcard from "./Discountcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discount = ({ base, AddGood }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <div className="discount">
      <div className="discount__wrapper">
        <h2 className="discount__title">Yangi Chegirmalar</h2>
        <div className="slider-container discountslider">
          <Slider {...settings} className="slider">
            {base.map((item, index) => (
              <Discountcard AddGood={AddGood} data={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Discount;
