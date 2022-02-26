import React, { useState } from "react";
import "./Header.css";
import LOGO from "../../assits/logo.jpg";

const Header = ({ handleChange }) => {
  // const [change, setChange] = useState(null);

  // const Change = (e) => {
  //   setChange(e.target.value);
  //   // handleChange(change);
  //   console.log(change);
  // };

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 5);
  });
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo align_items_center">
            <img src={LOGO} alt="Meni rasmim" />
            <h1>Fakhriddin</h1>
          </div>
          <div className="navlink">
            <ul
              className={mobile ? "nav-link-mobile" : "f_flex link uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>

              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">BUY NOW</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <i class="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
