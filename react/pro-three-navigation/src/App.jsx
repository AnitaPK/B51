import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './componets/Home'
import About from './componets/AboutUs'
import Contact from './componets/Contact'
import NavbarMain from './componets/NavbarMain'

function App() {

  return (
    <Router>
      <div className='mainContent'>  
        <div className="leftDiv">   
      <NavbarMain />
      </div> 
      <div className="rightDiv">
      <Routes>
        <Route path='*' element={<h1>Page not found</h1>} />

        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About /> }></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </div>
      </div>

    </Router>
  )
}

export default App
