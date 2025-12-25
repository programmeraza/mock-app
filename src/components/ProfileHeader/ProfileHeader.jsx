import React from 'react'
import "./ProfileHeader.scss"
import { Link } from 'react-router-dom'

const ProfileHeader = () => {
  return (
    <>
      <div className="head">
        <div className="container">
            <div className="head__wrapper">
                <Link to={'/'}>
                    <button className='head__btn'>
                        <img src="./arrow1.svg" alt="" />
                    </button>
                </Link>
                <h1>Settings</h1>
                <div className='head__div'></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProfileHeader
