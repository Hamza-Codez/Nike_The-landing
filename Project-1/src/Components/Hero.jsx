import React from 'react'

const Hero = () => {
  return (
    <main className='Hero'>
       <div className="heroContents">
        <h1>
        YOUR FEET DESERVE THE BEST
        </h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="heroBtn">
          <button>Shop Now</button>
          <button className='secBtn'>Category</button>
        </div>
        <div className="shopsites">
          <p>Also Available On</p>
        </div>
        <div className="shopsLogos">
          <img src="/images/amazon.png" alt="amazon logo" />
          <img src="/images/flipkart.png" alt="flipkart logo" />
        </div>
       </div>
       <div className="heroImg">
          <img src="/images/shoe_image.png" alt="hero_section logo" />     
       </div>
    </main>
  )
}

export default Hero