import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsAboutMe() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <h1>Hey! I am Chathila</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/me-2.png'
              text='As a fourth-year Software Engineering student at the University of Alberta,
                    I am passionate about solving complex problems and using technology to make 
                    a meaningful impact. My journey began with a love for mathematics, where I 
                    found satisfaction in tackling challenges through critical thinking. 
                    This passion evolved into software engineering, where I bring adaptability, 
                    a thirst for learning, and a dedication to mastering new technologies.'
              text2='Growing up in Sri Lanka and transitioning to life in Canada has shaped my 
                    resilience and responsibility while broadening my perspective on innovation. 
                    I am particularly fascinated by the role of software in automotive engineering, 
                    from enhancing safety to unlocking speed and efficiency. My internship at Resolver 
                    further ignited my drive to use software for positive change, especially through an 
                    accessibility project inspired by the curb cut effect. It showed me that thoughtful 
                    engineering can help everyone, creating solutions that are inclusive and impactful.'
              text3='I am currently in a phase of exploration, building my knowledge across various software 
                    development domains. My goal is to grow as a well-rounded software 
                    engineer, contributing to innovative projects that align with my goals 
                    and advancing technology.'
              label='About Me'
              
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsAboutMe;