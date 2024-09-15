import React from "react";
import { Add, Favorite, ShoppingCart } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Discountcard = ({ data, AddGood }) => {
  const { image, title, price, id, category } = data;
  return (
    <div className="wrapper">
      <NavLink to={`/elementItem/${id}`}>
        <div className="discount__card">
          <img className="discount__img" src={image} alt="" />
          <div>
            <h5>{title.slice(0, 20)}</h5>
            <h7 className="fakeprice">{price + 10.1} $</h7>
            <h5 className="realprice" fontWeight={"900"}>
              {price} $
            </h5>
          </div>
        </div>
      </NavLink>
      <div className="btns">
        <Button
          onClick={() => {
            AddGood(title, id, image, price, category);
          }}
          color="info"
          variant="contained"
          size="small"
        >
          <ShoppingCart />
          <Add />
        </Button>
        <Button color="error" variant="contained" size="small">
          <Favorite />
        </Button>
      </div>
    </div>
  );
};

export default Discountcard;
