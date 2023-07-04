import React from "react";
import "../styles/order.css";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Logo from "../images/order/order_page_logo.png";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import Order_Bike from "../images/order/order_bike.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Patch from "../components/common/Patch";
import EditIcon from '../images/order/edit_Icon.png'
import { useNavigate } from 'react-router-dom';
import  { useState, useEffect } from "react";
import Axios from "axios";

function Order() {
  const [bookingDeatils, setBookingDetails] = useState('')

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/home");
  }

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

  return (
    <section className="main_order">
      <div className="order">
        <div className="order_icons">
          <KeyboardBackspaceSharpIcon 
            onClick = {navigateToHomePage}
          />
          <CallSharpIcon />
        </div>

        <div className="order_logo">
          <img className="HomePageLogo" src={Logo} alt="HomePageLogo" />
          <h1>{bookingDeatils.username} </h1>
        </div>

        <div className="order_detials">
          <div className="contact">
            <p>{bookingDeatils.phoneNumber}</p>
            <EditSharpIcon />
          </div>

          <div className="aadhar_front">
            <p>Aadhar Card front</p>
            <button>Aadhar Card front</button>
          </div>

          <div className="aadhar_back">
            <p>Aadhar Card back</p>
            <button>Aadhar Card back</button>
          </div>

          <div className="license">
            <p>Driving license</p>
            <button>Driving license</button>
          </div>

          <p id="bottom_title">
            Incase of emergency or need assistance please call
          </p>

          <div className="terms">
            <p>privacy policy</p>
            <p>Terms and condition</p>
          </div>
        </div>

        <div className="order_patch">
          <Patch label="Your orders" />
        </div>

        <div className="order_bike">
          <div className="left_content">
            <img className="orderBike" src={Order_Bike} alt="orderBike" />
          </div>

          <div className="middle_content">
            <div className="available_icon">
              <RadioButtonCheckedIcon
                style={{
                  color: "#38950D",
                  // marginTop:"px",
                  marginRight: "8px",
                }}
              />
              <p>to be started</p>
            </div>

            <div className="orderBikeDetails">
              <div className="orderBikeName">
                <h2>{bookingDeatils.bikeName} </h2>
              </div>

              <div className="orderBikeDateHour">
                <p>{bookingDeatils.from_date}</p>
                <p>To</p>
                <p>{bookingDeatils.to_date}</p>
                <p>{bookingDeatils.hours}</p>
              </div>
            </div>

            <div className="orderBikePrice">
              <h2> ₹ 5500 </h2>
              <p>Paid</p>
            </div>
          </div>

          <div className="right_content">
            <img className="editIcon" src={EditIcon} alt="editIcon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
