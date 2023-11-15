"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { Request } from "./../../components/request/Request";

const page = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="service">
      <h3 className="service-title">
        Предоставляем весь перечень услуг, <br /> необходимых для достижения{" "}
        <br /> максимальной конверсии
      </h3>
      <div className="service-box">
        <div className="service-box-card">
          <h4 className="service-box-title">Дизайн</h4>
          <p>
            Создаем визуально привлекательные и функциональные веб-дизайны,
            направленные на достижение максимальной пользовательской
            удовлетворенности.
          </p>
          <Link
            href="/design"
            className="service-link"
            onClick={() => handleLinkClick("design")}
          >
            <div className="service-svg-box">
              <Image
                src="/card/arrow-up-light.svg"
                width={30}
                height={30}
                alt="arrow-up-light"
                className="service-svg"
              />
            </div>
          </Link>
        </div>
        <div className="service-box-line"></div>
        <div className="service-box-card">
          <h4 className="service-box-title">Разработка</h4>
          <p>
            Разработка Превращаем идеи в функциональные и уникальные веб-сайты,
            помогая вам взаимодействовать с вашей аудиторией в цифровой среде.
          </p>
          <Link
            href="/development"
            className="service-link"
            onClick={() => handleLinkClick("development")}
          >
            <div className="service-svg-box">
              <Image
                src="/card/arrow-up-light.svg"
                width={30}
                height={30}
                alt="arrow-up-light"
                className="service-svg"
              />
            </div>
          </Link>
        </div>
        <div className="service-box-line"></div>
        <div className="service-box-card">
          <h4 className="service-box-title">Поддержка</h4>
          <p>
            Следим за актуальностью, безопасностью и эффективностью вашего
            веб-сайта, обеспечивая его бесперебойную работу.
          </p>
          <Link
            href="/support"
            className="service-link"
            onClick={() => handleLinkClick("support")}
          >
            <div className="service-svg-box">
              <Image
                src="/card/arrow-up-light.svg"
                width={30}
                height={30}
                alt="arrow-up-light"
                className="service-svg"
              />
            </div>
          </Link>
        </div>
        <div className="service-box-line"></div>
        <div className="service-box-card">
          <h4 className="service-box-title">SEO - оптимизация</h4>
          <p>
            Улучшаем видимость вашего веб-сайта в поисковых система, способствуя
            увеличению онлайн-трафика и росту вашего бизнеса.
          </p>
          <Link
            href="/seo"
            className="service-link"
            onClick={() => handleLinkClick("seo")}
          >
            <div className="service-svg-box">
              <Image
                src="/card/arrow-up-light.svg"
                width={30}
                height={30}
                alt="arrow-up-light"
                className="service-svg"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="service-request">
        {" "}
        <Request />
      </div>
    </div>
  );
};

export default page;
