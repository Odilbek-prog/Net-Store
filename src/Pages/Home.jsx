import React from "react";
import Intro from "../Components/UI/Intro/Intro.jsx";
import Katalog from "../Components/UI/Katalog/Katalog.jsx";
import Discount from "../Components/UI/Discount/Discount.jsx";
import New from "../Components/UI/New/New.jsx";
import Malumot from "../Components/UI/Malumot/Malumot.jsx";

const Home = ({ base, AddGood }) => {
  return (
    <div className="container">
      <Intro />
      <Katalog />
      <Discount AddGood={AddGood} base={base} />
      <New />
      <Malumot />
    </div>
  );
};

export default Home;
