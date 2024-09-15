import React from "react";
import "./Intro.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptop from "../../../img/rasm.png";
import bg from "../../../img/bglaptop.png";

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
