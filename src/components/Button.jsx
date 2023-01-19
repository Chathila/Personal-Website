import React from "react";
import './Button.css';
import { Link } from "react-router-dom";
import Resume from "./RESUME V01.17.pdf"




const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--medium','btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize : SIZES[0];

    return(
        <Link to = '/About-me' className="btn-mobile">
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}
            >
                {children}
            </button>
        </Link>
    )

};

export const D1Button = ({children, type, buttonStyle, buttonSize, pdf}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize : SIZES[0];

    return(
        <a href={Resume} download className='btn--online'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {() => {}}
            type = {type}
            >
                {children}
            </button>
        </a>
    )
};

/*export function downloadPDF() {
    var link = document.createElement("a");
    link.href = "src/RESUME V01.17.pdf";
    link.download = "Chathila's Resume";
    link.click();
  }*/
  

