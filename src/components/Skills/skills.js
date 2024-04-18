import React from "react";
import "./skills.css";
import designer from "../../assets/designer.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. i have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript.
      </span>
      <div className="skillBars">
        <img src={designer} alt="coding" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Front- End Developer (More than 1 Year's)</h2>
          <sup>Now also looking for the oppurtunity in React Js position</sup>
          <p>
            Designing website using HTML5, CSS3 & Bootstrap..., Also good
            knwoledge in wordpress Installation, Domain & Sub-Domain setup,
            Backup process, Version changes.
          </p>
          <p>
            And recently i made on software panel for internal purpose it will
            show lead information of company those who attending the event and
            seminar.
          </p>
          <p>
            My React Js project link mentioned below.
            <ul>
              <li>https://moviesbuster.netlify.app/</li>
              <li>https://foodiepg.netlify.app/</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="skillBars">
        <img src={designer} alt="coding" className="skillBarImg" />
        <div className="skillBarText">
          <h2>System Engineer (1 Year Completed)</h2>
          <p>
            Monitor ticketing portal, Virtually handle user desktop, Error
            resolving, Software Installation, Hardware testing.
          </p>
          <p>Globally testing team meet also attend.</p>
        </div>
      </div>

      <div className="skillBars">
        <img src={designer} alt="coding" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Digital Marketing (Less than year)</h2>
          <p>
            Learn off page seo activites like example for Bookmarking, Listing,
            Youtube Handling, Social Media Handling, Blog Posting, Redirect Err
            page's, meta, keyword and many more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
