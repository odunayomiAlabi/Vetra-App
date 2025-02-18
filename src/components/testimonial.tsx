import React from "react";
import ProfilePic from '../Assets/ProfilePic.png'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">What Our Partners Say </p>
        <h1 className="primary-heading">You don't have to take our words for it…take theirs </h1>
      </div>
      <div className="testimonialSection">
      <div className="testimonialSectionBottom">
      <img src={ProfilePic} alt="ProfilePic" />
      <h2>JHannah Schmitt</h2>
      <span>Lead designer</span>
          <FaQuoteLeft />
        <p>
        In any industry, those who master collaboration dominate. Film marketing is no different. 
        Partnering with Vetra wasn’t just working together—it was doubling down on strategy, execution, 
        and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.
        </p>
      </div>
      <div className="testimonialSectionBottom">
      <img src={ProfilePic} alt="ProfilePic" />
      <h2>JHannah Schmitt</h2>
      <span>Lead designer</span>
        <FaQuoteLeft />
        <p>
        In any industry, those who master collaboration dominate. Film marketing is no different. 
        Partnering with Vetra wasn’t just working together—it was doubling down on strategy, execution, 
        and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.
        </p>
      </div>
      <div className="testimonialSectionBottom">
      <img src={ProfilePic} alt="ProfilePic" />
      <h2>Dorwu Mawutor Prince,</h2>
      <span>CEO, Reelpoint</span>
        <FaQuoteLeft />
        <p>
        In any industry, those who master collaboration dominate. Film marketing is no different. 
        Partnering with Vetra wasn’t just working together—it was doubling down on strategy, execution, 
        and results. When the right minds align, the impact speaks for itself. Looking forward to doing it again.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;