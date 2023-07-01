import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./medium.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import IMG1 from "../../assets/medium/medium01.png";
import IMG2 from "../../assets/medium/medium02.png";
import IMG3 from "../../assets/medium/medium03.png";
import IMG4 from "../../assets/medium/medium04.png";
import IMG5 from "../../assets/medium/medium05.png";


const Medium = () => {
  return (
    <section id="blog">
      <div className="top__adjust" />
      <h5>My recent articles</h5>
      <h2>Blog</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={IMG1} alt="" />
          <a
            className="article__link"
            href="https://medium.com/coinsbench/the-smart-contract-hacking-course-and-the-multiverse-136fd5e9312d"
            target="_blank"
            rel="noreferrer"
          >
            The Smart Contract Hacking Course and The Multiverse
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG2} alt="" />
          <a
            className="article__link"
            href="https://medium.com/coinsbench/hardhat-testing-without-knowing-javascript-73099c05b1d4"
            target="_blank"
            rel="noreferrer"
          >
            Hardhat Testing without knowing JavaScript
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG3} alt="" />
          <a
            className="article__link"
            href="https://medium.com/coinsbench/first-look-at-the-smart-contract-hacking-course-bafb87a45566"
            target="_blank"
            rel="noreferrer"
          >
            First look at the Smart Contract Hacking Course
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG4} alt="" />
          <a
            className="article__link"
            href="https://medium.com/coinsbench/early-prelims-to-become-a-smart-contract-auditor-d2479cc6b702"
            target="_blank"
            rel="noreferrer"
          >
            Early prelims to become a smart contract auditor
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG5} alt="" />
          <a
            className="article__link"
            href="https://medium.com/@aitorzaldua/how-to-become-a-smart-contract-auditor-in-2023-2503ecd5dcb4"
            target="_blank"
            rel="noreferrer"
          >
            How to become a Smart Contract Auditor in 2023
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Medium;
