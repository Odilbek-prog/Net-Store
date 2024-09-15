import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Katalog.scss";
import gamepad from "../../../img/Category-Gamepad.png";
import headphone from "../../../img/Category-Headphone.png";
import watch from "../../../img/Category-SmartWatch.png";
import computer from "../../../img/Category-Computer.png";
import phone from "../../../img/Category-CellPhone.png";

const Katalog = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <div className="slider-container katalog">
      <h1 className="katalog__title">Kataloglar</h1>
      <Slider {...settings} className="sliderkatalog">
        <button className="btn">
          <img className="phone" src={phone} alt="" />
          <p>Telefon</p>
        </button>
        <button className="btn">
          <img src={computer} alt="" />
          <p>Kompyuter</p>
        </button>
        <button className="btn">
          <img src={watch} alt="" />
          <p>Aqilli soatlar</p>
        </button>
        <button className="btn">
          <img
            className="cam"
            src="https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png"
            alt=""
          />
          <p>Kamera</p>
        </button>
        <button className="btn">
          <img className="head" src={headphone} alt="" />
          <p>Quloqchinlar</p>
        </button>
        <button className="btn">
          <img src={gamepad} alt="" />
          <p>Aksesuarlar</p>
        </button>
      </Slider>
    </div>
  );
};

export default Katalog;
