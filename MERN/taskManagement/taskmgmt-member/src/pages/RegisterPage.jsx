import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {registerUser} from '../redux/auth/authSlice'


const RegisterPage = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange =(e) => setForm({...form, [e.target.name]:e.target.value})

 async function handleSubmit(event){
    event.preventDefault()


   const res = await dispatch(registerUser(form))
      // if(res.type.endsWith('/fullfilled')){
        navigate('/')
      // }else{
        // alert('error', res.payload)
      // }
  }

  return (
    <div className="container">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label>Name</label>
          <input name="name" onChange={handleChange} value={form.name} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} value={form.email} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} value={form.password} className="form-control" />
        </div>
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>

  )
}

export default RegisterPage
