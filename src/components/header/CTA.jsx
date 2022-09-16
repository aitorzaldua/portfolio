import React from 'react';
import CV from '../../assets/azcv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' target="_blank" rel="noreferrer">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let´s talk</a>
    </div>
  )
}

export default CTA;