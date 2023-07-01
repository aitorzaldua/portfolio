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
            <h3>Smart Contracts Audits</h3>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Early cost and time estimation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Full-time commitment to a single client during the audit period.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Open channels of communication with the client's contacts at all
                times.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Initial report to be reviewed by the client.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Second audit after the implementation of the initial report
                findings.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Final report indicating the vulnerabilities already fixed and
                making the final assessments.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <ul className="service__list">
            <h3>Security Consulting</h3>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Free consultation via Zoom, on web3 security best practices and
                how to find the resources for their implementation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Early estimation of the cost of accompanying programmers during
                project development.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Gas consumption recommendations to reduce implementation costs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ongoing audit of the software, unit testing and proof of concept
                of the vulnerabilities found.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Final audit report.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lifetime audit assistance.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <ul className="service__list">
            <h3>Blockchain Instructor</h3>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Customised training according to the company's requirements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Free consultation via Zoom, with security advice and online
                resources available.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Basic to advanced programming courses on Solidity and smart
                contracts.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Basic to advanced courses on security, vulnerabilities, tokens,
                etc... to become a smart contract auditor and security
                researcher.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Defi courses, learning how to code services such as
                lending, flash loans or crypto swaps based on protocols like
                Uniswap or AAve.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
