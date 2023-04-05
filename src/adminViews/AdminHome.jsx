import React, { useState } from "react";
import "../styles/adminHome.css";
import AdminLogo from "../images/adminHomePage/admin_home_page_logo.png";
import SettingIcon from "../images/adminHomePage/setting_icon.png";
import IconButton from "../components/common/IconButton";
import AdminHomePatch1 from "../images/adminHomePage/admin_home_page_patch1.png";
import AdminHomePatch2 from "../images/adminHomePage/admin_home_page_patch2.png";
import Patch from "../components/common/Patch";
import TransitionDialogBox from "../components/common/TransitionDialogBox";

const PREVIOUS_ORDER_DATA = [
  {
    name:"Avaitor",
    bikeNumber:"MH48CG6055",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"to be delivered",
  },
  {
    name:"Jupitor",
    bikeNumber:"MH48CG6050",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"delivered",
  },
  {
    name:"Activa",
    bikeNumber:"MH48CG6040",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"delivered",
  },
  {
    name:"Pleasur",
    bikeNumber:"MH48CG6040",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"delivered",
  },
  {
    name:"Vispa",
    bikeNumber:"MH48CG6040",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"delivered",
  },
  {
    name:"Access",
    bikeNumber:"MH48CG6040",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"delivered",
  },
  {
    name:"Activa 6G",
    bikeNumber:"MH48CG6040",
    startDate: 22,
    endDate: 28,
    totalHour:100,
    price:5500,
    available:"cancelled",
  },
];

function AdminHome() {
  const [openDialogBox, setOpenDialogBox] = useState(false);

  const handleOpenDialogBox = () => {
    setOpenDialogBox(true);
  };

  const handleCloseDialogBox = () => {
    setOpenDialogBox(false);
  };

  return (
    <div className="Admin_Home_Page">
      <div className="Admin_Main_Heading">
        {/* header */}

        <div className="heading">
          <div className="admin_profile_name">
            <img
              className="AdminHomePageLogo"
              src={AdminLogo}
              alt="AdminHomePageLogo"
            />

            <h1>Kaushik khandelwal</h1>
          </div>

          <img className="SettingIcon" src={SettingIcon} alt="SettingIcon" />
        </div>

        {/* rent now button */}

        <div className="adminBtn">
          <IconButton 
            onClick = {handleOpenDialogBox}
          />
        </div>

        <div className="patch">
        <Patch 
            label= 'Previous order'
        />
        </div>

        {/* bike list */}

        <div className="Admin_bike_list">
          <p>22 feb</p>
          <div className="list">

            <div className="bikeDetails">
              <h2>Aviator</h2>
              <p>MH48CG6055</p>
            </div>

            <div className="bikeDate">
              <div className="date">
                <p>22 feb</p>
                <p>28 feb</p>
              </div>
              <p id="pricePara">100hrs</p>
            </div>

            <div className="bikePrice">
                <h2>₹ 5500</h2>
                <p id="ToBeDelivered">to be delivered</p>
            </div>

          </div>
        </div>

        <div className="Admin_bike_list">
          
          <div className="list">

            <div className="bikeDetails">
              <h2>Aviator</h2>
              <p>MH48CG6055</p>
            </div>

            <div className="bikeDate">
              <div className="date">
                <p>22 feb</p>
                <p>28 feb</p>
              </div>
              <p id="pricePara">100hrs</p>
            </div>

            <div className="bikePrice">
                <h2>₹ 5500</h2>
                <p id="delivered">delivered</p>
            </div>

          </div>
        </div>

        <div className="Admin_bike_list">
          
          <div className="list">

            <div className="bikeDetails">
              <h2>Aviator</h2>
              <p>MH48CG6055</p>
            </div>

            <div className="bikeDate">
              <div className="date">
                <p>22 feb</p>
                <p>28 feb</p>
              </div>
              <p id="pricePara">100hrs</p>
            </div>

            <div className="bikePrice">
                <h2>₹ 5500</h2>
                <p id="cancelled">cancelled</p>
            </div>

          </div>
        </div>

        
      </div>

      <TransitionDialogBox 
        open={openDialogBox}
        handleClose={handleCloseDialogBox}
        admin
      />

    </div>
  );
}

export default AdminHome;
