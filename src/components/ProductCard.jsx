import React from 'react'
import '../styles/productCard.css'
import Card from '../images/product-card/card 1.png'
import Bike from '../images/landing-page/bike.png'
import Arrow from '../images/product-card/arrow.png'

function ProductCard() {
  return (
    <div>
      <section>
        <div className="card_title">
            <h1>Choose your bike</h1>
            <p>Our Fleet of bikes</p>
        </div>
        
        <div className='card_content'>

        <div className='card'>
        <img className='card_image' src={Card} alt='Card_image'/>
        <div className='card_btn'>
        <h2>Ather</h2>
        <button><img className='bike_image' src={Bike} alt='cartoon_bike'/>rent now</button>
        </div>
        <div className='card_price'>
            <p>&#8377; 20/hr </p>
             <img className='arrow_image' src={Arrow} alt='Arrow_image'/> 
             <p>&#8377;300/day</p>
        </div>
        </div>

        <div className='card'>
        <img className='card_image' src={Card} alt='Card_image'/>
        <div className='card_btn'>
        <h2>Ather</h2>
        <button><img className='bike_image' src={Bike} alt='cartoon_bike'/>rent now</button>
        </div>
        <div className='card_price'>
            <p>&#8377; 20/hr </p> 
            <img className='arrow_image' src={Arrow} alt='Arrow_image'/> <p>&#8377;300/day</p>
        </div>
        </div>

        <div className='card'>
        <img className='card_image' src={Card} alt='Card_image'/>
        <div className='card_btn'>
        <h2>Ather</h2>
        <button><img className='bike_image' src={Bike} alt='cartoon_bike'/>rent now</button>
        </div>
        <div className='card_price'>
            <p>&#8377; 20/hr <img className='arrow_image' src={Arrow} alt='Arrow_image'/> &#8377;300/day</p>
        </div>
        </div>

        </div>
      </section>
    </div>
  )
}

export default ProductCard
