import React from "react";
import logo from '../Assets/logo.png'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footer-section-one">
      <div  className='navContainer'>
      <img src={logo} alt='logo' className='navLogo' />
      <p className='logoText'>etra</p>
      </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Resources</span>
          <p>Blog</p>
          <p>Talk to Us</p>
          <p>Terms</p>
        </div>
        {/* <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div> */}
        <div className="footer-section-columns">
          <span>Use Cases</span>
          <p>Startups</p>
          <p>Scale-ups</p>
          <p>Filmmakers</p>
          <p>Music Executives</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;