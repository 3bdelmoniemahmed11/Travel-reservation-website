import "./App.css";
import React, { Fragment, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

const App = () => {
  const PriceValue = useRef();
  const filterFunc = useRef();
  const getTravelPrice = (price) => {
    PriceValue.current = price;
  };
  const getFilteredFunc = (filter) => {
    filterFunc.current = filter;
    return filter;
  };

  return (
    <Fragment>
      <Navbar />
      <Home filteration={getTravelPrice} filter={filterFunc} />
      <Main PriceValue={PriceValue} filteration={getFilteredFunc} />
      <About />
      <Footer />
    </Fragment>
  );
};

export default App;
