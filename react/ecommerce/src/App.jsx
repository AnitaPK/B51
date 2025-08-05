import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import products from './data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'

function App() {
    const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage setIsRegister={setIsRegister}/>}></Route>
          <Route path='/dashboard' element={<Dashboard  products={products} />}></Route>
          <Route path='/dashboard/:ID/*' exact element={<ProductInfo />}>
            
          </Route>
        </Routes>
      </BrowserRouter>




    {/* {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)} */}
      {/* <RegisterPage />
      <LoginPage /> */}
{/* 
      <Dashboard products={products}/> */}





    </>
  )
}

export default App
