import React from 'react'
import image2 from '../Assets/image2.png'

const WhyChooseVera = () => {
  return (
    <div className='whyContainer'>
      <div className='whySection'>
        <p>Why Choose Vera?</p>
        <h1>We are the bridge between creative marketing and storytelling</h1>
      </div>
      <div className='whyImage'>
        <img src={image2} alt='image' />
      <div className='whyVera'>
            <h1 className='whyNum'>01</h1>
          <h3>We Speak Startup & Storytelling Fluently</h3>
          <span>You don’t need another agency that ‘kinda gets it.’ We live in both worlds—the fast-paced chaos of building something new and the art of making people care.</span>
          <h1 className='whyNum2'>02</h1>
          <h3>We Make People Feel</h3>
          <span>Attention isn’t enough. If your audience doesn’t feel something, they 
              won’t act. We craft stories that connect, campaigns that resonate, and
              launches that leave an imprint.</span>
          <h1 className='whyNum'>03</h1>
          <h3>We Mix Strategy with Execution</h3>
          <span>This isn’t just a place for ideas—we build, test, refine, and deliver with purpose. Driven by precision and innovation, we ensure every project exceeds expectations. No guesswork, just results. Every time.</span>
      
      </div>
      </div>
    </div>
  )
}

export default WhyChooseVera
