import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth/authSlice'


const Navbar = () => {
    const {user} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogout(){
        dispatch(logout())
        navigate('/login')
    }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">ProjectManagement</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Task</a>
                  </li>
              </ul>

                <div>
                    {user ? (<>
                        <span className='badge'>{user.name}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>) :(<>
                    
                    <Link to='/register' className='btn btn-primary' >Register</Link>
                    <Link to='/' className='btn btn-primary'>Login</Link>

                        
                    </>)}
                    </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
