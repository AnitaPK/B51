import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <div>
      <Link to='/'>Home</Link><br></br>
      <Link to='/about'>About</Link><br></br>
      <Link to='/contact'>Contact</Link><br></br>

    </div>
  )
}

export default NavbarMain
