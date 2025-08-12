import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import products from './data'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'
import {ThemeProvider} from './context/ThemeProvider'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthProvider'

function App() {
    const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
    <ThemeProvider >
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage setIsRegister={setIsRegister}/>}></Route>
          <Route path='/dashboard' element={<Dashboard  products={products} />}></Route>
          <Route path='/dashboard/:ID/*' exact element={<ProductInfo />}>
            
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
</ThemeProvider>



    {/* {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)} */}
      {/* <RegisterPage />
      <LoginPage /> */}
{/* 
      <Dashboard products={products}/> */}





    </>
  )
}

export default App
