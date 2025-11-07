import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
        <Routes>

          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/' element={<LoginPage  />}></Route>
          <Route path='/dashboard' element={<ProtectedRoute ><Dashboard /></ProtectedRoute >}></Route>
            {/* <Route path="/tasks" element={<ProtectedRoute><TasksListPage /></ProtectedRoute>} /> */}
        </Routes>
      <Footer />
       <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  )
}

export default App
