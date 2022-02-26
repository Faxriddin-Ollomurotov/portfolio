import React from "react";
import LOGO from "../../assits/logo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer container text-center">
        <img src={LOGO} alt="" />
        <p>2022. All right reserved by GorkCoder-Themes</p>
      </footer>
    </>
  );
};

export default Footer;
