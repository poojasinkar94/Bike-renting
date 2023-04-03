import React from 'react'
import '../../styles/commonStyle.css'

function Button(props) {
  return (
    <button onClick={props.onClick} className='submit_btn' style={{
      backgroundColor:props.backGroundColor 
      
    }}>
      
      {props.label}
    </button>
  )
}

export default Button
