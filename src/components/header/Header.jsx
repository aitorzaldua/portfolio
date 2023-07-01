import React from 'react';
import './header.css';
import CTA from './CTA';
/* picture by Mila Gómez */
import ME from '../../assets/az.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <section id='header' className='header'>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Aitor Zaldua</h1>
        <h5 className='text-light'>Security Researcher | Smart Contract Dev | Blockchain Instructor</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </div>
    </section>

  )
}

export default Header;