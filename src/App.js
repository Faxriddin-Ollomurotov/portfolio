import React, { useState } from "react";
import Header from "./Components/Head/Header";
import "./App.css";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/portfolio";
import Resume from "./Components/Resume/resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
