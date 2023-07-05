import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../styles/homePage.css";
import Logo from "../images/HomePage/home_page_logo.png";
import Call from "../images/HomePage/home_page_call.png";
import HomePatch1 from "../images/HomePage/home_page_patch1.png";
// import HomePatch2 from '../images/HomePage/home_page_patch2.png';
import ProductCard from "../components/ProductCard";
import TransitionDialogBox from "../components/common/TransitionDialogBox";
import Patch from "../components/common/Patch"

const BIKE_DATA = [
  {
    name: "Avaitor",
    pricePerHour: 20,
    pricePerDay: 300,
    available: true,
  },
  {
    name: "Jupitor",
    pricePerHour: 18,
    pricePerDay: 250,
    available: true,
  },
  {
    name: "Activa",
    pricePerHour: 20,
    pricePerDay: 300,
    available: false,
  },
  {
    name: "Pleasure",
    pricePerHour: 15,
    pricePerDay: 200,
    available: false,
  },
  {
    name: "Vispa",
    pricePerHour: 25,
    pricePerDay: 300,
    available: false,
  },
  {
    name: "Pleasure",
    pricePerHour: 15,
    pricePerDay: 200,
    available: false,
  },
];

function HomePage() {
  const api = require('../components/config/API.json')
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [rowData, setRowData] = useState('')

  const handleOpenDialogBox = () => {
    setOpenDialogBox(true);
  };

  const handleCloseDialogBox = () => {
    setOpenDialogBox(false);
  };

  let config_get = {
    params: {
      phoneNumber: sessionStorage.getItem("user-phonenumber")
    }
  }

  useEffect(() => {
    // console.log(sessionStorage.getItem("user-phonenumber"))
    // setLoading(true);
    Axios.get(api.GETUSERINFO, config_get
    ).then((response) => {
            //console.log (response.data)
            setRowData(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            // setLoading(false);
        });
}, []);

  return (
    <div className="Home_Page">
      <div className="main_heading">
        <div className="heading">
          <div className="profileName">
            <img className="HomePageLogo" src={Logo} alt="HomePageLogo" />

            <h1>{rowData.username}</h1>
          </div>

          <img className="HomePageCall" src={Call} alt="HomePageCall" />
        </div>
        
        <div className="patch">
        <Patch
          label ='Good Morning'
        />
        </div>

        <div className="card_content">
          {BIKE_DATA.map((data) => (
            <ProductCard
              name={data.name}
              pricePerHour={data.pricePerHour}
              pricePerDay={data.pricePerDay}
              available={data.available}
              rentNowBtnClick={handleOpenDialogBox}
            />
          ))}
        </div>
      </div>

      <TransitionDialogBox
        open={openDialogBox}
        handleClose={handleCloseDialogBox}
      />
    </div>
  );
}

export default HomePage;
