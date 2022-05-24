import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/netflix.png';
import IMG2 from '../../assets/airbnb.png';
import IMG3 from '../../assets/twitter.png';
import IMG4 from '../../assets/cryptocard.png';
import IMG5 from '../../assets/punks.png';
import IMG6 from '../../assets/draftdigital.png';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Netflix Decentralized',
      comments: 'Don´t miss the opportunity to watch your favourite movies and series on this Netflix, now completely decentralized thanks to its videos in IPFS, its payment with crypto and its subscription through NFT.',
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
      title: 'Twitter Decentralized',
      comments: 'All you can say in one tweet. Add picture. Use your own NFT to personalize you Profile.',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Cryptocard',
      comments: 'Transfer crypto money to any account accross the world, in seconds, without intermediaries',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Title portfolio 5',
      comments: 'NFT project',
      github: 'https://github.com/aitorzaldua/portfolio_brand',
      website: 'https://www.draftdigital.org/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Draft Digital',
      comments: 'Wonderful project to centralize all the service to my awesome clients',
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