import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/registr' element={<RegistrationPage/>}/>
        {/* <Route path='*' element={<ErrorPage/>}/> */}
      </Routes>
    </>
  )
}

export default App
