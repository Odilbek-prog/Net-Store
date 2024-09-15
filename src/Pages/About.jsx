import React from "react";
import Aboutimg from "../img/aboutimg.png";
import market from "../img/market.png";
import gift from "../img/gift.png";
import dollar from "../img/dollar.png";
import bagofmoney from "../img/bagofmoney.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__top">
        <div className="about__top__left">
          <h1 className="about__title">Biz haqimizda</h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit diam
            arcu faucibus ultrices mauris cursus. Risus in eu dui luctus enim
          </p>
        </div>
        <img className="about__top__right" src={Aboutimg} alt="" />
      </div>
      <div className="about__bottom">
        <div className="about__card">
          <img src={market} alt="" />
          <h2 className="about__card__title">10.5k</h2>
          <p className="about__card__text">Sallers active our site</p>
        </div>
        <div className="about__card">
          <img src={gift} alt="" />
          <h2 className="about__card__title">33k</h2>
          <p className="about__card__text">Monthly Produduct Sale</p>
        </div>
        <div className="about__card">
          <img src={dollar} alt="" />
          <h2 className="about__card__title">45.5k</h2>
          <p className="about__card__text">Customer active in our site</p>
        </div>
        <div className="about__card">
          <img src={bagofmoney} alt="" />
          <h2 className="about__card__title">25k</h2>
          <p className="about__card__text">Anual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
};

export default About;
