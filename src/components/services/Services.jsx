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
          <div className='service__head'>
            <h3>Frontend & UI Design</h3>
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

        <article className='service'>
          <div className='service__head'>
            <h3>EVM Services</h3>
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