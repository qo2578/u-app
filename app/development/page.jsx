import React from "react";
import "../design/style.css";
import Image from "next/image";
import Link from "next/link";
import Card from "./../../components/card/Card";
import Reviews from "../../components/reviews/Reviews";
import { Request } from "../../components/request/Request";

const DevelopmentPage = () => {
  const DesignSteps = [
    {
      number: "01",
      title: "Идея и концепция",
      description: "Определение целевой аудитории и её потребностей.",
      description2: "Формулировка уникального предложения продукта (USP).",
      description3: "Создание общей концепции продукта.",
    },
    {
      number: "02",
      title: "Планирование",
      description: "Разработка детального плана проекта.",
      description2:
        "Определение функциональных требований и основных характеристик продукта.",
      description3: "Распределение ресурсов и установление сроков.",
    },
    {
      number: "03",
      title: "Разработка",
      description: "Написание кода веб-приложения или веб-сайта.",
      description2:
        "Выбор технологий и инструментов разработки которые более эффективны для вашего бизнеса.",
      description3: "Тестирование и отладка.",
    },
    {
      number: "04",
      title: "Тестирование",
      description: "Проведение функционального тестирования.",
      description2: "Исправление ошибок и улучшение производительности.",
      description3:
        "Тестирование совместимости с различными браузерами и устройствами.",
    },
    {
      number: "05",
      title: "Развёртывание",
      description: "Размещение веб-продукта на хостинге или сервере.",
      description2:
        "Настройка доменного имени и SSL-сертификата для обеспечения безопасности.",
    },
    {
      number: "06",
      title: "Поддержка и обновления",
      description: "Предоставление поддержки пользователям.",
      description2: "Внесение регулярных обновлений и улучшений продукта.",
      description3: "Мониторинг производительности и безопасности.f",
    },
  ];
  return (
    <div className="design">
      <h2 className="design-title">Разработка</h2>
      <section className="design-box">
        <div className="container">
          {DesignSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="design-box-card">
                <div className="box-text">
                  <h3>{step.number}</h3>
                  <h4 className="design-box-title">{step.title}</h4>
                </div>
                <div className="design-box-descrip">
                  <p>{step.description}</p>
                  <p>{step.description2}</p>
                  <p>{step.description3}</p>
                  <p>{step.description4}</p>
                </div>
              </div>
              {index < DesignSteps.length - 1 && (
                <div className="design-box-line"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="tools">
        <div className="container">
          <h3 className="tools-title">Инструменты и технологии</h3>
          <Image
            src="/design/adobephotoshop.svg"
            width={60}
            height={60}
            alt="adobephotoshop"
            className="tools-svg"
          />
          <Image
            src="/design/figma.svg"
            width={60}
            height={60}
            alt="figma"
            className="tools-svg"
          />
          <Image
            src="/design/sketch.svg"
            width={60}
            height={60}
            alt="sketch"
            className="tools-svg"
          />
        </div>
      </section>
      <section className="experience">
        <div className="container">
          <div className="experience-box">
            <h2 className="experience-text">Наш опыт</h2>
            <Link href="/portfolio" className="experience-btn" as="portfolio">
              Больше проектов
              <Image
                src="/home/arrow-up-light.svg"
                width={27}
                height={27}
                alt="arrow-up-light"
              />
            </Link>
          </div>
          <Card />
          <Link
            href="/portfolio"
            className="our-projects-btn-min"
            as="portfolio"
          >
            <p> Больше проектов</p>
            <Image
              src="/home/arrow-up-light.svg"
              width={27}
              height={27}
              alt="arrow-up-light"
            />
          </Link>
        </div>
      </section>
      <section className="design-reviews">
        <div className="container">
          <Reviews />
        </div>
      </section>
      <section className="design-request">
        <div className="container">
          <Request />
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;
