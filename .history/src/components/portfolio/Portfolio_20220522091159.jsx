import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio01.png';
import IMG2 from '../../assets/airbnb.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio06.png';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Netflix Decentralized',
      github: 'https://github.com/aitorzaldua/netflixdecentralized',
      website: 'https://netflixdecentralized.netlify.app/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Airbnb Decentralized',
      comments: 'The clasical Airbnb, with beautiful locations to book. Built with React, Smart contract in Polygon Mumbay',
      github: 'https://github.com/aitorzaldua/airbnb-web3-ui',
      website: 'https://awesomepunks.netlify.app/',
      contract: 'https://rinkeby.etherscan.io/address/0xDE79Fe425A2AFA4dc9FDb665f5430d23008F91D0#code'
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
      title: 'Draft Digital',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
  ]


  return (
    <section id='portfolio'>
      <div className="top__adjust" />
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, website, comments, contract}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{comments}</h5>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={website} className='btn btn-primary' target='_blank' rel='noreferrer'>Website</a>
                  {/* <a href={contract} className='btn' target='_blank' rel='noreferrer'>Contract</a> */}
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