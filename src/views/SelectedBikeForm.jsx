import React from 'react'
import '../styles/selectedBikeForm.css'
import Arrow from '../images/selected bike form/arrow.png'
import Bike from '../images/selected bike form/bikeSelect.png'
import Bottom from '../images/selected bike form/bottom_line.png'


function SelectedBikeForm() {
  return (
    <section className='SelectedBikeForm'>

    <div className="bikeForm">
        <div className="bikeSelect">
           <img className='Arrow' src={Arrow} alt="Arrow" />
           <p>Select Bike</p>
           <h2>Aviator</h2>
        </div>
        <div className="bike">
           <img className='Bike' src={Bike} alt="Bike" />
        </div>
    </div>

    <div className="bikeForm">
        <div className="left_content">
           <p> When do you want it?</p>
           <h2>22 Feb</h2>
           <p>How long you want it?</p>
           <h2>1 hour</h2>
        </div>
        <div className="right_content">
           <p> Charges</p>
           <div className='Details_bg_color'>
            <p>₹ 1500 + ₹ 4000*</p>
            <h2>= ₹ 5500</h2>
            <p id='para2'>*refundable security deposit</p>
           </div>
        </div>
    </div>

    <div className="bikeForm">
        <img className='bottomLine' src={Bottom} alt="bottomLine" />
    </div>

    <div className="details">
        <form>
        </form>
    </div>


   
    
    </section>
  )
}

export default SelectedBikeForm
