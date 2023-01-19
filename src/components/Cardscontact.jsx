//FIX EMAIL CARD
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardItememail(props) {
    return (
      <>
        <li className='cards__item'>
        <a className='cards__item__link' href="mailto: ratnatil@ualberta.ca" target="_blank">
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
              <h5 className='cards__item__text'>{props.text2}</h5>
              <h5 className='cards__item__text'>{props.text3}</h5>
              <h5 className='cards__item__text'>{props.text4}</h5>
              <h5 className='cards__item__text'>{props.text5}</h5>
            </div>
            
          </a>
        </li>
      </>
    );
  }

function CardsContactInfo() {
  return (
    <div className='cards'>
      <h1>Get in touch!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            
              src='images/git.png'
              text='Github'
              text2 = "Collaborate with me! "
              label='Click for Github'
              text3 = "Github Username - Chathila"
              path = "https://github.com/Chathila"
            />
            
            <CardItem
              src='images/linkedin2.png'
              text='LinkedIn'
              text2 = "Connect with me! "
              text3 = "LinkedIn Username - Chathila Ratnatilake"
              label='Click for LinkedIn'
              path = "https://www.linkedin.com/in/chathila"
            />
            <CardItememail
              src='images/mail.png'
              text='Email'
              text2 = "Email me!"
              text3 = "Email - ratnatil@ualberta.ca"
              label='Click for Email'
              path = "https://ratnatil@ualberta.ca"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsContactInfo