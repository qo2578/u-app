"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { Request } from "./../../components/request/Request";

const ServicePage = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="service">
      <div className="container">
        <h3 className="service-title">
          Предоставляем весь перечень услуг, необходимых для достижения
          максимальной конверсии
        </h3>
        <div className="service-box">
          <div className="service-box-card">
            <Link
              href="/design"
              className="service-link"
              onClick={() => handleLinkClick("design")}
            >
              <div className="box-text">
                <div className="box-text-span">
                  <h4 className="service-box-title">Дизайн</h4>
                </div>

                <p>
                  Создаем визуально привлекательные и функциональные
                  веб-дизайны, направленные на достижение максимальной
                  пользовательской удовлетворенности.
                </p>
                <div className="service-svg-box">
                  <Image
                    src="/card/arrow-up-light.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="arrow-up-light"
                    className="service-svg"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="service-box-line"></div>
          <div className="service-box-card">
            <Link
              href="/development"
              className="service-link"
              onClick={() => handleLinkClick("development")}
            >
              <div className="box-text">
                <div className="box-text-span">
                <h4 className="service-box-title">Разработка</h4>

                </div>
                <p>
                  Превращаем идеи в функциональные и уникальные веб-сайты,
                  помогая вам взаимодействовать с вашей аудиторией в цифровой
                  среде.
                </p>
                <div className="service-svg-box">
                  <Image
                    src="/card/arrow-up-light.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="arrow-up-light"
                    className="service-svg"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="service-box-line"></div>
          <div className="service-box-card">
            <Link
              href="/seo"
              className="service-link"
              onClick={() => handleLinkClick("seo")}
            >
              <div className="box-text">
                <div className="box-text-span">
                <h4 className="service-box-title">SEO - оптимизация</h4>

                </div>
                <p>
                  Улучшаем видимость вашего веб-сайта в поисковых система,
                  способствуя увеличению онлайн-трафика и росту вашего бизнеса.
                </p>
                <div className="service-svg-box">
                  <Image
                    src="/card/arrow-up-light.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="arrow-up-light"
                    className="service-svg"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="service-request">
          {" "}
          <Request />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
