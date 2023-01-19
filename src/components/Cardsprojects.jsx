import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsAboutMe() {
  return (
    <div className='cards'>
      <h1>Company Stocker</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/companystocker.png'
              text="This is CompanyStocker, a simple interactive application demonstrating the creative and limitless potential of Python. Using a custom version of Python's Tkinter module, we have created a modern GUI that takes any stock ticker as input in order to display that companies historical financial information. All the user has to do is input any ticker symbol of their choice. Our algorithm will then use that input to display another page with the stock price of that company, a description of what they do, as well as access to their primary financial statements (the balance sheet, income statement, and cash-flow statement). What our modern interface is aiming to accomplish is the simplification of investing and investment research. We have taken the first steps to creating an educational platform to allow anyone of any age to create smart financial decisions. Due to time constraints, we were unable to add a lot of the features that we had in mind, some of which including: real time updated stock and company news being displayed, an interactable chart which displays real time and historic changes in a companies stock price, as well as functionality with cryptocurrency and the forex markets. Within the future, we intend to take this idea to the next level and create a modern application marketed to the general public, in hopes to allow individuals of any age to learn how to make smarter financial decisions."
              label='Click on Image for Github Repo'
              path = "https://github.com/Chathila/CompanyStocker-JRACI.git"
            />
            
          </ul>
        </div>
      </div>
      <h1>Personal Website</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/website.png'
              text='This is a personal project where built my own portfolio onto an interactive and modern website by implementing my knowledge about HTML, JavaScript and CSS along with frameworks like react.js '
              label='Click on Image for Github Repo'
              path = "https://github.com/Chathila/Personal-Website.git"
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsAboutMe;