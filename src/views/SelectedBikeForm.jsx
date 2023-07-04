import React from 'react'
import  { useState, useEffect } from "react";
import Axios from "axios";

import '../styles/selectedBikeForm.css'
import Bike from '../images/selected bike form/bikeSelect.png'
import Bottom from '../images/selected bike form/bottom_line.png'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import BottomPatch from '../images/selected bike form/bottom_patch.png'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

function SelectedBikeForm() {
  const [bookingDeatils, setBookingDetails] = useState('')
  const [aadharBack, setAadharBack] = useState(null);
  const [aadharFront, setAadharFront] = useState(null);
  const [drivingLisence, setDrivingLisence] = useState(null)

  let config_get = {
    params: {
      phoneNumber: sessionStorage.getItem("user-phonenumber")
    }
  }

  useEffect(() => {
    // console.log(sessionStorage.getItem("user-phonenumber"))
    // setLoading(true);
    Axios.get("http://localhost:3002/getBookingDetails", config_get
    ).then((response) => {
            //console.log (response.data)
            setBookingDetails(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            // setLoading(false);
        });
}, []);

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


  const uploadDocs = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', aadharBack);
    formData.append('file', aadharFront);
    formData.append('file', drivingLisence);

    try {
     Axios.post('http://localhost:3002/upload_files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then((response) => {
        //console.log(response.data)
        var i = 0;
        const imageArray = response.data
        imageArray.forEach(imageLink => {
          Axios.post('http://localhost:3002/addBookingDocuments', {
            user_id: bookingDeatils.user_id,
            booking_id: bookingDeatils.id,
            image_url: imageLink.location
          }).then(
            i = i + 1,
            //console.log(i)
          )
          
        }
        );
        if (i == 3) {
        navigateToOrder()

        }
      });
    } catch (err) {
      console.log(err)
    }

  }
  const navigate = useNavigate();

 
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
           <p>Selected Bike</p>
           <h2>{bookingDeatils.bikeName}</h2>
        </div>
        <div className="bike">
           <img className='Bike' src={Bike} alt="Bike" />
        </div>
    </div>

    <div className="bikeForm">
        <div className="left_content">
           <p> When do you want it?</p>
           <h2>{bookingDeatils.from_date}</h2>
           <p>to</p>
           <h2>{bookingDeatils.to_date}</h2>

           <p>How long you want it?</p>
           <h2>{bookingDeatils.hours}</h2>
        </div>
        <div className="right_content">
           <p> Charges</p>
           <div className='Details_bg_color'>
            <p>₹ {bookingDeatils.day_charge} + ₹ 4000*</p>
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
        <div>{bookingDeatils.username}</div>
        {/* <input type="text" id="fname" name="fname"/> */}
        </div>
          
        <div className='input_name'>
        <label for="phone">Phone number</label>
        <div>{bookingDeatils.phoneNumber}</div>
        {/* <input type="tel" id="phone" name="phone" maxLength={10} required/> */}
        </div>
        </form>
        
        <div className='documents'>
        <form onSubmit={uploadDocs}>


        <div className="upload">
          <p>Aadhar Card front</p>
          <input type="file" id='uploadAadharFront' onChange={(e) => {setAadharFront(e.target.files[0])}}/>
        </div>

        <div className="upload">
          <p>Aadhar Card back</p>
          <input type="file" id='uploadAadharBack' onChange={(e) => {setAadharBack(e.target.files[0])}}/>

        </div>

        <div className="upload">
          <p>Driving license</p>
          <input type="file" id='uploadDriving License' onChange={(e) =>{setDrivingLisence(e.target.files[0])}}/>
        </div>
         {/* <button type="submit">Upload</button> */}
        </form>
        </div>
    </div>
    
    <div className="btn_pay">
    <button onClick={uploadDocs}>Upload</button>
    </div>
    <div className="btn_pay">
    <button onClick={uploadDocs}>Pay</button>
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
