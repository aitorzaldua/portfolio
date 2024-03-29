import React from "react";
import "./blog.css";

import IMG1 from "../../assets/medium/medium01.png";
import IMG2 from "../../assets/medium/medium02.png";
import IMG3 from "../../assets/medium/medium03.png";
import IMG4 from "../../assets/medium/medium04.png";
import IMG5 from "../../assets/medium/medium05.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const data = [
    {
      id: 1,
      image: IMG5,
      title: "HOW TO BECOME A SECURITY SMART CONTRACT ENGINEER",
      note: "It this series of articles, I will try to tell my story and how I became a wizard for the greater good. To protect The Blockchain, to keep it safe from the dark wizards who try, everyday, to steal contracts and balances.",
      note2:
        "And my journey begins at Open Zeppelin. Open Zeppelin is a company that has smarts contracts security as their top priority. They have a lot of elements, such a predefined contracts, defenders or auditing services to protect the entire ecosystem.",
      link: "https://aitorzaldua.medium.com/how-to-become-a-security-smart-contract-engineer-5eca69f1ea9f",
      place: "Medium",
    },
    {
      id: 2,
      image: IMG1,
      title: "SECURITY SMART CONTRACTS: ETHERNAUT 1",
      note: "Let’s continue with the Ethernaut. Today’s adventure is called The Fallback.Pay attention because today we will have to drain a contract, to steal all the funds. A dream from the dark side of the force.",
      link: "https://link.medium.com/gYfHIFrLAtb",
      place: "Medium",
    },
    {
      id: 3,
      image: IMG3,
      title: "THE HACKING OF RUBIXI SMART CONTRACT",
      note: "When the movie starts with that sentence, something bad is going to happen to our protagonist. Maybe he’ll die, maybe he’ll lose his love forever… or maybe someone will take control of his smart contract and steal his funds because of a silly mistake.",
      note2:
        "This is the story of a company called Rubixy and how it tried to be a Ponzi scheme, and fool a lot of people, and ended up being the laughing stock of the smart contracts ecosystem.",
      link: "https://blog.blockmagnates.com/the-hacking-of-rubixi-smart-contract-23d339213bbe",
      place: "Block Magnates",
    },
    {
      id: 4,
      image: IMG4,
      title: "HACKING A LOTTERY SMART CONTRACT",
      note: "This is a coin flip game where we will have to win 10 times in a row to hack the contract. In other words, we have to guess the next value of the flip function return.",
      note2:
        "The user will enter a boolean, true or false, and the function will generate another boolean. If both match, it will add 1 to the variable, consecutiveWins (set to 0 in the constructor). If they do not match, the variable returns to 0.",
      link: "https://blog.blockmagnates.com/ethernaut-3-hacking-a-lottery-smart-contract-13922a0d066d",
      place: "Block MagnatesIM",
    },
    {
      id: 5,
      image: IMG2,
      title: "SECURITY SMART CONTRACT: TX.ORIGIN",
      note: "This is probably an old mistake and no one today is making it, but we can use this challenge to clarify the difference between tx.origin, the transaction origin, and msg.sender, the sender of the function call.",
      note2:
        "LWe all know what, or better, who, is msg.sender, probably the most used variable in solidity: We interact with contracts through functions and the chain stores our address, as callers, as msg.sender.",
      link: "https://coinsbench.com/security-smart-contract-tx-origin-944406d45977",
      place: "Coins Bench",
    },
  ];

  return (
    <section id="blog">
      <div className="top__adjust" />
      <h5>My recent articles</h5>
      <h2>Blog</h2>

      <Swiper
        className="container blog__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ id, image, title, note, note2, link, place }) => {
          return (
            <SwiperSlide className="article">
              <h5 className="article__name">{title}</h5>
              <div className="article__image">
                <img src={image} alt=""></img>
              </div>
              <small className="article__note">{note}</small>
              <small className="article__note">{note2}</small>
              <a
                className="article__link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Continue reading on {place}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;
