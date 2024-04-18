import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contacts.png";

const Navbar = () => {
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
          to="contact"
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
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntroView({ behavior: "smoth" });
        }}
      >
        <img src={contactImg} alt="contact" className="deskopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
