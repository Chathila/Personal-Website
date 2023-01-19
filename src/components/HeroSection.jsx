import React from 'react';
import '../App.css';
import { Button, D1Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Chathila Ratnatilake</h1>
      <p>Software Engineering Student at the University of Alberta</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Learn more
        </Button>
        <D1Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          pdf = "src/RESUME V01.17.pdf"
        >
          Resume/CV
        </D1Button>
        
      </div>
    </div>
  );
}

export default HeroSection;

