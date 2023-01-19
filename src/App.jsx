import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
//mport Cards from './components/Cards'
import CardsAboutMe from "./components/CardsAboutMe";
import CardsProjects from "./components/Cardsprojects";
import CardsExperiences from "./components/CardsExperience"
import CardsContactInfo from "./components/Cardscontact";

import Footer from "./components/Footer"


function Home () {
    return(
        <>
        <HeroSection/>
        
        <Footer/>
        </>
    )
}



function Aboutme(){
  return(
    <div>
      <h1 className="aboutme">About Me</h1>
      <CardsAboutMe/>
      <Footer/>
    </div>
      
  )
}

function Projects(){
  return(
    <div>
      <h1 className="aboutme">Projects</h1>
      <CardsProjects/>
      <Footer/>
    </div>
      
  )
}

function Experiences() {
  return(
    <div>
      <h1 className="aboutme">Experience</h1>
      <CardsExperiences/>
      <Footer/>
    </div>
  )
}

function ContactInfo(){
  return(
    <div>
      <h1 className="aboutme">Contact Information</h1>
      <CardsContactInfo/>
      <Footer/>
    </div>
  )
}


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About-me" element = {<Aboutme/>}/>
        <Route path="/Projects" element = {<Projects/>}/>
        <Route path ="/Experiences" element = {<Experiences/>}/>
        <Route path ="/ContactInformation" element ={<ContactInfo/>}></Route>
        </Routes>
      </Router>

    </>
  );
}


export default App;

