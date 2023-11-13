import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" as="document">
        <Image
          src="/Logo.svg"
          width={68.457}
          height={52}
          alt="logo"
          className="header-logo"
        ></Image>
      </Link>

      <div className="nav">
        <Link href="/" as="">Главная</Link>
        <Link href="/service" as="service">Услуги</Link>
        <Link href="/portfolio" as="portfolio">Портфолио</Link>
        <Link href="/about-us" as="about-us">О нас</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <Link href="/contacts"    className="header-btn">Связаться с нами</Link>
    </header>
  );
};

export default Header;
