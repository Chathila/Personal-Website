import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsExperiences() {
  return (
    <div className='cards'>
      <h1>This is What I have done</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src = "images/uofa2.png"
              text='As a Software Engineering student at the University of Alberta, I am actively seeking employment opportunities for the upcoming summer term of 2023. With a duration of 4 months, this internship would provide me with valuable experience in the industry, and further develop my professional and technical skills and abilities.'
              label='Availability'
              
              
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
            
              src='images/fiveguys.png'
              text='Shift Supervisor at Five Guys Edmonton,AB'
              text2 = "May 2022 - Present"
              text3 = "• Oversee all operations in the kitchen and the lobby "
              text4 = '• Managed the weekly delivery and align all inventory by expiry dates'
              label='Experience'

              
            />
            
            <CardItem
              src='images/freshco.png'
              text ='Grocery Clerk at FreshCo Edmonton,AB'
              text2 = "January 2022 - August 2022"
              text3 = "• Oversaw delivery operations of the Inventory and organized inventory"
              text4 = '• Restocked and Rotated the Inventory shelves on the sales floor'
              label='Experience'
            />
            <CardItem
              src='images/sml.png'
              text ='Sales and Marketing Intern at Sathosa Motors Colombo, Sri Lanka '
              text2 = "January 2021 - July 2021"
              text3 = "• Conducted feasibility study in Semi Knocked Down vehicle assembly facility for ISUZU trucks"
              text4 = '• Designed product catalogues for Isuzu Trucks with detailed technical literature'
              label='Experience'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsExperiences