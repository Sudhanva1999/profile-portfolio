import React, { useState, useRef } from "react";
import { Link, Element } from "react-scroll";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const closeMenu = (id = "home") => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: "smooth",
    });
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      setIcon("nav__toggler toggle");
    } else {
      closeMenu();
    }
  };

  return (
    <nav className="nav">
      <a className="nav__brand">{"{ Sudhanva Paturkar }"}</a>
      <ul className={active}>
        <li className="nav__item">
          <Link
            to="home"
            className="nav__link"
            onClick={() => closeMenu("home")}
          >
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="about"
            className="nav__link"
            onClick={() => closeMenu("about")}
          >
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="projects"
            className="nav__link"
            onClick={() => closeMenu("projects")}
          >
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="skills"
            className="nav__link"
            onClick={() => closeMenu("skills")}
          >
            Skills
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="hobbies"
            className="nav__link"
            onClick={() => closeMenu("hobbies")}
          >
            Hobbies
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="contact"
            className="nav__link"
            onClick={() => closeMenu("contact")}
          >
            Contact
          </Link>
        </li>
        <li  className="nav__item">
        <a
            href="https://blog.sudhanvapaturkar.com"
            className="nav__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
