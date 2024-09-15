import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import Signup from "../Pages/Signup";
import axios from "axios";
import Cart from "../Pages/Cart";
import Item from "../Pages/Item";
import Katalogpage from "../Pages/Katalog";

const Router = ({ setCount }) => {
  const [base, setBase] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      setBase(response?.data);
    } catch (error) {
      console.log("Qandaydir xatolik yuz berdi", error.message);
    }
  }

  const AddGood = (id, name, price, image, category) => {
    const itemIndex = cart.findIndex((elem) => elem.id === id);

    if (itemIndex < 0) {
      setCart((elem) => {
        setCount((prev) => prev + 1);

        const newGood = {
          id: id,
          name,
          price,
          image,
          category,
          quantity: 1,
        };
        return [...elem, newGood];
      });
    } else {
      const addCount = cart.map((elem) => {
        if (elem.id === id) {
          return { ...elem, quantity: elem.quantity + 1 };
        } else {
          return { ...elem };
        }
      });
      setCart(addCount);
    }
  };

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  const DeleteItem = (id) => {
    const deleteItems = cart.filter((elem) => elem?.id !== id);
    setCount((prev) => prev - 1);
    setCart(deleteItems);
  };
  return (
    <Routes>
      <Route path="/" element={<Home AddGood={AddGood} base={base} />} />
      <Route path="/katalog" element={<Katalogpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/cart"
        element={<Cart DeleteItem={DeleteItem} cart={cart} />}
      />
      <Route path="/elementItem/:id" element={<Item base={base} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
