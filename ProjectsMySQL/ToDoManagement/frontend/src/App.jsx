import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TaskForm from './components/TaskForm'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add-task' element={<TaskForm />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
