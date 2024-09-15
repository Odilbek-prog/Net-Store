import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import magnify from "../../img/magnify.png";
import phone from "../../img/phone.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ count }) => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <h1 className="navbar__title">BrandLogo</h1>
        <ul className="navbar__ul">
          <li className="navbar__list">
            <NavLink to="/" className="navbar__link">
              Bosh sahifa
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/katalog" className="navbar__link">
              Katalog
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/about" className="navbar__link">
              Haqimizda
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/contact" className="navbar__link">
              Aloqa
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/cart" className="navbar__link">
              <ShoppingCartIcon className="cart__icon" />
              {count}
            </NavLink>
          </li>
        </ul>
        <div className="navbar__search">
          <input
            type="text"
            className="navbar__input"
            placeholder="Siz nima qidiryapsiz?"
          />
          <button className="navbar__btn">
            <img src={magnify} alt="" />
          </button>
        </div>
        <NavLink to="/contact" className="navbar__signup">
          <img src={phone} alt="" />
          Aloqaga chiqish
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
