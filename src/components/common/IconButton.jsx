import React from 'react'
import Bike from '../../images/landing-page/bike.png';
import '../../styles/commonStyle.css';

function IconButton(props) {
    const {width,onClick} = props;
  return (
    
         <button 
              className='rent-now-btn'
              style={{
                width: width ? width : '165',
              }}

         onClick = {onClick}
         >
         <img className='bike_image' src={Bike} alt='cartoon_bike'/>
         <span
            style={{
                paddingLeft: '10px',
            }}
         />
         rent now
         </button>
    
  )
}

export default IconButton
