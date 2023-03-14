import React, { useState } from "react";
import "../styles/LoginPage.css";
import Patch from "../images/patch.png";
import TextField from "@mui/material/TextField";
import Red from "../images/login and signup/red.png";
import White from "../images/login and signup/white.png";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";

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

          <form action="">
            <div className="input_name">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" maxLength={10} required/>
            </div>
          </form>
          {showGetOtp && (
            <div>
              <button onClick={handleGetOtp}>get otp</button>
            </div>
          )}

          {showResendOtp && (
            <div>
              <div className="resend_btn">
                <input type="text" value={""} />
                <button>resend</button>
              </div>

              <button onClick={navigateToHome}>Submit</button>
            </div>
          )}
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
