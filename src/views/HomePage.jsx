import React from 'react'
import '../styles/homePage.css';
import Logo from '../images/HomePage/home_page_logo.png';
import Call from '../images/HomePage/home_page_call.png';
import HomePatch1 from '../images/HomePage/home_page_patch1.png';
// import HomePatch2 from '../images/HomePage/home_page_patch2.png';
import ProductCard from '../components/ProductCard'

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
];

function HomePage() {
  return (
    <div className='Home_Page'>
        <div className="main_heading">
        <div className='heading'>
            <img className='HomePageLogo' src={Logo} alt="HomePageLogo" />

            <h1>Kaushik khandelwal</h1>

            <img className='HomePageCall' src={Call} alt="HomePageCall" />

        </div>

        <div className="Home_Page_title">
            <div className="Home_Page_patch">
            <h1>Good Morning!</h1>

            <div>
            <img className='HomePatch' src={HomePatch1} alt="HomePatch1" />

            <img className='HomePatch' src={HomePatch1} alt="HomePatch2" />
            </div>
            </div>
        </div>
        
        <div className='card_content'>
        {BIKE_DATA.map((data)=>(
          <ProductCard 
            name={data.name}
            pricePerHour={data.pricePerHour}
            pricePerDay={data.pricePerDay}
            available={data.available}
            navigateTo={"/form"}
          />
         ))}

        </div>

        </div>

    </div>
  )
}

export default HomePage
