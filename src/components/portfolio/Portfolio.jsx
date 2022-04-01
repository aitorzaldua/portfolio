import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Title portfolio 1',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Title portfolio 2',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Title portfolio 3',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Title portfolio 4',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Title portfolio 5',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Title portfolio 6',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
  ]


  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, website}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={website} className='btn btn-primary' target='_blank' rel='noreferrer'>Website</a>
                </div>
              </article>
            )
          }) 
        }

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
  )
}

export default Portfolio;