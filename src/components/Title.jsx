import React from 'react'
import logo from '../assests/logo.jpg';
import './Title.css';

const Title = () => {
  return (
    <div className="logo-flex">
        <img src={logo} className='logo' alt="" srcset="" />
        <div className="heading">
            <h1>Your spottabl team</h1>
            <p>Spottabl supports you all throughout</p>
        </div>
    </div>
  )
}

export default Title