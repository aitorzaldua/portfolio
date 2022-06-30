import React from "react";
import "./about.css";
import code from "../../assets/code6.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="top__adjust" />
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={code} alt="This is me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>24+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed </small>
            </article>
          </div>

          <p>
            Passionate about forward-looking challenges, I have built my career
            by participating in those initiatives that defined technology in
            each generation. Digital transformation, the real one, is about
            migrating companies to the blockchain ecosystems that are starting
            to develop. I am here to help lead the way, to guide those companies
            into this new land of unlimited opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let´s talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
