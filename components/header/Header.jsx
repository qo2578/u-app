"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "./style.css";
import PreloadImages from "../PreloadImages";

const Header = () => {
  const imagePaths = [
    "/Logo.svg",
    "/header/nav-icon-open.svg",
    "/header/nav-icon-close.svg",
    // Добавьте пути к другим изображениям
  ];
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    console.log("Toggle burger menu");
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    console.log("Close burger menu");
    setBurgerMenuOpen(false);
  };

  return (
    <header className={`header ${burgerMenuOpen ? "burger-menu-open" : ""}`}>
      <PreloadImages imagePaths={imagePaths} />
      <Link href="/" as="/">
        <Image
          src="/Logo.svg"
          width={68.457}
          height={52}
          loading="lazy"
          alt="logo"
          className="header-logo"
        ></Image>
      </Link>
      {/* Навигация для больших экранов */}
      <div className="nav">
        <Link
          href="/"
          as=""
          className={activeLink === "/" ? "active" : ""}
          onClick={() => handleLinkClick("/")}
        >
          Главная
        </Link>
        <Link
          href="/service"
          as="service"
          className={activeLink === "/service" ? "active" : ""}
          onClick={() => handleLinkClick("/service")}
        >
          Услуги
        </Link>
        <Link
          href="/portfolio"
          as="portfolio"
          className={activeLink === "/portfolio" ? "active" : ""}
          onClick={() => handleLinkClick("/portfolio")}
        >
          Портфолио
        </Link>
        <Link
          href="/about-us"
          as="about-us"
          className={activeLink === "/about-us" ? "active" : ""}
          onClick={() => handleLinkClick("/about-us")}
        >
          О нас
        </Link>
        <Link
          href="/contacts"
          as="contacts"
          className={activeLink === "/contacts" ? "active" : ""}
          onClick={() => handleLinkClick("/contacts")}
        >
          Контакты
        </Link>
      </div>
      <Link href="/contacts" className="header-btn">
        Связаться с нами
      </Link>
      <div
        className={`burger-menu-btn ${burgerMenuOpen ? "open" : ""}`}
        onClick={toggleBurgerMenu}
      >
        <Image
          src="/header/nav-icon-open.svg"
          width={32}
          height={32}
          loading="lazy"
          alt="nav-icon-open"
          className="burger-menu-icon"
        ></Image>
      </div>
      <div
        className={`burger-menu ${burgerMenuOpen ? "visible" : ""} ${
          burgerMenuOpen ? "burger-menu-opening" : "burger-menu-closing"
        }`}
      >
        <div className="burger-menu-b">
          <Image
            src="/header/nav-icon-close.svg"
            width={32}
            height={32}
            loading="lazy"
            alt="nav-icon-close"
            className="burger-menu-btn"
            onClick={closeBurgerMenu}
          ></Image>

          <div className="burger-menu-box">
            <Link
              href="/"
              as=""
              onClick={(event) => {
                closeBurgerMenu();
                handleLinkClick("/");
              }}
              className={activeLink === "/" ? "active" : ""}
            >
              Главная
            </Link>
            <Link
              href="/service"
              as="service"
              onClick={(event) => {
                closeBurgerMenu();
                handleLinkClick("/service");
              }}
              className={activeLink === "/service" ? "active" : ""}
            >
              Услуги
            </Link>
            <Link
              href="/portfolio"
              as="portfolio"
              onClick={(event) => {
                closeBurgerMenu();
                handleLinkClick("/portfolio");
              }}
              className={activeLink === "/portfolio" ? "active" : ""}
            >
              Портфолио
            </Link>
            <Link
              href="/about-us"
              as="about-us"
              onClick={(event) => {
                closeBurgerMenu();
                handleLinkClick("/about-us");
              }}
              className={activeLink === "/about-us" ? "active" : ""}
            >
              О нас
            </Link>
            <Link
              href="/contacts"
              onClick={(event) => {
                closeBurgerMenu();
                handleLinkClick("/contacts");
              }}
              className={activeLink === "/contacts" ? "active" : ""}
            >
              Контакты
            </Link>
          </div>
          <div className="burger-menu-block">
            <Link
              href="/contacts"
              className="header-btn"
              onClick={closeBurgerMenu}
            >
              Заполнить заявку
            </Link>
            <div className="burger-menu-text-">
              <p> u.skillz.edu@gmail.com</p>
              +996 554 201 506
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
