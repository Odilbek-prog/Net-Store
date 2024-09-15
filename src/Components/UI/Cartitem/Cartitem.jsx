import React from "react";
import { Remove, Add, Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import "./Cartitem.scss";

const Cartitem = ({ item, DeleteItem }) => {
  const { id, price, image, quantity, category } = item;
  console.log(category);
  return (
    <Typography
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      marginTop={"50px"}
      className="cart__item"
    >
      <img src={price} alt="" className="cartitem__img" />
      <Typography
        display={"flex"}
        flexDirection={"column"}
        gap={"30px"}
        className="cartitem__middle"
      >
        <h5>{id}</h5>
        <p>Category: {category}</p>
      </Typography>
      <Typography
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        className="cartitem__center"
      >
        <Button color="info" variant="outlined">
          <Remove />
        </Button>
        <span>{quantity}</span>
        <Button color="info" variant="outlined">
          <Add />
        </Button>
      </Typography>
      <Typography
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        className="cartitem__right"
      >
        <Button
          onClick={() => {
            DeleteItem(id);
          }}
          variant="contained"
          color="error"
        >
          <Delete />
        </Button>
        <Typography color={"blue"} variant="h5">
          {image} $
        </Typography>
        <Typography className="fakeprice" color={"red"} variant="h5">
          {image + 10.1} $
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Cartitem;
