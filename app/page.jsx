import React from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Card from "./../components/card/Card";
import Reviews from "../components/reviews/Reviews";
import { Request } from "../components/request/Request";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home">
        <div className="container">
          <h1 className="home-title">
            Создайте <span>будущее</span> <br /> вашего бизнеса вместе <br />{" "}
            <span>с нами</span>
          </h1>
          <h2 className="home-text">
            Сочетая передовые технологии с креативным подходом мы <br />{" "}
            превращаем Ваши идеи в уникальные и успешные веб-приложения.
          </h2>
          <div className="home-box">
            <Link href="/portfolio" className="home-btn" as="portfolio">
              Посмотреть работы
            </Link>
            <div className="home-box-right">
              <Image
                src="/home/group3.svg"
                width={99}
                height={50}
                alt="group3"
              />
              <p>
                50+ <br />
                Довольных клиентов
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="company">
        <div className="container">
          <h3 className="company-title">Нам доверяют 10+ компаний</h3>
          <div className="company-box">
            <Image
              src="/home/company1.svg"
              width={203}
              height={64}
              alt="company"
            />
            <Image
              src="/home/company2.svg"
              width={203}
              height={64}
              alt="company"
            />
            <Image
              src="/home/company3.svg"
              width={203}
              height={64}
              alt="company"
            />
            <Image
              src="/home/company4.svg"
              width={203}
              height={64}
              alt="company"
            />
            <Image
              src="/home/company5.svg"
              width={203}
              height={64}
              alt="company"
            />
          </div>
        </div>
      </section>
      <section className="team">
        <div className="container">
          <div className="team-box-left">
            <h2>
              Оригинальность и <br /> качество для нас всегда <br /> на первом
              месте
            </h2>
            <Image src="/home/team.svg" width={452} height={326} alt="team" />
          </div>
          <div className="team-box-right">
            <h3>
              U! - компания с богатым 7 летним опытом, вдохновившая <br /> и
              поддержавшая более 50 проектов. Мы предлагаем Вам <br />{" "}
              разнообразные услуги, способствующие развитию <br /> вашего
              бизнеса.
            </h3>
            <Link href="/about-us" className="team-btn" as="about-us">
              Посмотреть работы
            </Link>
            <div className="team-box-row">
              <div className="row">
                <div class="col-6">
                  <p className="row-number">7 лет</p>
                  <p className="row-text">Опыта на рынке</p>
                </div>
                <div class="col-6">
                  <p className="row-number">50+</p>
                  <p className="row-text">Успешных проектов</p>
                </div>
              </div>
              <div className="row">
                <div class="col-6">
                  <p className="row-number">10</p>
                  <p className="row-text">Опытных специалистов</p>
                </div>
                <div class="col-6">
                  <p className="row-number">50+</p>
                  <p className="row-text">Счастливых клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-service">
        <div className="container">
          <h2>Наши услуги</h2>
          <h3>
            Мы предлагаем Вам широкий спектр профессиональных услуг, которые
            помогут <br /> воплотить ваши идеи в реальность и достичь новых
            высот.
          </h3>
          <div className="row">
            <div className="col-4">
              <div className="img-box">
                <Image
                  src="/home/our-service1.svg"
                  width={30}
                  height={30}
                  alt="our-service"
                  className="our-service-img"
                />
              </div>

              <p className="our-service-title">Дизайн</p>
              <p className="our-service-text">
                Создаем современные и <br /> функциональные веб-дизайны
              </p>
            </div>
            <div className="col-4">
              <div className="img-box">
                <Image
                  src="/home/our-service2.svg"
                  width={27}
                  height={27}
                  alt="our-service"
                  className="our-service-img"
                />
              </div>
              <p className="our-service-title">Разработка</p>
              <p className="our-service-text">
                Превращаем идеи в уникальные и <br /> функциональные веб-сайты
              </p>
            </div>
            <div className="col-4">
              <div className="img-box">
                <Image
                  src="/home/our-service3.svg"
                  width={27}
                  height={27}
                  alt="our-service"
                  className="our-service-img"
                />
              </div>

              <p className="our-service-title">Поддержка</p>
              <p className="our-service-text">
                Дизайн-поддержка и развитие <br /> проектов после запуска
              </p>
            </div>
          </div>
          <Link href="/service" className="our-service-btn" as="service">
            Все услуги
          </Link>
        </div>
      </section>
      <section className="our-projects">
        <div className="container">
          <div className="our-projects-box">
            <div className="our-projects-text">
              <h2>Наши проекты </h2>
              <h3>
                Ознакомьтесь с некоторыми из наших работ, в которых <br /> мы
                добились отличных результатов.
              </h3>
            </div>
            <Link href="/portfolio" className="our-projects-btn" as="portfolio">
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
      <section className="reviews">
        <div className="container">
          <div className="reviews-box">
            <h3 className="reviews-title">Отзывы клиентов</h3>
            <p className="reviews-text">
              Узнайте, что говорят о нас наши клиенты
            </p>
          </div>
          <Reviews />
        </div>
      </section>
      <section className="request">
        <Request />
      </section>
    </div>
  );
};

export default HomePage;
