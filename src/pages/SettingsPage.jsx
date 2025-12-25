import React from 'react'
import Navigate from '../components/Navigate/Navigate'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import ProfileCard from '../components/ProfileCard/ProfileCard.jsx'
import Profile from '../components/Profile/Profile'

const SettingsPage = () => {
  return (
    <>
      <ProfileHeader/>
      <Profile/>
      <ProfileCard/>
      <Navigate/>
    </>
  )
}

export default SettingsPage
