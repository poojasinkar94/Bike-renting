import React from 'react'
import '../styles/productCard.css'
import Card from '../images/product-card/card 1.png'
import Bike from '../images/landing-page/bike.png'
import Arrow from '../images/product-card/arrow.png'
import { useNavigate } from "react-router-dom";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function ProductCard(props) {

  const {name,pricePerHour,pricePerDay,available,navigateTo}=props
  const navigate = useNavigate();
   

  const navigateToLogin = () => {
    let path = navigateTo? navigateTo:"/login";
    console.log(path);
    navigate(path);
  }
  return (
    
        <div className='card'>
        <img className='card_image' src={Card} alt='Card_image'/>
        <div className='card_btn'>
        <h2>{name}</h2>
        <div className='available_icon'>
          <RadioButtonCheckedIcon style=
          {{
            color:"#38950D",
            marginTop:"15px",
            marginRight:"8px"
          }}/>
          <p>available</p>
        </div>
        <button onClick={navigateToLogin}><img className='bike_image' src={Bike} alt='cartoon_bike'/>rent now</button>
        </div>
        <div className='card_price'>
            <p>&#8377; {pricePerHour}/hr </p>
             <img className='arrow_image' src={Arrow} alt='Arrow_image'/> 
             <p>&#8377;{pricePerDay}/day</p>
        </div>
        </div>

        

       
     
    
  )
}

export default ProductCard
