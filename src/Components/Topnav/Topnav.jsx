import React from "react";
import "./Topnav.scss";
import LocationOnIcon from "../../img/carbon_location.png";

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__wrapper">
        <div className="topnav__location">
          <img src={LocationOnIcon} alt="" className="topnav__icon" />
          <span className="topnav__text">Shahar: Toshkent</span>
        </div>
        <span className="topnav__title">
          Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida
        </span>
        <select className="topnav__select">
          <option value="1">Uzbek</option>
          <option value="2">English</option>
          <option value="3">Russian</option>
        </select>
      </div>
    </div>
  );
};

export default Topnav;
