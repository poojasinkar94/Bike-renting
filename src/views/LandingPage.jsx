import React from 'react'
import '../styles/landingPage.css'
import Bike from '../images/landing-page/bike.png'
import Air from '../images/landing-page/air-plane.png'
import Back from '../images/landing-page/feautres.png'
import Patch from '../images/header/header_patch.png'
import Call from '../images/header/call.png'
import Whatsup from '../images/header/whatsup.png'
import Login from '../images/header/login.png'
import ProductCard from '../components/ProductCard'
import { useNavigate } from "react-router-dom";
import IconButton from '../components/common/IconButton'

const BIKE_DATA = [
  {
    name: "Avaitor",
    pricePerHour: 20,
    pricePerDay: 300,
    available: true,
  },
  {
    name: "Jupitor",
    pricePerHour: 18,
    pricePerDay: 250,
    available: true,
  },
  {
    name: "Activa",
    pricePerHour: 20,
    pricePerDay: 300,
    available: false,
  },
  {
    name: "Pleasure",
    pricePerHour: 15,
    pricePerDay: 200,
    available: false,
  },
  {
    name: "Vispa",
    pricePerHour: 25,
    pricePerDay: 300,
    available: false,
  },
  {
    name: "Activa",
    pricePerHour: 20,
    pricePerDay: 300,
    available: false,
  },
];

function LandingPage() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  }
  return (
    <div>

      {/* banner */}

      <section className='banner'>
      {/* header */}
          {/* <div className='header'>
          <div className="header_content">
            <img className='Header_Patch' src={Patch} alt="Header_Patch" />
            <p>Contact us</p>

            <div className='icons'>
            <div className='Call_icon'>
            <img className='Call_icon' src={Call} alt="Call_icon" />
            <div/>

            <div className='Whatsup_icon'>
            <img className='Whatsup_icon' src={Whatsup} alt="Whatsup_icon"/>
            </div>

            <div className='Login_icon'>
            <img className='Login_icon' src={Login} alt="Login_icon"/>
            </div>
            </div>
            
            </div>
            
          </div>
             
          </div> */}
      {/* title */}
          <div className='banner-content'>
          <div className='title'>
            <h1><span>For</span> everyday</h1>
            <h1><span>bik</span>es, Our</h1>
            <h1><span>collection of bikes.</span></h1>
          </div>
      {/* button */}
          {/* <div className='button-rent-now'>
            <button onClick={navigateToLogin}><img className='bike_image' src={Bike} alt='cartoon_bike'/>rent now</button>
          </div> */}
          <IconButton onClick={navigateToLogin}
            width={'200px'}
            label={'Rent now'}
          />
          </div>
      {/* side image */}

      <div className="air_plane">
          <img className='air_image' src={Air} alt='Air_plane'/> 
      </div>

      </section>
      
      {/* About us */}

      <section className='about-us'>
          
          <h1>About us</h1>
          <div className='content'>

          <div className='left-content'>
          <p>Lorem ipsum dolor sit amet consectetur. Nibh adipiscing enim nibh amet turpis sit. Platea convallis sit aliquam mi morbi amet ac bibendum. Vel tellus in pharetra tellus. Eget nisl odio facilisi consequat risus. Cras sed euismod aliquam vestibulum auctor nibh. Molestie mi feugiat iaculis amet egestas vitae ipsum. Porta id sodales ut dui .</p>
          </div>

          <div className='right-content'>
          <img className='bg' src={Back} alt='Background'/>
          </div>

          </div>
      </section>

      {/* product card */}

      <section className='products'>
        <div className="card_title">
            <h1>Choose your bike</h1>
            <p>Our Fleet of bikes</p>
        </div>
        
        <div className='card_content'>

         {BIKE_DATA.map((data)=>(
          <ProductCard 
            name={data.name}
            pricePerHour={data.pricePerHour}
            pricePerDay={data.pricePerDay}
            available={data.available}
            navigateTo={"/login"}
          />
         ))}     
        
        
        </div>
      </section>
    

    </div>
  )
}

export default LandingPage

