import React from "react";
import "./blog.css";
import IMG1 from "../../assets/solana.png";
import IMG2 from "../../assets/aws.png";
import IMG3 from "../../assets/solana.png";
import IMG4 from "../../assets/solana.png";

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
      image: IMG1,
      title: "SMART CONTRACT EN SOLANA",
      note: "Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.",
      note2:
        "La red está respaldada por un fondo superior a 25 millones de dolares de inversores notables, incluidos Multicoin Capital, Foundation Capital, Distributed Global, CMCC, Blocktower Capital, NGC Capital y Rockaway Ventures.",
      link: "https://medium.com/p/300238e68053",
      place: "Medium",
    },
    {
      id: 2,
      image: IMG2,
      title: "AWS SE INCLINA POR RUST COMO LENGUAJE DEL FUTURO",
      note: "AWS está esponsorizando el lenguaje de programación Rust y su motivo es bien evidente: Rust le permite a AWS escribir software con alto rendimiento y máximo aprovechamiento de la infraestructura, a la vez de garantizar la seguridad tanto de los sistemas como del entorno de red. Definitivamente, Rust se está volviendo popular en los entornos Cloud, veamos por qué",
      link: "https://medium.com/p/300238e68053",
      place: "Medium",
    },
    {
      id: 3,
      image: IMG3,
      title: "Smart Contract en Solana con Rust 1",
      note: "Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.",
      link: "https://medium.com/p/300238e68053",
      place: "Medium",
    },
    {
      id: 4,
      image: IMG4,
      title: "Smart Contract en Solana con Rust 1",
      note: "Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.",
      link: "https://medium.com/p/300238e68053",
      place: "Medium",
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
                <img src={IMG1} alt=""></img>
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
