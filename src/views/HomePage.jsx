import React from 'react'
import '../styles/homePage.css';
import Logo from '../images/HomePage/home_page_logo.png';
import Call from '../images/HomePage/home_page_call.png';
import HomePatch1 from '../images/HomePage/home_page_patch1.png';
import HomePatch2 from '../images/HomePage/home_page_patch2.png';
import ProductCard from '../components/ProductCard'



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
            <img className='HomePatch' src={HomePatch1} alt="HomePatch1" />

            <img className='HomePatch' src={HomePatch2} alt="HomePatch2" />
            </div>
        </div>
        <ProductCard/>
        </div>

    </div>
  )
}

export default HomePage
