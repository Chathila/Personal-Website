//FIX EMAIL FORM

import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-contact'>
        <p className='footer-contact-heading'>
          GET IN TOUCH
         </p> 
        <p className='footer-contact-text'>
          Drop your name and email and I will reach out to you.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Name'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          
            <div class='social-icons'>
            <Link
                class='social-icon-link facebook'
                to ="/ContactInformation"
                target='_blank'
                aria-label='Github'
                
            >
                <i class='fab fa-github' />
            </Link>
            
           
            <Link
              class='social-icon-link twitter'
              to ="/ContactInformation"
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fas fa-envelope' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to ="/ContactInformation"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
                
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;