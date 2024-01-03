"use client";
import React, { useRef } from "react";
import "./style.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TheySaySlider = () => {
  const sliderRef = useRef(null);

  const reviewsData = [
    {
      id: 1,
      text: "Сотрудничество с вашей компанией было превосходным опытом. Ваш профессионализм, креативный подход и способность слушать клиента действительно выделяют вас среди других. Результат - удивительное веб-приложение, которое превзошло все наши ожидания. Благодарим за отличную работу!",
      imageSrc: "/reviews/reviews-img1.svg",
      name: "Екатерина Андреевна",
      text2: "Руководитель проектов",
    },
    {
      id: 2,
      text: "Ваша команда вдохновляет и впечатляет. Благодаря вам, наше веб-приложение стало реальностью, превзошло наши ожидания и поддерживается на высшем уровне. Спасибо за отличную работу!",
      imageSrc: "/reviews/reviews-img2.svg",
      name: "Андрей Иванович",
      text2: "Руководитель проектов",
    },
    {
      id: 3,
      text: "Профессионализм и инновации вашей команды сделали наше веб-приложение настоящим хитом. Спасибо за творческий подход и выдающийся результат!",
      imageSrc: "/reviews/reviews-img3.svg",
      name: "Максим Андреевич",
      text2: "Руководитель проектов",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
  };
  return (
    <div className="they-say-container">
      <Slider ref={sliderRef} {...sliderSettings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="they-say-card">
            <h3>{review.text}</h3>
            <div className="they-say-card-box">
              <Image
                src={review.imageSrc}
                width={60}
                height={60}
                alt="group3"
                className="they-say-card-box-img"
              />
              <div className="they-say-box-text">
                <p className="they-say-name">{review.name}</p>
                <p className="they-say-text">{review.text2}</p>
              </div>
              <button
                className="custom-prev-btn-they-say"
                onClick={() => {
                  if (sliderRef && sliderRef.current) {
                    sliderRef.current.slickPrev();
                  }
                }}
              >
                <Image
                  src="/home/ep_arrow-up.svg"
                  width={20}
                  height={20}
                  alt="ep_arrow-up"
                  className="custom-btn-svg"
                />
              </button>
              <button
                className="custom-next-btn-they-say"
                onClick={() => {
                  if (sliderRef && sliderRef.current) {
                    sliderRef.current.slickNext();
                  }
                }}
              >
                <Image
                  src="/home/ep_arrow-up2.svg"
                  width={20}
                  height={20}
                  alt="ep_arrow-up"
                  className="custom-btn-svg"
                />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TheySaySlider;
