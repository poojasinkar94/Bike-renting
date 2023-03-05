import React from 'react'
import '../styles/order.css'
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import Logo from '../images/order/order_page_logo.png'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Order_Bike from '../images/order/order_bike.png'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


function Order() {
  return (
    <section className='main_order'>
    
    <div className="order">
    
       <div className="order_icons">
           <KeyboardBackspaceSharpIcon/>
           <CallSharpIcon/>
       </div>

       <div className="order_logo">
           <img className='HomePageLogo' src={Logo} alt="HomePageLogo" /> 
           <h1>Kaushik khandelwal </h1>
       </div>

       <div className="order_detials">
           <div className='contact'>
               <p>+91 9672602342</p>
               <EditSharpIcon/>
           </div>

           <div className='aadhar_front'>
               <p>Aadhar Card front</p>
               <button>Aadhar Card front</button>
           </div>

           <div className='aadhar_back'>
               <p>Aadhar Card back</p>
               <button>Aadhar Card back</button>
           </div>

           <div className='license'>
               <p>Driving license</p>
               <button>Driving license</button>
           </div>

           <p id='bottom_title'>
           Incase of emergency or need assistance please call
           </p>

           <div className='terms'>
               <p>privacy policy</p>
               <p>Terms and condition</p>
           </div>
       </div>

       <div className="order_patch">
          <h1>Your orders</h1>
       </div>

       <div className="order_bike">

        <div className="left_content">
          <img className='orderBike' src={Order_Bike} alt="orderBike" />
        </div>

        <div className="right content">
        <div className='available_icon'>
          <RadioButtonCheckedIcon style=
          {{
            color:"#38950D",
            // marginTop:"px",
            marginRight:"8px"
          }}/>
          <p>to be started</p>
        </div>

        </div>

       </div>
          

    </div>

      
    </section>
  )
}

export default Order
