import React from 'react'

function Hero() {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE BETTER</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sunt hic? Deserunt perspiciatis amet possimus unde? </p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='second-btn'>Category</button>
            </div>
            <div className='shopping'>
                <p>Also available on</p>
            </div>
            <div className='brand-icon'>
                <img src="images/amazon.png" alt="amazon" />
                <img src="images/flipkart.png" alt="flipkart" />
            </div>
        </div>
        <div className='hero-image'>
            <img src="/images/hero-image.png" alt="hero-image" />
        </div>
    </main>
  )
}

export default Hero