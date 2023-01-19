import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsAboutMe() {
  return (
    <div className='cards'>
      <h1>This is ME!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/me.jpg'
              text='I am a motivated and driven student from Sri Lanka pursuing my passion for engineering in Canada at the University of Alberta. I believe I am a hard-working and enthusiastic individual constantly looking for opportunities to develop my professional skills and graduate attributes via internships and other various activities. Currently, most of my interests revolve around the Autonomous Automotive industry and Modern technological Advancements. As a second-year Software Engineering student at the University of Alberta, I am actively seeking a 4-month co-op internship starting in May 2023. I am also an avid enthusiast of cars and have a love for motor racing, particularly Formula 1.'
              label='About Me'
              
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsAboutMe;