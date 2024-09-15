import React from "react";
import "../App.scss";
import rating from "../img/rating.webp";
import delivery from "../img/icon-delivery.png";
import icon from "../img/return.png";
import { useParams } from "react-router-dom";

const Item = ({ base }) => {
  const params = useParams()?.id;
  const item = base.filter((elem) => elem?.id === +params);
  const { title, price, image, description } = item[0];
  return (
    <div className="item">
      <div className="item__wrapper">
        <div className="item__left">
          <div className="item__left__left">
            <img
              className="item__left__img"
              src="https://via.placeholder.com/170x140"
              alt="item"
            />
            <img
              className="item__left__img"
              src="https://via.placeholder.com/170x140"
              alt="item"
            />
            <img
              className="item__left__img"
              src="https://via.placeholder.com/170x140"
              alt="item"
            />
            <img
              className="item__left__img"
              src="https://via.placeholder.com/170x140"
              alt="item"
            />
          </div>
          <img src={image} alt="img" className="item__left__bigimg" />
        </div>
        <div className="item__right">
          <div className="item__right__top">
            <h3 className="item__right__title">{title}</h3>
            <img className="item__right__rating" src={rating} alt="img" />
            <h1 className="item__price">$ {price}</h1>
            <p className="item__right__text">{description}</p>
          </div>
          <hr className="item__hr" />
          <div className="item__right__bottom">
            <h3 className="colors">
              Ranglari: <div className="black"></div>
              <div className="blue"></div>
            </h3>
            <div className="item__right__bottom__malumot">
              <div className="free">
                <img src={delivery} alt="img" />
                <div className="deliver">
                  <p className="title">Bepul Yetkazib Berish</p>
                  <p className="text">
                    Yetkazib berish uchun pochta indeksingizni kiriting
                  </p>
                </div>
              </div>
              <hr className="freehr" />
              <div className="redeliver">
                <img src={icon} alt="img" />
                <div className="deliver">
                  <p className="title">Qayta Yetkazib Berish</p>
                  <p className="text">
                    30 Kun ichida mahsulot va pullaringizni qaytarib berish.
                    Tafsilotlar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
