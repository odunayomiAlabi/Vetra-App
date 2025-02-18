import React, { useState } from 'react'
import Navbar from "./Navbar";
import { HiArrowRight } from 'react-icons/hi2';
import BusinessPlan from '../Assets/BusinessPlan.png'
import FAQAccordion from './accordion/accordion';
import { motion } from 'framer-motion';
import styles from "./page.module.css";
import { PopupButton } from 'react-calendly';

const Home = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    return null;
  }
  return (
    <div className='homeContainer'>
      <Navbar />
      <div className="homeBanner">
      {/* Text Section (Left Side) */}
      <div className="homeSection">
        <p className="primarySubheading">Big Ideas. Big Stories. Bigger Impact</p>
        <h1 className="primaryHeading">
          For Startups, Scaleups, and Storytellers Who Refuse
        </h1>
        <p className="primaryText">
          Your startup, film, or creative project might be brilliant, but without the right 
          strategy, it’s just another drop in an ocean of noise. We help you avoid that.
        </p>
        {/* <button className="navButton">
          Talk to Us <HiArrowRight />
        </button> */}
      <div className="App">
      <PopupButton
      className="navButton"
        url="https://calendly.com/hello-choosevetra/30min"
        rootElement={rootElement}
        text="Talk to us"
      />
    </div>
      </div>

      {/* Image Section (Right Side) */}
      <div className="homeBannerImage">
        <img src={BusinessPlan} alt="Business Plan" />
      </div>
    </div>
   
    </div>
  )
}

export default Home
 