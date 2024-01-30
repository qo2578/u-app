import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-row">
            <div className="footer-col-4">
              <Link href="/" className="footer-link" as="">
                Главная
              </Link>
              <Link href="/service" className="footer-link" as="service">
                Услуги{" "}
              </Link>
              <Link href="/portfolio" className="footer-link" as="portfolio">
                Портфолио
              </Link>
              <Link href="/about-us" className="footer-link" as="about-us">
                О нас
              </Link>
              <Link href="/contacts" className="footer-link" as="contacts">
                Контакты
              </Link>
            </div>
            <div className="footer-col-4">
              <div className="footer-box-none">
                <p className="footer-title">Social</p>

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
                  Instagram
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
                  YouTube
                </a>
              </div>
            </div>
            <div className="footer-col-4">
              <p className="footer-title">Контакты</p>
              <a
                href="" //Нужно добавить корректную ссылку
                target="_blank"
                rel="noopener noreferrer"
                as="document"
                className="footer-contacts-link"
              >
                <Image
                  src="/footer/call.svg"
                  width={24}
                  height={24}
                  alt="call"
                ></Image>
                +996 554 201 506
              </a>
              <a
                href="" //Нужно добавить корректную ссылку
                target="_blank"
                rel="noopener noreferrer"
                as="document"
                className="footer-contacts-link"
              >
                <Image
                  src="/footer/telegram.svg"
                  width={24}
                  height={24}
                  alt="telegram"
                ></Image>
                Telegram
              </a>
              <a
                href="" //Нужно добавить корректную ссылку
                target="_blank"
                rel="noopener noreferrer"
                as="document"
                className="footer-contacts-link"
              >
                <Image
                  src="/footer/whatsapp.svg"
                  width={24}
                  height={24}
                  alt="whatsapp"
                ></Image>
                WhatsApp
              </a>
              <a
                href="" //Нужно добавить корректную ссылку
                target="_blank"
                rel="noopener noreferrer"
                as="document"
                className="footer-contacts-link"
              >
                <Image
                  src="/footer/email.svg"
                  width={24}
                  height={24}
                  alt="email"
                ></Image>
                u.skillz.edu@gmail.com
              </a>
            </div>
          </div>
          <div className="bottom-box">
            <Image
              src="/Logo.svg"
              width={68.457}
              height={52}
              alt="logo"
              className="header-logo"
            ></Image>
            <p className="bottom-box-text">
              © 2023 | ОсОО «U!SkillZ» | Все права защищены. Копирование
              материалов запрещено.
            </p>
            <p>Политика конфидециальности Договор оферты</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
