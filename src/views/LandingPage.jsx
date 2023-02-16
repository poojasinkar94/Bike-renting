import React from 'react'
import '../styles/landingPage.css'
import Bike from '../images/landing-page/bike.png'
import Air from '../images/landing-page/air-plane.png'
import Back from '../images/landing-page/feautres.png'

function LandingPage() {
  return (
    <div>
      <section className='banner'>
      {/* header */}
          <div></div>
      {/* title */}
          <div className='banner-content'>
          <div className='title'>
            <h1><span>For</span> everyday</h1>
            <h1><span>bik</span>es, Our</h1>
            <h1><span>collection of bikes.</span></h1>
          </div>
      {/* button */}
          <div className='button-rent-now'>
            <button><img className='bike_image' src={Bike} alt='cartoon_bike'/>rent now</button>
          </div>
          </div>
      {/* side image */}
          <div></div>
      </section>
      {/* About us */}
      <section className='about-us'>
          <div className="air_plane">
          <img className='air_image' src={Air} alt='Air_plane'/> 
          </div>
          <div className='left-content'>
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Nibh adipiscing enim nibh amet turpis sit. Platea convallis sit aliquam mi morbi amet ac bibendum. Vel tellus in pharetra tellus. Eget nisl odio facilisi consequat risus. Cras sed euismod aliquam vestibulum auctor nibh. Molestie mi feugiat iaculis amet egestas vitae ipsum. Porta id sodales ut dui .</p>
          </div>

          <div className='right-content'>
          <img className='bg' src={Back} alt='Background'/>
          </div>
      </section>
    </div>
  )
}

export default LandingPage
