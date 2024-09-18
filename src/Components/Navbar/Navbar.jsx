import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import phone from "../../img/phone.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ count }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <h1 className="navbar__title">BrandLogo</h1>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <div className="navbar__bar"></div>
          <div className="navbar__bar"></div>
          <div className="navbar__bar"></div>
        </div>
        <ul className={`navbar__ul ${menuOpen ? "active" : ""}`}>
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
          <NavLink to="/contact" className="navbar__signup">
            <img src={phone} alt="" />
            Aloqaga chiqish
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
