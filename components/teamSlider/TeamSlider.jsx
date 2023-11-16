"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./style.css";

const TeamSlider = () => {
  const slidesData = [
    {
      id: 1,
      imgSrc: "/about-us/img1.svg",
      title: "ФИО",
      subtitle: "Специальность",
    },
    {
      id: 2,
      imgSrc: "/about-us/img2.svg",
      title: "ФИО",
      subtitle: "Специальность",
    },
    {
      id: 3,
      imgSrc: "/about-us/img3.svg",
      title: "ФИО",
      subtitle: "Специальность",
    },
    {
      id: 4,
      imgSrc: "/about-us/img4.svg",
      title: "ФИО",
      subtitle: "Специальность",
    },
    {
      id: 5,
      imgSrc: "/about-us/img3.svg",
      title: "ФИО",
      subtitle: "Специальность",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,

  };
  

  return (
    <div className="slider">
    <Slider {...sliderSettings}>
      {slidesData.map((slide) => (
        <div className="slide" key={slide.id}>
          <Image
            src={slide.imgSrc}
            alt={slide.title}
            width={200}
            height={200}
          />{" "}
          <h4 className="slide-title">{slide.title}</h4>
          <p className="slide-subtitle">{slide.subtitle}</p>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default TeamSlider;
