import React from 'react'
import './Preloader.scss'
import 'animate.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__box animate__animated animate__fadeIn">
        <img src="./logo-preloader.svg" alt="" />
      </div>
    </div>
  )
}

export default Preloader
