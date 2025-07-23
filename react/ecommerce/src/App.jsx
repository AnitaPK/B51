import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
    const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
    {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)}
      {/* <RegisterPage />
      <LoginPage /> */}
    </>
  )
}

export default App
