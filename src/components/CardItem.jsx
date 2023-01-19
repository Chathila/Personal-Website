/*import React from "react";
import {Link} from 'react-router-dom'


function CardItem(props) {
    return(
        <>
            <li className="card__item">
                <Link className="card__item__link " to={props.path}>
                    <figure className="cards__item__pic-wrap" data-catagory= {props.label}>
                        <img src={props.src} alt="Travel Image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}*/



import React from 'react';
//import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
      <a className='cards__item__link' href={props.path} target="_blank">
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


export default CardItem



