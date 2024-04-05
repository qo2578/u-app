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
    "/card/card4.jpg",
    "/card/arrow-up-light.svg",
    // Добавьте пути к другим изображениям
  ];
  const cardsData = [
    {
      id: 1,
      imageSrc: "/card/card1.png",
      title: "JANAT",
      description: "Корпоротивный сайт для 4-х отелей",
      link: "https://jannat.kg/",
    },
    {
      id: 2,
      imageSrc: "/card/card2.png",
      title: "Абдыш-Ата",
      description: "Корпоротивный сайт",
      link: "http://www.abdysh-ata.kg/ru/entry",
    },
    {
      id: 3,
      imageSrc: "/card/card3.png",
      title: "Assorti Project",
      description: "Мобильное приложение(Android/IOS) Интернет магазин(веб-сайт) CRM система",
      link: "#",
    },
    {
      id: 4,
      imageSrc: "/card/card4.jpg",
      title: "Онлайн курс",
      description: "Образовательный портал для государственного сектора",
      link: "#",
    },
    {
      id: 5,
      imageSrc: "/card/card5.jpg",
      title: "POSHIV.KG",
      description: "Интернет магазин для швейной компании",
      link: "#",
    },
    {
      id: 6,
      imageSrc: "/card/card6.jpg",
      title: "Asia Motors",
      description: "Корпоротивны сайт",
      link: "http://www.asiamotors.kg/ru/",
    },
    // Добавьте другие данные
  ];

  return (
    <div className="cards-container">
      <PreloadImages imagePaths={imagePaths} />
      {cardsData.map((card) => (
        <Link key={card.id} href={card.link} as={card.link} target="_blank">
          <div className="card">
            <div className="card-img-box">
              <Image
                src={card.imageSrc}
                width={525}
                height={425}
                loading="lazy"
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
                  loading="lazy"
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
