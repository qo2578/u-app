"use client";
import React, { useCallback, useRef } from "react";
import "./style.css";
import "../service/style.css";
import Image from "next/image";
import Link from "next/link";
import TeamSlider from "../../components/teamSlider/TeamSlider";
import TheySaySlider from "../../components/theySaySlider/TheySaySlider";
import SimpleSlider from "../../components/simpleSlider/SimpleSlider";

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h3 className="about-box-title">
              <span>Создание веб-приложений</span> - наша страсть, ваш успех
            </h3>
            <div className="about-box-text">
              <p>
                Мы - команда дизайнеров и инженеров. Предоставляем инновационные
                и выдающиеся цифровые решения, способствующие росту и успеху
                наших клиентов.
              </p>
              <p>
                Наша цель - не просто разрабатывать веб-приложения, а создавать
                уникальные цифровые продукты, которые изменяют мир и делают его
                более доступным и эффективным для всех.
              </p>
            </div>
          </div>
          <Image
            src="/about-us/group.svg"
            width={373}
            height={326}
            alt="group"
            className="about-img"
          />
          <div className="about-box-text-min">
            <p>
              Мы - команда дизайнеров и инженеров. Предоставляем инновационные и
              выдающиеся цифровые решения, способствующие росту и успеху наших
              клиентов.
            </p>
            <p>
              Наша цель - не просто разрабатывать веб-приложения, а создавать
              уникальные цифровые продукты, которые изменяют мир и делают его
              более доступным и эффективным для всех.
            </p>
          </div>
        </div>
      </section>
      <section className="us">
        <div className="container">
          <div className="us-box">
            <div className="us-block">
              <h3 className="us-number">50+</h3>
              <p className="us-text">Успешных проектов</p>
            </div>
            <div className="us-block">
              <h3 className="us-number">7 лет</h3>
              <p className="us-text">Опыта на рынке</p>
            </div>
            <div className="us-block">
              <h3 className="us-number">10</h3>
              <p className="us-text">Опытных специалистов</p>
            </div>
            <div className="us-block">
              <h3 className="us-number">50+</h3>
              <p className="us-text">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>
      <section className="principles">
        <div className="container">
          <h3 className="principles-title">
            Принципы, которые делают нас лучшими
          </h3>
          <div className="principles-box">
            <div className="principles-card">
              <div className="box-text">
                <h3>01</h3>
                <h4 className="principles-box-title">Качество во всем</h4>
              </div>
              <p>
                Высочайшее качество в каждом аспекте нашей работы: начиная с
                дизайна и программирования, заканчивая тестированием и
                поддержкой.{" "}
              </p>
            </div>
            <div className="service-box-line"></div>
            <div className="principles-card">
              <div className="box-text">
                <h3>02</h3>
                <h4 className="dprinciples-box-title">Инновации и креативность</h4>
              </div>
              <p>
                Мы исследуем новые идеи и решения, чтобы убедиться, что каждое
                веб-приложение, созданное нами, уникально и актуально.{" "}
              </p>
            </div>
            <div className="service-box-line"></div>
            <div className="principles-card">
              <div className="box-text">
                <h3>03</h3>
                <h4 className="principles-box-title">Долгосрочное партнерство</h4>
              </div>
              <p>
                Мы слушаем потребности клиентов, консультируем их, и всегда
                готовы поддержать весь жизненный цикл их веб-приложений. Мы не
                просто исполнители, мы партнеры в достижении их целей.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-team">
        <div className="container">
          <h3>Для достижения ваших целей мы собрали команду профессионалов</h3>
          <TeamSlider key="team-slider" />
        </div>
      </section>
      <section className="offer">
        <div className="container">
          <h3 className="offer-title">Что мы предлагаем? </h3>
          <div className="offer-boxes">
            <div className="offer-box">
              <div className="offer-block">
                <Image
                  src="/about-us/svg-img1.svg"
                  width={100}
                  height={100}
                  alt="group"
                  className="offer-img"
                />
                <p>Исследование и аналитика</p>
              </div>
              <div className="offer-block">
                <Image
                  src="/about-us/svg-img2.svg"
                  width={100}
                  height={100}
                  alt="group"
                  className="offer-img"
                />
                <p>Проектирование и тестирование сайтов</p>
              </div>
              <div className="offer-block">
                <Image
                  src="/about-us/svg-img3.svg"
                  width={100}
                  height={100}
                  alt="group"
                  className="offer-img"
                />
                <p>Адаптивный дизайн под любые устройства</p>
              </div>
            </div>
            <div className="offer-box">
              <div className="offer-block">
                <Image
                  src="/about-us/svg-img4.svg"
                  width={100}
                  height={100}
                  alt="group"
                  className="offer-img"
                />
                <p>Дальнейшая разработка и надзор</p>
              </div>
              <div className="offer-block">
                <Image
                  src="/about-us/svg-img5.svg"
                  width={100}
                  height={100}
                  alt="group"
                  className="offer-img"
                />
                <p>Поддержка и развитие проектов после запуска</p>
              </div>
              <div className="offer-block">
                <Image
                  src="/about-us/svg-img6.svg"
                  width={100}
                  height={100}
                  alt="group"
                  className="offer-img"
                />
                <p>Обеспечение SEO - оптимизации</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story">
        <div className="container">
          <h3>Развитие в каждой главе: история нашей компании</h3>
          <div className="story-boxes">
            <div className="story-box">
              <div className="story-block">
                <div className="story-line"></div>
                <h4>2016 - Веб-студия U!</h4>
                <p>
                  2016 - год основания компании. Наш путь был испытан
                  трудностями, но результативен: мы сформировали бренд,
                  предоставляющий выдающиеся программные услуги
                </p>
              </div>
              <div className="story-block">
                <div className="story-line"></div>
                <h4>2017 - Путешествие началось</h4>
                <p>
                  К нам присоединились первые клиенты, которые положили начало
                  нашему пути. Многие из них остаются с нами и по сей день.
                </p>
              </div>
              <div className="story-block">
                <div className="story-line"></div>
                <h4>2018 - От микро до малого</h4>
                <p>
                  Наша команда U-SkillZ выросла до 7 талантливых веб-дизайнеров
                  и разработчиков, превратив нас из микрокомпании в небольшую
                  фирму..
                </p>
              </div>
            </div>
            <div className="story-box">
              <div className="story-block">
                <div className="story-line"></div>
                <h4>2019 - Взрывной и продуктивный</h4>
                <p>
                  Полны энергии и вдохновения! Новые веб-проекты и надежные
                  партнеры!
                </p>
              </div>
              <div className="story-block">
                <div className="story-line"></div>
                <h4>2020 - Пандемия и локдаун</h4>
                <p>
                  Были моменты, когда нам было действительно сложно, но именно
                  2020 год сделал нас еще сильнее и лучше!
                </p>
              </div>
              <div className="story-block">
                <div className="story-line"></div>
                <h4>2021 - Релокейт</h4>
                <p>
                  В середине этого года мs открыли новый офис и теперь мы можем
                  с уверенностью сказать, что успешно освоили новый рынок и
                  интегрировались в работу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="they-say-they-ask">
        <div className="container">
          <div className="they-say-they-ask-title">
            <h3>О нас говорят</h3>
            <h4>У нас спрашивают</h4>
          </div>
          <div className="simple-box-slider">
            <div className="say-ask-box">
              <h4>О нас говорят</h4>
              <TheySaySlider key="they-say-slider" />
            </div>
            <div className="they-ask-box">
              <h3>У нас спрашивают</h3>
              <SimpleSlider />
              <h2 className="they-ask-title">
                Будем рады ответить на любые ваши вопросы <br /> по телефону:
                +996 554 201 506
              </h2>
              <div className="they-ask-link">
                <Link className="home-btn" href="/contacts">
                  Заполнить заявку
                </Link>
                <p> Это займет не более 3 минут</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
