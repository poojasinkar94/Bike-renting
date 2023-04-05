import React from 'react'
import '../styles/selectedBikeForm.css'
import Bike from '../images/selected bike form/bikeSelect.png'
import Bottom from '../images/selected bike form/bottom_line.png'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import BottomPatch from '../images/selected bike form/bottom_patch.png'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

function SelectedBikeForm() {

  const navigate = useNavigate();

  const navigateToOrder = () => {

    let path = window.location.pathname // "/admin/form" 
    // navigate("/Order");
    console.log(typeof path)
    if(path.includes("admin")){
      navigate("/admin/Order");
    }else{
      navigate("/Order");
    }

  }

  const navigateToAdminHomePage = () => {
    let path1 = window.location.pathname
    console.log(typeof path1)
    if(path1.includes("admin")){
      navigate("/admin/home");
    }else{
      navigate("/home");
    }
  }


  return (
    <section className='SelectedBikeForm'>

    <div className="bikeForm">
        <div className="bikeSelect">
           <KeyboardBackspaceSharpIcon 
            onClick = {navigateToAdminHomePage}
           />
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

        <form action="">
        <div className='input_name'>
        <label for="fname">Name</label>
        <input type="text" id="fname" name="fname"/>
        </div>
          
        <div className='input_name'>
        <label for="phone">Phone number</label>
        <input type="tel" id="phone" name="phone" maxLength={10} required/>
        </div>
        </form>
        
        <div className='documents'>

        <div className="upload">
          <p>Aadhar Card front</p>
          <div className="upload_icon_1">
            <label htmlFor="uploadAadharFront"><FileUploadOutlinedIcon/>
            </label>
            <input type="file" id='uploadAadharFront'/>
          </div>
        </div>

        <div className="upload">
          <p>Aadhar Card back</p>
          <div className="upload_icon_2">
            <label htmlFor="uploadAadharBack"><FileUploadOutlinedIcon/>
            </label>
            <input type="file" id='uploadAadharBack'/>
          </div>
        </div>

        <div className="upload">
          <p>Driving license</p>
          <div className="upload_icon_3">
            <label htmlFor="uploadDriving License"><FileUploadOutlinedIcon/>
            </label>
            <input type="file" id='uploadDriving License'/>
          </div>
        </div>
        
        </div>
    </div>
    
    <div className="btn_pay">
    <button onClick={navigateToOrder}>Pay</button>
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
