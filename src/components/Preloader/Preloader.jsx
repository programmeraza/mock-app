import React from 'react'
import './Preloader.scss'

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__box">
        <div className="preloader__spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Preloader
