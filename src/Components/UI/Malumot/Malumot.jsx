import React from "react";
import "./Malumot.scss";
import deliver from "../../../img/deliver.png";
import m24 from "../../../img/24:7.png";
import cashback from "../../../img/cashback.png";

const Malumot = () => {
  return (
    <div className="malumot">
      <div className="malumot__free">
        <img className="malumot__img" src={deliver} alt="" />
        <h3 className="malumot__title">BEPUL VA TEZ YETKAZIB BERISH</h3>
        <p className="malumot__text">Buyurtmalar uchun bepul yetkazib berish</p>
      </div>
      <div className="malumot__24ga7">
        <img className="malumot__img" src={m24} alt="" />
        <h3 className="malumot__title">24/7 MIJOZLARGA XIZMAT KO'RSATISH</h3>
        <p className="malumot__text">
          Do'stona 24/7 mijozlarni qo'llab-quvvatlash
        </p>
      </div>
      <div className="malumot__cashback">
        <img className="malumot__img" src={cashback} alt="" />
        <h3 className="malumot__title">PULNI QAYTARIB BERISH KAFOLATI</h3>
        <p className="malumot__text">Biz pulni 30 kun ichida qaytaramiz</p>
      </div>
    </div>
  );
};

export default Malumot;
