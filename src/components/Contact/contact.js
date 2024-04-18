import React, { useRef } from "react";
import Gmail from "../../assets/new.png";
import Whatsapp from "../../assets/whatsapp.png";
import Insta from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_52iql0r", "template_g6iwrvg", form.current, {
        publicKey: "C0CuF0O50UTpf3ykH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Hire Me</h1>
      <span className="contactDesc"></span>
      <form className="contactForm" onSubmit={sendEmail} ref={form}>
        <input
          type="text"
          className="name"
          placeholder="your name"
          name="user_name"
        />
        <input
          type="text"
          className="email"
          placeholder="your email"
          name="user_email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="your message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="links">
        <img src={Gmail} alt="gmail" className="link" />
        <img src={Whatsapp} alt="whatsapp" className="link" />
        <img src={Insta} alt="insta" className="link" />
        <img src={Linkedin} alt="linkedin" className="link" />
      </div>
    </section>
  );
};

export default Contact;
