import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/audits/ajna.png";
import IMG2 from "../../assets/audits/caviar.png";
import IMG3 from "../../assets/audits/ens.png";
import IMG4 from "../../assets/audits/frankencoin.png";
import IMG5 from "../../assets/audits/kuma.png";
import IMG6 from "../../assets/audits/partyDao.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Ajna Protocol",
      comments:
        "Ajna's protocol is a non-custodial, peer-to-peer, permissionless lending, borrowing and trading system that requires no governance or external price feeds to function.",
      report: "https://code4rena.com/reports/2023-05-ajna",
      website: "https://www.ajna.finance/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Caviar",
      comments:
        "Caviar is an on-chain, gas-efficient automated market maker (AMM) protocol for trading non-fungible tokens (NFTs) with ERC20 tokens and ETH, supporting both whole and fractional amounts.",
      report: "https://code4rena.com/reports/2023-04-caviar",
      website: "https://docs.caviar.sh/",
      contract:
        "https://mumbai.polygonscan.com/address/0x789AC75C3070c801833F5EeC53C6984b2BDDd4C5",
    },
    {
      id: 3,
      image: IMG3,
      title: "ENS Domains",
      comments:
        "ENS is the most widely integrated blockchain naming standard. No more copying and pasting long addresses. Use your ENS name to store all of your addresses",
      report: "https://github.com/aitorzaldua/twitterdecv002",
      website: "https://ens.domains/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Frankencoin",
      comments:
        "The Frankencoin is a collateralized, oracle-free stablecoin that tracks the value of the Swiss franc.Unlike the minting mechanisms of other collateralized stablecoins, Frankencoin's auction-based mechanism does not depend on external oracles. ",
      report: "https://code4rena.com/reports/2023-04-frankencoin",
      website: "https://cryptotransfers.netlify.app/",
      contract:
        "https://mumbai.polygonscan.com/address/0x789AC75C3070c801833F5EeC53C6984b2BDDd4C5",
    },
    {
      id: 5,
      image: IMG5,
      title: "Kuma Protocol",
      comments:
        "The KUMA Protocol is a decentralized protocol issuing interest-bearing tokens backed by regulated NFTs, themselves backed by Real World Assets (RWA). At start the KUMA Protocol accepts regulated KUMA NFTs that are backed by sovereign bonds. ",
      report: "https://code4rena.com/reports/2023-02-kuma",
      website: "https://docs.kuma.bond/kuma-protocol/",
      contract:
        "https://mumbai.polygonscan.com/address/0xfe3e75eb2ce7b9beb7a8f8f106beb7088bca185f",
    },
    {
      id: 6,
      image: IMG6,
      title: "Party DAO",
      comments:
        "Party multiplayer for Ethereum. Create a group with flexible crowfunding methods, make decisions with on-chain voting and perform any Ethereum transaction as a party.",
      report: "https://code4rena.com/reports/2023-05-party",
      website: "https://www.party.app/",
    },
  ];

  return (
    <section id="portfolio">
      <div className="top__adjust" />
      <h5>My Recent work</h5>
      <h2>Audits</h2>

      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, report, website, comments, contract }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{comments}</h5>
                <div className="portfolio__item-cta">
                  <a
                    href={report}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Report
                  </a>
                  <a
                    href={website}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </article>
            );
          }
        )}

        {/* 1.- We can just do thisx6 or use the array/map option like above
      
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portoflio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/aitorzaldua/portfolio_brand' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://www.draftdigital.org/' className='btn btn-primary' target='_blank' rel="noreferrer">Website</a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
