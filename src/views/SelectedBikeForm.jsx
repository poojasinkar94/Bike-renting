import React from 'react'
import '../styles/selectedBikeForm.css'
import Arrow from '../images/selected bike form/arrow.png'
import Bike from '../images/selected bike form/bikeSelect.png'
import Bottom from '../images/selected bike form/bottom_line.png'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import BottomPatch from '../images/selected bike form/bottom_patch.png'

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
        <h2>Details</h2>
        
        
        <div className="upload">
          <p>Aadhar Card front</p>
          <div className="upload_icon">
            <FileUploadOutlinedIcon/>
          </div>
        </div>

        <div className="upload">
          <p>Aadhar Card back</p>
          <div className="upload_icon">
            <FileUploadOutlinedIcon/>
          </div>
        </div>

        <div className="upload">
          <p>Driving license</p>
          <div className="upload_icon">
            <FileUploadOutlinedIcon/>
          </div>
        </div>
        
    </div>
    
    <div className="btn_pay">
    <button>Pay</button>
    </div>

    {/* <div className="bottom_patch">
       <img className='bottomPatch' src={BottomPatch} alt="bottomPatch" />

       <img className='bottomPatch' src={BottomPatch} alt="bottomPatch" />

       <img className='bottomPatch' src={BottomPatch} alt="bottomPatch" />

       <img className='bottomPatch' src={BottomPatch} alt="bottomPatch" />

       <img className='bottomPatch' src={BottomPatch} alt="bottomPatch" />

    </div> */}

</section>
  )
}

export default SelectedBikeForm
