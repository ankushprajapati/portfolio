import React from "react";
import "./works.css";
import image from "../../assets/image.png";
import image1 from "../../assets/image (1).png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Work Portfolio</h2>
      <span className="workDesc">
        This are the project live on server below i mentioned project screen
        short after clicking on image you can view website......
      </span>
      <div className="worksImgs">
        <img src={image} alt="" className="worksImg" />
        <img src={image1} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
