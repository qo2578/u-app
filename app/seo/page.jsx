import React from "react";
import "../design/style.css";
import Image from "next/image";
import Link from "next/link";
import Card from "./../../components/card/Card";
import Reviews from "../../components/reviews/Reviews";
import { Request } from "../../components/request/Request";

const SeoPage = () => {
  const DesignSteps = [
    {
      number: "01",
      title: "Анализ",
      description:
        "Проводим A/B тестирования объявлений для выявления лучших креативов и аудиторий с целью их масштабирования.",
      description2:
        "Идентификация ключевых слов, по которым сайт должен быть оптимизирован.",
      description3: "Оценка конкуренции по выбранным ключевым словам.",
      description4:
        "Проверка актуальности и соответствия ключевых фраз тематике сайта.",
    },
    {
      number: "02",
      title: "Технический аудит сайта",
      description:
        "Проверка наличия и правильной настройки файла robots.txt и sitemap.xml.",
      description2: "Анализ структуры URL и канонических тегов.",
      description3:
        "Проверка наличия и правильной настройки мета-тегов (title, description, etc.).",
      description4: "Оценка скорости загрузки страниц сайта.",
    },
    {
      number: "03",
      title: "Анализ контента",
      description: "Проверка уникальности контента.",
      description2: "Оценка качества и релевантности текстов на страницах.",
      description3:
        "Анализ использования заголовков (H1, H2, H3) и ключевых фраз в тексте.",
    },
    {
      number: "04",
      title: "Анализ ссылочного профиля",
      description: "Оценка количества и качества внешних ссылок.      ",
      description2: "Проверка наличия битых или низкокачественных ссылок.",
      description3: "Анализ анкор-текстов внешних ссылок.",
    },
    {
      number: "05",
      title: "Мониторинг показателей посещаемости",
      description:
        "Анализ трафика по различным источникам (поисковые системы, прямой трафик, социальные сети).",
      description2:
        "Измерение показателей вовлеченности (время на сайте, отказы, страницы/посещение).",
    },
    {
      number: "06",
      title: "Анализ поведенческих факторов",
      description:
        "Изучение пользовательского опыта на сайте (взаимодействие с элементами, удобство навигации).",
      description2: "Анализ высоко посещаемых страниц и выходных страниц.",
    },
    {
      number: "07",
      title: "Социальные сигналы",
      description: "Проверка наличия и активности в социальных сетях.",
      description2:
        "Анализ обратных связей и комментариев в социальных сетях.",
    },
    {
      number: "08",
      title: "Мобильная оптимизация",
      description: "Проверка адаптивности сайта под мобильные устройства.",
      description2:
        "Оценка скорости загрузки на мобильных устройствах.",
    },
    {
      number: "09",
      title: "Конкурентный анализ",
      description: "Изучение стратегий и тактик конкурентов.",
      description2: "Анализ их ключевых слов и ссылочного профиля.",
    },
    {
      number: "10",
      title: "Формирование рекомендаций",
      description:
        "Разработка плана по оптимизации сайта на основе выявленных проблем.",
      description2: "Предложение стратегий по улучшению видимости в поисковых системах.",
    },
  ];
  return (
    <div className="design">
      <h2 className="design-title">SEO продвижение</h2>
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

export default SeoPage;
