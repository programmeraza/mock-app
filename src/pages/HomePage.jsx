import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Navigate from '../components/Navigate/Navigate'

const HomePage = () => {
  return (
    <>
      <div className="home">
        <Dashboard />
        <Navigate />
      </div>
    </>
  )
}

export default HomePage
