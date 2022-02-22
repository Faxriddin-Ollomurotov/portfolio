import React from "react";
import Card from "../Card/Card";
import "./portfolio.css";
import Data from "../Portfolio/portfolio_data";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>
          <div className="content grid">
            {Data.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
