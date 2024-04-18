import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contacts.png";

const Navbar = () => {
  const scrollToSection = (contactPage) => {
    const section = document.getElementById(contactPage);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smoth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smoth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          Experience
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smoth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          Portfolio
        </Link>

        <Link
          activeClass="active"
          to="client"
          spy={true}
          smoth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          Skills
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => scrollToSection("contactPage")}
      >
        <img src={contactImg} alt="contact" className="deskopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
