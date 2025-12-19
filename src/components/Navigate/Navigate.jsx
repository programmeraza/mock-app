import React from 'react'
import "./Navigate.scss"
import { RiHome9Line } from "react-icons/ri";
import { RiBookletLine } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';



const Navigate = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav__wrapper">
            <Link to={'/'} className="nav__card">
              <div className="nav__icon">
                <RiHome9Line />
              </div>
              <p>Home</p>
            </Link>
            <Link to={'/test'} className="nav__card">
              <div className="nav__icon">
                <RiBookletLine />
              </div>
              <p>Mock Test</p>
            </Link>
            <Link to={'/settings'} className="nav__card">
              <div className="nav__icon">
                <RiSettings3Line />
              </div>
              <p>Settings</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigate
