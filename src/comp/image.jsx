import React from 'react'
import Logo from '../assets/Logo.png'
import './comp.css'
  
const image = () => {
  return (
    <div className='ImageA'>
    <div id='logo'>
      <img src={Logo} alt='Logo Image'/>
    </div>
    </div>
  )
}

export default image