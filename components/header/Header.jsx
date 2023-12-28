"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "./style.css";

const Header = () => {
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
      {" "}
      <Link href="/" as="/">
        <Image
          src="/Logo.svg"
          width={68.457}
          height={52}
          alt="logo"
          className="header-logo"
        ></Image>
      </Link>
      {/* Навигация для больших экранов */}
      <div className="nav">
        <Link href="/" as="">
          Главная
        </Link>
        <Link href="/service" as="service">
          Услуги
        </Link>
        <Link href="/portfolio" as="portfolio">
          Портфолио
        </Link>
        <Link href="/about-us" as="about-us">
          О нас
        </Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <div className="burger-menu-btn" onClick={toggleBurgerMenu}>
        <Image
          src="/header/nav-icon-open.svg"
          width={32}
          height={32}
          alt="nav-icon-open"
          className="burger-menu-icon"
        ></Image>
      </div>
      <div
        className={`burger-menu ${burgerMenuOpen ? "visible" : "hidden"} ${
          burgerMenuOpen ? "burger-menu-closing" : ""
        }`}
      >
       <div   className={`burger-menu-b ${burgerMenuOpen ? "burger-menu-closing" : ""}`}>
       <Image
          src="/header/nav-icon-close.svg"
          width={32}
          height={32}
          alt="nav-icon-close"
          className="burger-menu-btn"
          onClick={closeBurgerMenu}
        ></Image>

        <div className="burger-menu-box">
          <Link href="/" as="" onClick={closeBurgerMenu}>
            Главная
          </Link>
          <Link href="/service" as="service" onClick={closeBurgerMenu}>
            Услуги
          </Link>
          <Link href="/portfolio" as="portfolio" onClick={closeBurgerMenu}>
            Портфолио
          </Link>
          <Link href="/about-us" as="about-us" onClick={closeBurgerMenu}>
            О нас
          </Link>
          <Link href="/contacts" onClick={closeBurgerMenu}>
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
