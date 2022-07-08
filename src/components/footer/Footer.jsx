import React from 'react';
import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <a href='#header' className='footer__logo'>Aitor Zaldua</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#blog'>Blog</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/aitor-zaldua/'><BsLinkedin/></a>
      <a href='https://twitter.com/azdraft_'><IoLogoTwitter/></a>
      <a href='https://github.com/aitorzaldua'><BsGithub/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Designed with <AiFillHeart/> by MG</small>
    </div>


    </section>
  )
}

export default Footer;