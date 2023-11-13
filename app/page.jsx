import React from "react";
import "./globals.css";
import Link from "next/link";


const page = () => {
  return (
    <section className="home">
      <div className="container">
      <h1 className="home-title">
        Создайте <span>будущее</span> <br /> вашего бизнеса вместе <br />{" "}
        <span>с нами</span>
      </h1>
      <h2 className="home-text">
      Сочетая передовые технологии с креативным подходом мы <br /> превращаем Ваши идеи в уникальные и успешные веб-приложения.
      </h2>
     <div className="home-box">
     <Link href="/portfolio" className="home-btn" as="portfolio">Посмотреть работы</Link>
     </div>
      </div>
    </section>
  );
};

export default page;
