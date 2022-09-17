import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <div className="top__adjust" />
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <ul className="service__list">
            <h3>Smart Contracts Development</h3>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                High-level decisions about the prePO smart contract
                architecture.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Well-documented, performant, clean, and re-usable Solidity code.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Secure and Gas consumption optimized Smart Contracts.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Use of common Smart Contract Security Analysis Tools and
                Frameworks;
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                In-depth study of the best network for deployment based on the
                customer's requirements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lifetime technical assistance.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <ul className="service__list">
            <h3>Backend/Frontend Integration</h3>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Highly familiar with ether.js, web3.js and web3-react.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Extraction of valuable data from different protocols.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Work hand in hand with the business team and the engineering
                team in developing new features, solving problems and extending
                the platform.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Clear quality code for software and applications and perform
                test reviews.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Work with smart contracts and oracles such as Chainlink, Tezos
                or Flux.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lifetime technical assistance.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <ul className="service__list">
            <h3>UX/UI Create and Design</h3>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Transfer of ideas to the design and frontend code.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design and building of dynamic web sites and dashboards in the
                Web3 environment.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React, NextJS, JavaScript, Figma, TailwindCSS.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lifetime technical assistance.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
