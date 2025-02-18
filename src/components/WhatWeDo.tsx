import React from 'react'
import Frame17 from '../Assets/Frame17.png'
import salsa from '../Assets/salsa.png'
import Recording from '../Assets/Recording.png'

const WhatWeDo = () => {
  return (
    <div className="workSectionBody">
    <div className="work-section-top">
      <p className="primary-subheading">What We Do</p>
      <h1 className="primary-heading">Services We Can Help You With</h1>
      <p className="primary-text">
      We don’t just market. We launch. We amplify. 
      We turn brands into movements and stories into culture.
      </p>
    </div>
    <div className='weDoSection'>
    <div className='weDoCover1'>
      <img src={Frame17} alt="Frame" />
      <h3>For StartUps & scaleups</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
    </div>
    <div className='weDoCover2'>
    <img src={Recording} alt="Recording" />
      <h3>For Film & Entertainment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
    </div>
    <div className='weDoCover3'>
      <img src={salsa} alt="Salsa" />
      <h3>For Music & Media</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>

    </div>
    </div>
  </div>
  )
}

export default WhatWeDo
