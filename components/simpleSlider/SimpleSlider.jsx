import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const SimpleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [activeDotTimer, setActiveDotTimer] = useState(null);
  const dotTimerDuration = 3000;

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      setActiveSlide(next);
      resetDotTimer();
    },
  };

  const resetDotTimer = useCallback(() => {
    if (activeDotTimer) {
      clearInterval(activeDotTimer);
    }

    const timer = setInterval(() => {
      setActiveDot((prevDot) => (prevDot === 2 ? 0 : prevDot + 1));
    }, dotTimerDuration);

    setActiveDotTimer(timer);
  }, [activeDotTimer, setActiveDot]);

  useEffect(() => {
    resetDotTimer();

    return () => {
      if (activeDotTimer) {
        clearInterval(activeDotTimer);
      }
    };
  }, [activeSlide, activeDotTimer, resetDotTimer]);

  return (
    <div className="slider-container-simple">
      <Slider {...settings}>
        <div className="slider-container-simple-text">
          <h2>Сколько стоят ваши услуги?</h2>
          <p>
            Мы предлагаем индивидуальное ценообразование, чтобы обеспечить
            лучшее соотношение цены и качества.
          </p>
        </div>
        <div className="slider-container-simple-text">
          <h2>С чего начать?</h2>
          <p>
            Начнем с беседы! Пожалуйста, свяжитесь с нами, и мы обсудим ваши
            идеи и цели, чтобы определить, как мы можем вам помочь.
          </p>
        </div>
        <div className="slider-container-simple-text">
          <h2>Делаем ли мы сайты под ключ?</h2>
          <p>
            Конечно, мы предоставляем полный спектр услуг - от идеи до готового
            веб-приложения, чтобы ваш проект был завершен и работал без сбоев.
          </p>
        </div>
      </Slider>
      <div className="dot-container-simple">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`dot-simple ${index === activeDot ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;
