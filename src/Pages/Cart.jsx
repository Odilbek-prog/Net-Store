import React from "react";
import { Typography } from "@mui/material";
import Cartitem from "../Components/UI/Cartitem/Cartitem";

const Cart = ({ cart, DeleteItem }) => {
  console.log(cart);

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <Typography variant="h5">Savatingiz</Typography>
        <div className="cards">
          {cart.map((item) => (
            <Cartitem DeleteItem={DeleteItem} key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
