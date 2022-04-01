import React from 'react';
import './blog.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio1.jpg';
import IMG3 from '../../assets/portfolio1.jpg';
import IMG4 from '../../assets/portfolio1.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';  

const Blog = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Smart Contract en Solana con Rust 1',
      note: 'Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.',
      link: 'https://medium.com/p/300238e68053',
      place: 'Medium'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Smart Contract en Solana con Rust 1',
      note: 'Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.',
      link: 'https://medium.com/p/300238e68053',
      place: 'Medium'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Smart Contract en Solana con Rust 1',
      note: 'Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.',
      link: 'https://medium.com/p/300238e68053',
      place: 'Medium'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Smart Contract en Solana con Rust 1',
      note: 'Solana, nacida en 2017, es un blockchain de prueba de participación (PoS) basado en la práctica bizantina de tolerancia a fallas (PBFT) construida desde cero por Solana Labs, con sede en Suiza, para asumir uno de los mayores desafíos tecnológicos: escalar la blockchain para su adopción global.',
      link: 'https://medium.com/p/300238e68053',
      place: 'Medium'
    },
   
  ]

  return (
    <section id='blog'>
      <h5>My recent articles</h5>
      <h2>Blog</h2>

      <Swiper className='container blog__container'
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {
          data.map(({id, image, title, note, link, place}) => {
            return (
              <SwiperSlide className='article'>
                <div className='article__image'>
                  <img src={IMG1} alt=''></img>
                </div>
                <h5 className='article__name'>{title}</h5>
                <small className='article__note'>{note}</small>
                <a className='article__link' href={link} target='_blank' rel='noreferrer'>Continue reading on {place}</a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Blog;