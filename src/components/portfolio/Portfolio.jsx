import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/netflix.png";
import IMG2 from "../../assets/airbnb.png";
import IMG3 from "../../assets/twitter.png";
import IMG4 from "../../assets/cryptoTranfers.png";
import IMG5 from "../../assets/coinmarket.png";
import IMG6 from "../../assets/draftdigital.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Netflix Decentralized",
      comments:
        "Don´t miss the opportunity to watch your favourite movies and series on this Netflix, now completely decentralized thanks to its videos in IPFS, its payment with crypto and its subscription through NFT.",
      github: "https://github.com/aitorzaldua/netflixdecentralized",
      website: "https://netflixdecentralized.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Airbnb Decentralized",
      comments:
        "Renting has become safer. Track on the Blockchain the history of the accommodation, process with crypto and guarantee the lock of the property through the Smart Contract. And enjoy!",
      github: "https://github.com/aitorzaldua/airbnb-web3-ui",
      website: "https://awesomepunks.netlify.app/",
      contract: "https://mumbai.polygonscan.com/address/0x789AC75C3070c801833F5EeC53C6984b2BDDd4C5",
    },
    {
      id: 3,
      image: IMG3,
      title: "Twitter Decentralized",
      comments:
        "Every tweet is yours and yours alone. The proof is in the Blockchain, where each one can be consulted as another transaction. Customize your Avatar with your NFT's and store the images in IPFS.",
      github: "https://github.com/aitorzaldua/twitterdecentralized",
      website: "https://www.draftdigital.org/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Crypto Transfers",
      comments:
        "This is what the Blockchain ecosystem has been built for. To make life easier. Send and receive cryptocurrency in seconds by simply connecting your wallet. No middlemen. No questions asked. This is the way.",
      github: "https://github.com/aitorzaldua/cryptocardui",
      website: "https://cryptotransfers.netlify.app/",
      contract: "https://mumbai.polygonscan.com/address/0x789AC75C3070c801833F5EeC53C6984b2BDDd4C5",
    },
    {
      id: 5,
      image: IMG5,
      title: "Coin Market Help",
      comments: "Investing in the cryptocurrency market is something that causes immense disturbance. Up or Down? That is the question. But we are not alone. At CoinMarketHelp you can find out what other peers are feeling about the market and draw your own conclusions.",
      github: "https://github.com/aitorzaldua/platzi_punks_v3_interface",
      website: "https://github.com/aitorzaldua/pollbubble",
      contract: "https://mumbai.polygonscan.com/address/0xfe3e75eb2ce7b9beb7a8f8f106beb7088bca185f",
    },
    {
      id: 6,
      image: IMG6,
      title: "Draft Digital",
      comments:
        "Draft Digital is the project to lead the transition of infinite businesses to Web3. We implement your idea, your vision from the first step to make it a reality in the Blockchain ecosystem.",
      github: "https://github.com/aitorzaldua/portfolio_brand",
      website: "https://www.draftdigital.org/",
    },
  ];

  return (
    <section id="portfolio">
      <div className="top__adjust" />
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, github, website, comments, contract }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{comments}</h5>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                 <a
                    href={website}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                  <a href={contract} className='btn' target='_blank' rel='noreferrer'>Contract</a>
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
