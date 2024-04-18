import React from "react";
import "./client.css";
import HTML5 from "../../assets/html-5.png";
import CSS3 from "../../assets/css-3.png";
import Bootstrap from "../../assets/bootstrap.png";
import Php from "../../assets/file.png";
import MySql from "../../assets/mysql.png";
import Wordpress from "../../assets/wordpress.png";
import Atom from "../../assets/atom.png";

const Client = () => {
  return (
    <section id="client">
      <div id="clients">
        <h1 className="contactPageTitle">My Skills</h1>
        <p className="clientDesc"></p>
        <div className="clientImags">
          <img src={HTML5} alt="" className="clientImg" />
          <img src={CSS3} alt="" className="clientImg" />
          <img src={Bootstrap} alt="" className="clientImg" />
          <img src={Php} alt="" className="clientImg" />
          <img src={MySql} alt="" className="clientImg" />
          <img src={Wordpress} alt="" className="clientImg" />
          <img src={Atom} alt="" className="clientImg" />
        </div>
      </div>
    </section>
  );
};

export default Client;
