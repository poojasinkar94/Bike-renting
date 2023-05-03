import React, { useState } from "react";
import "../styles/signupPage.css";
import Patch from "../images/patch.png";
import TextField from "@mui/material/TextField";
import Red from "../images/login and signup/red.png";
import White from "../images/login and signup/white.png";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

function SignupPage() {

  const [final, setfinal] = useState('');
  //   getter        setter
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [showResendOtp, setShowResendOtp] = useState(false);
  const [ showGetOtp, setShowGetOtp] = useState(true);
  const [show, setshow] = useState(false);
  const [otp, setotp] = useState('');
  const handleGetOtp = () => {
    setShowResendOtp(true);
    setShowGetOtp(false);
  };
  const auth = getAuth();
   // Sent OTP
   const signin = () => {
  
    if (phoneNumber === "" || phoneNumber.length < 10) return;

    let verify = new auth.RecaptchaVerifier('recaptcha-container');
    signInWithPhoneNumber(phoneNumber, verify).then((result) => {
        setfinal(result);
        alert("code sent")
        setshow(true);
    })
        .catch((err) => {
            alert(err);
            window.location.reload()
        });
}

// Validate OTP
const ValidateOtp = () => {
    if (otp === null || final === null)
        return;
    final.confirm(otp).then((result) => {
        // success
    }).catch((err) => {
        alert("Wrong code");
    })
}

  
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };


  const title = "Sign Up";

  return (
    <div className="signup_page">
      <div className="signup">
        <div className="signup_patch">
          <img className="patch" src={Patch} alt="Signup-Patch" />
        </div>

        <div className="signup_title">
          {/* jsx */}
          <h1>{title}</h1>
          <p>for a seamless experience</p>

          {/* <form action=""> */}
          <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={phoneNumber} onChange={(e) => { 
                       setPhoneNumber(e.target.value) }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
            {/* <div className="input_name">
              <label for="fname">Name</label>
              <input type="text" id="fname" name="fname" />
            </div> */}

            {/* <div className="input_name">
              <label for="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength={10}
                required
              />
            </div> */}
          {/* </form> */}

          {/* {showGetOtp && (
            <div>
              <button onClick={signin}>get otp</button>
            </div>
          )} */}

          {/* {showResendOtp && (
            <div>
              <div className="resend_btn">
                <button
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  resend
                </button>
              </div>
              

              <button onClick={navigateToHome}>
              Submit</button>
            </div>
          )} */}
        </div>

        <div className="puzzle_img">
          <img className="red-image" src={Red} alt="red-image" />

          <img className="white-image" src={White} alt="white-image" />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
