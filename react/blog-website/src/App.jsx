import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'
import UpdateBlog from './pages/UpdateBlog'

function App() {

  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Dashboard />} ></Route>
      <Route path="/:ID" element={<BlogDetails />} ></Route>
      <Route path="/create" element={<AddBlog />}></Route>
      <Route path="/update/:ID" element={<UpdateBlog />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
