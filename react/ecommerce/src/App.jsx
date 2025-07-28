import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import products from './data'

function App() {
    const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
    {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)}
      {/* <RegisterPage />
      <LoginPage /> */}

      <Dashboard products={products}/>
    </>
  )
}

export default App
