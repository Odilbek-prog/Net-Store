import React from "react";
import "./Discount.scss";
import Discountcard from "./Discountcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discount = ({ base, AddGood }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
