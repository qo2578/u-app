import React from "react";
import "./style.css";
import Card from "../../components/card/Card";
import { Request } from "../../components/request/Request";

const page = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">Проекты</h2>
      <div className="portfolio-card">
        <Card />
      </div>
      <div className="portfolio-request">
        <Request />
      </div>
    </div>
  );
};

export default page;
