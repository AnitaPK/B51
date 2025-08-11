import React,{useContext} from 'react'
import {CreateTheme} from '../ThemeContext/ThemeProvider'



const Navbar = () => {
  const {theme, toggleTheme} = useContext(CreateTheme)
  // console.log(theme);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${theme== 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light' }`}>
       <a class="navbar-brand" href="#">Navbar</a>
      <button onClick={()=>toggleTheme()}>
      {theme == 'light' ? <i class="fa-solid fa-toggle-off"></i>  : <i class="fa-solid fa-toggle-on"></i>}
        </button>
     </nav> 
    </div>
  )
}

export default Navbar
