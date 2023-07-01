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
            My focus has always been on the protection and security of clients
            and their businesses. My experience covers the following areas:
            <br />
            ▻ 2020/Current: As a security researcher, I perform security
            analysis and smart contract auditing services, investigating
            potential vulnerabilities and overseeing the implementation of
            secure smart contract protocols.
            <br />
            ▻ 2008/2020: 12 years' experience as a Business Continuity and IT
            Security Engineer and Account Manager, reviewing the security of
            their IT services on a daily basis and performing annual resilience
            audits for each client.
            <br />
            ▻ 2000/2008: 8 years' experience in security and network management
            for IT companies, including Unix/Linux management, scripting and
            monitoring.
            <br />
            During this time I have had clients such as JPMorgan, Credit
            Agricole, BBVA, Inversis, Altura Markets, Telefonica/Movistar,
            Vodafone, Adecco and others.
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
