import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Router from "../../Routes/Router";
import Footer from "../Footer/Footer";
import Topnav from "../Topnav/Topnav";

const Layout = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Topnav />
      <Navbar count={count} />
      <div className="main">
        <Router setCount={setCount} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
