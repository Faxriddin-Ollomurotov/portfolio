import React from "react";
import Header from "./Components/Head/Header";
import "./App.css";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/portfolio";
import Resume from "./Components/Resume/resume";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
