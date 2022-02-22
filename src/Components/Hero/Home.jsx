import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import IN from "../../assits/in5.png";
import Diamond from "../../assits/diamond.png";
import Figma from "../../assits/figma.png";
import Uzim from "../../assits/uzim.png";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD </h3>
            <h1>
              Hi, I'm <span>Fakhriddin Ollomurotov</span>
            </h1>
            <h2>
              a{" "}
              <span>
                <Typewriter
                  words={["Junior coder.", "Developer"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, enim cum? Neque nesciunt molestiae sed similique,
              atque rerum dolore aspernatur excepturi dolorum, consequatur
              pariatur libero sunt adipisci facere asperiores labore.
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={IN} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={Diamond} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={Figma} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={Uzim} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
