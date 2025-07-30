import { useState } from 'react'
import Greet from './components/Greet'
import './App.css'
import Counter from './components/Counter'
import Dashboard from './Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeGreetings from './components/DocumnetTitle'


function App() {


  return (
    <>
    <WelcomeGreetings name='Shrihari Tone' />
    <Dashboard />
    {/* <Counter /> */}
      <Greet />
    </>
  )
}

export default App
