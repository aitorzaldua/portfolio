import React from 'react';
import './contact.css';

import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>aitor.zaldua@draftdigital.org</h5> */}
            <a href='mailto:aitor.zaldua@draftdigital.org' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>Click to send a message</h5> */}
            {/* <a href='https://wa.me/+34609xxxx' target="_blank" rel="noreferrer">Send a message</a> */}
            <a href='https://api.whatsapp.com/send?phone=+34609278125' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            {/* <h5>Click to access to my profile</h5> */}
            <a href='https://www.linkedin.com/in/xxxxx' target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type='text' name='name' placeholder='Your full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>  
  )
}

export default Contact; 