import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className='service'>
      
          <ul className='service__list'>
          <h3>Frontend & UI Design</h3>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fast load times and lag free interaction.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive layouts that will work on any device.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML5, SASS, Tailwind</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React, Next.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full web3 integration</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>EVM Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Smart Contract using ERC20, ERC721</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>DeFi(Decentralized Finance) DApps </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Thirth description of Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fourth description of Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fiveth description of Service</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Non-EVM Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>First description of Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Second description of Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Thirth description of Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fourth description of Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fiveth description of Service</p>
            </li>
          </ul>
        </article>


      </div>



    </section>
  )
}

export default Services;