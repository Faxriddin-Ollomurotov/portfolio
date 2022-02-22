import React from "react";
import Header from "./Components/Head/Header";
import "./App.css";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Portfolio />
    </div>
  );
};

export default App;
