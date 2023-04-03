import React from 'react'
import HomePatch from "../../images/adminHomePage/admin_home_page_patch1.png";


function Patch(props) {
  return (
    <div className="Home_Page_title">
          <div className="Home_Page_patch">
            <h1>{props.label}</h1>
            
            <div>
              <img className="HomePatch" src={HomePatch} alt="HomePatch1" />

              <img className="HomePatch" src={HomePatch} alt="HomePatch2" />
            </div>
          </div>
    </div>
  )
}

export default Patch
