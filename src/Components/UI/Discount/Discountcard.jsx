import React from "react";
import { Add, Favorite, ShoppingCart } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Discountcard = ({ data, AddGood }) => {
  const { image, title, price, id, category } = data;

  const handleAddGood = () => {
    AddGood(title, id, image, price, category);
    toast.success(`${title.slice(0, 10)} has been added to the cart!`);
  };

  return (
    <>
      <div className="wrapper">
        <NavLink to={`/elementItem/${id}`}>
          <div className="discount__card">
            <img className="discount__img" src={image} alt={title} />
            <div>
              <h5>{title.slice(0, 20)}</h5>
              <h7 className="fakeprice">{price + 10.1} $</h7>
              <h5 className="realprice" style={{ fontWeight: "900" }}>
                {price} $
              </h5>
            </div>
          </div>
        </NavLink>
        <div className="btns">
          <Button
            color="info"
            onClick={handleAddGood}
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
    </>
  );
};

export default Discountcard;
