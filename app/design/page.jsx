import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import Card from "./../../components/card/Card";
import Reviews from "../../components/reviews/Reviews";
import { Request } from "../../components/request/Request";

const DesignPage = () => {
  const DesignSteps = [
    {
      number: "01",
      title: "Аналитика",
      description:
        "Выявляем цели и критерии успеха продукта. Собираем данные, проводим глубинные интервью, анализируем полученную информацию и формулируем выводы о продукте, пользователях и их поведении.",
    },
    {
      number: "02",
      title: "Проектирование",
      description:
        "Генерируем идеи, создаем прототипы и тестируем их в UX‑лаборатории для определения наиболее эффективных решений.",
    },
    {
      number: "03",
      title: "Дизайн",
      description:
        "Создаем уникальную дизайн‑концепцию. Дарим эмоции и наполняем эстетикой уже проверенные решения.",
    },
    {
      number: "04",
      title: "Создание дизайн - системы",
      description:
        "Выстраиваем дизайн‑систему, благодаря которой обеспечивается единообразие интерфейса и минимальные затраты времени на разработку. Это помогает сократить время от начала разработки идеи до ее конечной реализации, облегчает поддержку и развитие продукта в долгосрочной перспективе.",
    },
    {
      number: "05",
      title: "Тестирование",
      description:
        "Проверяем принятые решения на пользователях, выявляем и устраняем недочеты до момента разработки.",
    },
    {
      number: "06",
      title: "Поддержка проекта",
      description:
        "Чтобы поддерживать свое превосходство перед конкурентами, продукт должен постоянно развиваться. С этой целью мы его планомерно улучшаем: совершенствуем и расширяем уже существующие функции.",
    },
  ];
  return (
    <div className="design">
      <h2 className="design-title">Дизайн</h2>
      <section className="design-box">
        <div className="container">
          {DesignSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="design-box-card">
                <div className="box-text">
                  <h3>{step.number}</h3>
                  <h4 className="design-box-title">{step.title}</h4>
                </div>
                <p>{step.description}</p>
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

export default DesignPage;
