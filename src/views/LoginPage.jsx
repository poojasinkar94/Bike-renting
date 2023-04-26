import React, { useState } from "react";
import "../styles/LoginPage.css";
import Patch from "../images/patch.png";
import TextField from "@mui/material/TextField";
import Red from "../images/login and signup/red.png";
import White from "../images/login and signup/white.png";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
//import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebase, auth } from '../components/firebase';
function LoginPage() {
  // useNavigate is a hook provided by react dom library for dynamic navigation
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  //   getter        setter
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showResendOtp, setShowResendOtp] = useState(false);
  const [showGetOtp, setShowGetOtp] = useState(true);

  const handleGetOtp = () => {
    setShowResendOtp(true);
    setShowGetOtp(false);
  };
  const [final, setfinal] = useState('');
  const [show, setshow] = useState(false);
  const [otp, setotp] = useState('');

// // // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // firebase.initializeApp(firebaseConfig);
// //var auth = getAuth();
   const signin = () => {
  
    if (phoneNumber === "" || phoneNumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(phoneNumber, verify).then((result) => {
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
      // console.log(result.user.multiFactor.user.phoneNumber)
      sessionStorage.setItem('user-phonenumber', result.user.multiFactor.user.phoneNumber)
      //     sessionStorage.setItem('user-id', response.data.result[0].id)
      //     sessionStorage.setItem('login-status', response.data.isLoggedIn)
      //     sessionStorage.setItem('team_id', response.data.result[0].team_id)
      //     sessionStorage.setItem('token', response.data.token)
      navigateToHome()
    }).catch((err) => {
        alert("Wrong code");
    })
}

  const title = "Login";
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
          {/* <form action="">
            <div className="input_name">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" maxLength={10} required/>
            </div>
          </form> */}
          {/* {showGetOtp && (
            <div>
              <button onClick={handleGetOtp}>get otp</button>
            </div>
          )} */}

          {/* {showResendOtp && (
            <div>
              <div className="resend_btn">
                <input type="text" value={""} />
                <button>resend</button>
              </div>

              <button onClick={navigateToHome}>Submit</button>
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


export default LoginPage;
