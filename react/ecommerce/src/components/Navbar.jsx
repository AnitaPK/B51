import React,{useContext} from 'react'
import {CreateTheme} from '../context/ThemeProvider'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'



const Navbar = () => {
  const {theme, toggleTheme} = useContext(CreateTheme)
  const {loggedUser, logout} = useContext(AuthContext)
  // console.log(theme);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${theme== 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light' }`}>
       <div><Link class="navbar-brand" to="/dashboard">Navbar</Link></div>


      <div>
        {loggedUser && <>
          <i>{loggedUser.name}</i>
          <button onClick={()=>logout()}>Logout</button>
        </>}
        <button onClick={()=>toggleTheme()}>
      {theme == 'light' ? <i class="fa-solid fa-toggle-off"></i>  : <i class="fa-solid fa-toggle-on"></i>}
        </button>
        </div>
     </nav> 
    </div>
  )
}

export default Navbar
