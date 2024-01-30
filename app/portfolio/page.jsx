import React from "react";
import "./style.css";
import Card from "../../components/card/Card";
import { Request } from "../../components/request/Request";

const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Проекты</h2>
        <div className="portfolio-card">
          <Card />
        </div>
        <div className="portfolio-request">
          <Request />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
