import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, getUserInfo } from '../redux/auth/authSlice'

const LoginPage = () => {
  const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const handleChange =(e) => setForm({...form, [e.target.name]:e.target.value})
  
   async function handleSubmit(event){
      event.preventDefault()
    console.log(form)
      const res = await dispatch(loginUser(form))
      if(res){
        navigate('/dashboard')
      }else{
        navigate('/')
      }
   }

  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" onChange={handleChange} value={form.email} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} value={form.password} className="form-control" />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>


  )
}

export default LoginPage
