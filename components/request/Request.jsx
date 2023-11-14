import React from "react";
import "./style.css";
import Link from "next/link";

export const Request = () => {
  return (
    <>
      <div className="request-container">
        <h2 className="request-title">
          Расскажите <br /> о вашем проекте{" "}
        </h2>
        <Link className="home-btn" href="/contacts">
          Заполнить заявку
        </Link>
      </div>
    </>
  );
};
