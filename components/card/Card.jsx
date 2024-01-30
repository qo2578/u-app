import React from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import PreloadImages from "../PreloadImages";

const Card = () => {
  const imagePaths = [
    "/card/card1.svg",
    "/card/card2.svg",
    "/card/card3.svg",
    "/card/card4.svg",
    "/card/arrow-up-light.svg",
    // Добавьте пути к другим изображениям
  ];
  const cardsData = [
    {
      id: 1,
      imageSrc: "/card/card1.svg",
      title: "Альфа Банк",
      description: "Инструмент для управления финансами",
      link: "/link1",
    },
    {
      id: 2,
      imageSrc: "/card/card2.svg",
      title: "Евраз",
      description: "Приложение для планирования задач",
      link: "/link2",
    },
    {
      id: 3,
      imageSrc: "/card/card3.svg",
      title: "Texta",
      description: "Мобильное приложение, генерирующее контент для блогов",
      link: "/link2",
    },
    {
      id: 4,
      imageSrc: "/card/card4.svg",
      title: "Генпрокуратура РФ",
      description: "Веб-сайт для анализа статистики правоохранительных органов",
      link: "/link2",
    },
    // Добавьте другие данные
  ];

  return (
    <div className="cards-container">
      <PreloadImages imagePaths={imagePaths} />
      {cardsData.map((card) => (
        <Link key={card.id} href={card.link} as={card.link}>
          <div className="card">
            <div className="card-img-box">
              <Image
                src={card.imageSrc}
                width={525}
                height={425}
                alt={card.title}
                className="card-img"
              />
            </div>
            <h4>{card.title}</h4>
            <div className="card-box">
              <p>{card.description}</p>
              <div className="card-svg-box">
                <Image
                  src="/card/arrow-up-light.svg"
                  width={30}
                  height={30}
                  alt="arrow-up-light"
                  className="card-svg"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
