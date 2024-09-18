import React from "react";
import "./Intro.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptop from "../../../img/rasm.png";
import bg from "../../../img/bglaptop.png";

const Intro = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="slider-container introslidercon">
      <Slider {...settings}>
        <div className="intro">
          <div className="intro__desc">
            <h1 className="intro__title">New Laptop</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro__btn">Shop now</button>
          </div>
          <img src={laptop} alt="" className="intro__img" />
          <img src={bg} alt="" className="intro__bg" />
        </div>
        <div className="intro">
          <div className="intro__desc">
            <h1 className="intro__title">New Laptop</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro__btn">Shop now</button>
          </div>
          <img src={laptop} alt="" className="intro__img" />
          <img src={bg} alt="" className="intro__bg" />
        </div>
        <div className="intro">
          <div className="intro__desc">
            <h1 className="intro__title">New Laptop</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro__btn">Shop now</button>
          </div>
          <img src={laptop} alt="" className="intro__img" />
          <img src={bg} alt="" className="intro__bg" />
        </div>
        <div className="intro">
          <div className="intro__desc">
            <h1 className="intro__title">New Laptop</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro__btn">Shop now</button>
          </div>
          <img src={laptop} alt="" className="intro__img" />
          <img src={bg} alt="" className="intro__bg" />
        </div>
        <div className="intro">
          <div className="intro__desc">
            <h1 className="intro__title">New Laptop</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro__btn">Shop now</button>
          </div>
          <img src={laptop} alt="" className="intro__img" />
          <img src={bg} alt="" className="intro__bg" />
        </div>
        <div className="intro">
          <div className="intro__desc">
            <h1 className="intro__title">New Laptop</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro__btn">Shop now</button>
          </div>
          <img src={laptop} alt="" className="intro__img" />
          <img src={bg} alt="" className="intro__bg" />
        </div>
      </Slider>
    </div>
  );
};

export default Intro;
