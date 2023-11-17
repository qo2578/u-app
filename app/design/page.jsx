import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import Card from "./../../components/card/Card";
import Reviews from "../../components/reviews/Reviews";
import { Request } from "../../components/request/Request";

const DesignPage = () => {
  return (
    <div className="design">
      <h2 className="design-title">Дизайн</h2>
      <section className="design-box">
        <div className="container">
          <div className="design-box-card">
            <h3>01</h3>
            <h4 className="design-box-title">Аналитика</h4>
            <p>
              Выявляем цели и критерии успеха продукта. Собираем данные,
              проводим глубинные интервью, анализируем полученную информацию и
              формулируем выводы о продукте, пользователях и их поведении.
            </p>
          </div>
          <div className="design-box-line"></div>
          <div className="design-box-card">
            <h3>02</h3>
            <h4 className="design-box-title">Проектирование</h4>
            <p>
              Генерируем идеи, создаем прототипы и тестируем их в UX‑лаборатории
              для определения наиболее эффективных решений.
            </p>
          </div>
          <div className="design-box-line"></div>
          <div className="design-box-card">
            <h3>03</h3>
            <h4 className="design-box-title">Дизайн</h4>
            <p>
              Создаем уникальную дизайн‑концепцию. Дарим эмоции и наполняем
              эстетикой уже проверенные решения.
            </p>
          </div>
          <div className="design-box-line"></div>
          <div className="design-box-card">
            <h3>04</h3>
            <h4 className="design-box-title">Создание дизайн-системы</h4>
            <p>
              Выстраиваем дизайн‑систему, благодаря которой обеспечивается
              единообразие интерфейса и минимальные затраты времени на
              разработку. Это помогает сократить время от начала разработки идеи
              до ее конечной реализации, облегчает поддержку и развитие продукта
              в долгосрочной перспективе.
            </p>
          </div>
          <div className="design-box-line"></div>
          <div className="design-box-card">
            <h3>05</h3>
            <h4 className="design-box-title">Тестирование</h4>
            <p>
              Проверяем принятые решения на пользователях, выявляем и устраняем
              недочеты до момента разработки.
            </p>
          </div>
          <div className="design-box-line"></div>
          <div className="design-box-card">
            <h3>06</h3>
            <h4 className="design-box-title">Поддержка проекта</h4>
            <p>
              Чтобы поддерживать свое превосходство перед конкурентами, продукт
              должен постоянно развиваться. С этой целью мы его планомерно
              улучшаем: совершенствуем и расширяем уже существующие функции.
            </p>
          </div>
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
            <h2 className="experience-text">Наши проекты </h2>
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
