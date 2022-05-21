import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <div className="top__adjust" />
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className='service'>

          <ul className='service__list'>
          <h3>Frontend & UI Design</h3>
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
              <p>Integration with crypto wallets such as Metamask.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing RPC using client libraries such as web3.js. ether.js or Moralis.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lifetime technical assistance.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <ul className='service__list'>
          <h3>EVM Services</h3>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing smart contracts using Solidity Programming Language.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Static analysis of smart contracts for gas consumption and optimization using Remix IDE.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>ecuring smart contracts using libraries like OpenZeppelin.</p>
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
          <ul className='service__list'>
          <h3>Non-EVM Services</h3>
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