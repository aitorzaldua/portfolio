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
            I have really enjoyed my career up to this point, always with a
            customer first mentality and building solid and, above all, safe
            projects. My experience covers two main blocks: <br />
            12 years of experience as a business continuity and disaster
            recovery engineer, auditing every day the security of their IT
            services and performing annual resilience audits for each client.
            <br />8 years of experience in software development and management
            for IT companies. <br />
            During these stages I have had clients such as JPMorgan, Credit
            Agricole, BBVA, Altura Markets, Inversis, Telefonica/Movistar,
            Vodafone, Adecco among others. <br />
            Passionate about forward-looking challenges, I am currently working
            as a web3 developer, a new technology that fits perfectly with my
            usual priorities: Security, Resilience and Customer Oriented.
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
