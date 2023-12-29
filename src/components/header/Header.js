import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
      <Link to="/" className="nav__brand">
        { "{ Sudhanva Paturkar }"}
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/profile-portfolio" className="nav__link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile-portfolio/about" className="nav__link" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile-portfolio/projects" className="nav__link" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile-portfolio/skills" className="nav__link" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile-portfolio/hobby" className="nav__link" onClick={closeMenu}>
            Hobbies
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile-portfolio/contact" className="nav__link" onClick={closeMenu}>
            Contact
          </Link>
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
