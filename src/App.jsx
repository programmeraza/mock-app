import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader/Preloader'

function App() {

  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) return <Preloader />

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/registr" />}
        />

        <Route
          path="/registr"
          element={<RegistrationPage setIsAuth={setIsAuth} />}
        />
      </Routes>
    </>
  )
}

export default App
