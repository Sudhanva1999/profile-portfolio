import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const closeMenu = () => {
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
      <a className="nav__brand">
        {"{ Sudhanva Paturkar }"}
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a  className="nav__link" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a  className="nav__link" onClick={closeMenu}>
            About
          </a>
        </li>
        <li className="nav__item">
          <a  className="nav__link" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a  className="nav__link" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" onClick={closeMenu}>
            Hobbies
          </a>
        </li>
        <li className="nav__item">
          <a  className="nav__link" onClick={closeMenu}>
            Contact
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
