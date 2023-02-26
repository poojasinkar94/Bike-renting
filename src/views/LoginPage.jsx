import React, { useState } from "react";
import "../styles/LoginPage.css";
import Patch from "../images/patch.png";
import TextField from "@mui/material/TextField";
import Red from "../images/login and signup/red.png";
import White from "../images/login and signup/white.png";
import Input from "@mui/material/Input";

function LoginPage() {
  //   getter        setter
const [phoneNumber, setPhoneNumber] = useState('')
const title = 'Login'
  return (
    <div className="login_page">
      <div className="login">
      
        <div className="login_patch">
          <img className="patch" src={Patch} alt="Login-Patch" />
        </div>

        <div className="login_title">
        {/* jsx */}
          <h1>{title}</h1> 
          <p>for a seamless experience</p>
          <p>{phoneNumber}</p>
          <TextField
            className="textField"
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            value={phoneNumber}
            onChange={(event)=>{
              setPhoneNumber(event.target.value)
              console.log(event.target.value)
            }}
          />

          <button>get otp</button>

          <div className="resend_btn">
            {/* <input type={Text}></input> */}
            <TextField
              id="standard-name"
              // defaultValue="Small"
              className="textField"
              size="small"
              variant="standard"       // .textfield::hover{} .MuiInputBas-root 
              sx={{
              
                width:'100%',
                '& .MuiInputBase-root':{

                display:'flex',
                alignItems:'flex-end',


                paddingBottom:'10px'
                },
              }}
              InputProps={{ endAdornment: <button onClick={()=>{console.log('clicked')
              }} >resend</button> }}
            />
            {/* <button>resend</button> */}
          </div>

          <button>Submit</button>

        </div>
          <div className="puzzle_img">

            <img className="red-image" src={Red} alt="red-image" />
            <img className="white-image" src={White} alt="white-image" />
          </div>
      </div>
    </div>
  );
}

export default LoginPage;
