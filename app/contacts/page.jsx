"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_j1l876j";
const TEMPLATE_ID = "template_b99lwhv";
const USER_ID = "GYP9SQMP4sqoBc1mo";

emailjs.init(USER_ID);

const ContactsPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Отправить");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sideRef, sideInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = () => {
    const { name, email, message } = formData;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log("Успешно отправлено :)", response);
        setIsButtonClicked(true);
        setButtonText("Отправлено");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Отловлена ошибка:", error);
      });
  };

  return (
    <div>
      <section className="contacts">
        <div className="container">
          <div className="contacts-block">
            <div className="contacts-card">
              <h1 className="contacts-title">Заполните заявку</h1>
              <div className="contacts-text">
                Напишите немного о вашем проекте или задайте любые вопросы,
                которые у вас есть.
              </div>
              <form className="contacts-form" action="">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contacts-input"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="contacts-input"
                  required
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="contacts-input"
                  placeholder="О проекте"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className={`contacts-btn ${
                    isButtonClicked ? `contacts-clicked` : ""
                  }`}
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </button>
                <p className="contacts-min-text">
                  Нажимая “Отправить”, вы принимаете{" "}
                  <span> условия обработки персональных данных</span>
                </p>
              </form>
            </div>
            <div className="contacts-box">
              <div className="contacts-top">
                <h3>Контакты</h3>
                <div className="contacts-top-box">
                  <a
                    href="" //Нужно добавить корректную ссылку
                    target="_blank"
                    rel="noopener noreferrer"
                    as="document"
                    className="contacts-link"
                  >
                    <Image
                      src="/footer/email.svg"
                      width={24}
                      height={24}
                      alt="email"
                    ></Image>
                    u.skillz.edu@gmail.com
                  </a>
                  <a
                    href="" //Нужно добавить корректную ссылку
                    target="_blank"
                    rel="noopener noreferrer"
                    as="document"
                    className="contacts-link"
                  >
                    <Image
                      src="/footer/call.svg"
                      width={24}
                      height={24}
                      alt="call"
                    ></Image>
                    +996 554 201 506
                  </a>
                  <div className="contacts-top-group">
                    <a
                      href="" //Нужно добавить корректную ссылку
                      target="_blank"
                      rel="noopener noreferrer"
                      as="document"
                      className="contacts-link"
                    >
                      <Image
                        src="/footer/telegram.svg"
                        width={24}
                        height={24}
                        alt="telegram"
                      ></Image>
                    </a>
                    <a
                      href="https://www.instagram.com/" //Нужно добавить корректную ссылку
                      target="_blank"
                      rel="noopener noreferrer"
                      as="document"
                      className="social-link"
                    >
                      <Image
                        src="/footer/instagram.svg"
                        width={24}
                        height={24}
                        alt="instagram"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/" //Нужно добавить корректную ссылку
                      target="_blank"
                      rel="noopener noreferrer"
                      as="document"
                      className="social-link"
                    >
                      <Image
                        src="/footer/youtube.svg"
                        width={24}
                        height={24}
                        alt="youtube"
                      />
                    </a>
                    <a
                      href="" //Нужно добавить корректную ссылку
                      target="_blank"
                      rel="noopener noreferrer"
                      as="document"
                      className="contacts-link"
                    >
                      <Image
                        src="/footer/whatsapp.svg"
                        width={24}
                        height={24}
                        alt="whatsapp"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contacts-bottom">
                <h3>Адрес</h3>
                <div className="contacts-bottom-box">
                  <div className="contacts-link">
                    <Image
                      src="/footer/dom.svg"
                      width={24}
                      height={24}
                      alt="whatsapp"
                    ></Image>
                    ул. Безымянная 4/5
                  </div>
                  <div className="contacts-link">
                    <Image
                      src="/footer/dom.svg"
                      width={24}
                      height={24}
                      alt="whatsapp"
                    ></Image>
                    ул. Манаса 91/1
                  </div>
                  <div className="contacts-link">
                    <Image
                      src="/footer/clock.svg"
                      width={24}
                      height={24}
                      alt="whatsapp"
                    ></Image>
                    09:00 - 20:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
