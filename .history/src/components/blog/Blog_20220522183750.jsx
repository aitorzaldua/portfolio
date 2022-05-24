import React from "react";
import "./blog.css";
import IMG1 from "../../assets/solana.png";
import IMG2 from "../../assets/aws.png";
import IMG3 from "../../assets/rust.jpeg";
import IMG4 from "../../assets/linux.png";

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
      link: "https://aitorzaldua.medium.com/smart-contract-en-solana-con-rust-300238e68053",
      place: "Medium",
    },
    {
      id: 2,
      image: IMG2,
      title: "AWS SE INCLINA POR RUST COMO LENGUAJE DEL FUTURO",
      note: "AWS está esponsorizando el lenguaje de programación Rust y su motivo es bien evidente: Rust le permite a AWS escribir software con alto rendimiento y máximo aprovechamiento de la infraestructura, a la vez de garantizar la seguridad tanto de los sistemas como del entorno de red. Definitivamente, Rust se está volviendo popular en los entornos Cloud, veamos por qué",
      link: "https://aitorzaldua.medium.com/amazon-web-services-se-inclina-por-rust-como-lenguaje-del-futuro-aac5e2ceace5",
      place: "Medium",
    },
    {
      id: 3,
      image: IMG3,
      title: "CONSIDERA RUST COMO TU SIGUIENTE LENGUAJE",
      note: "De acuerdo con las encuestas de StackOverflow, Rust ha sido el lenguaje de programación más amado los últimos cuatro años. La mayoría de los programadores que han probado el lenguaje indican que les gustaría continuar usándolo.",
      note2:
        "Si no te encuentras entre ellos, deberías preguntarte, ¿Qué es Rust, por qué es tan especial y qué es lo que le hace tan popular entre los desarrolladores? En esta guía, voy a tratar de darte una pequeña introducción al lenguaje y contestar algunas de las preguntas que tal vez tengas sobre Rust.",
      link: "https://medium.com/p/dec97cfbeafd",
      place: "Medium",
    },
    {
      id: 4,
      image: IMG4,
      title: "INSTALACIÓN Y CONFIGURACIÓN DE UN SERVIDOR FTP EN LINUX",
      note: "FTP son las siglas de File Transfer Protocol (Protocolo de Transferencia de Archivos). Fue escrito por Abhay Bhushan y publicado como RFC 114 el 16 de abril de 1971. Es compatible con todos los sistemas operativos y navegadores. Se basa en una arquitectura cliente-servidor.",
      note2:
        "Paso 1: Usaremos localhost (127.0.0.1) en nuestro equipo para configurar el servidor ftp. Paso 2: Instalar el paquete vsftpd (muy seguro FTP daemon) - yum install -y vsftpd",
      link: "https://www.freecodecamp.org/espanol/news/ghost/#/site",
      place: "Free Code Camp",
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
