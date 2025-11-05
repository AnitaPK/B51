import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/authService'

export default function Register(){
  const [form, setForm] = useState({ name:'', email:'', password:'', role:'member' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault(); setError('')
    if(!form.name || !form.email || !form.password){ setError('All fields required'); return; }
    try{
      await register(form); alert('Registered. Please login.'); navigate('/login');
    }catch(err){ setError(err.response?.data?.message || 'Register failed') }
  }

  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card p-4 shadow-sm'>
            <h4 className='mb-3'>Register</h4>
            {error && <div className='alert alert-danger'>{error}</div>}
            <form onSubmit={submit}>
              <div className='mb-2'><input className='form-control' placeholder='Name' value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></div>
              <div className='mb-2'><input className='form-control' placeholder='Email' value={form.email} onChange={e=>setForm({...form, email:e.target.value})} /></div>
              <div className='mb-3'><input type='password' className='form-control' placeholder='Password' value={form.password} onChange={e=>setForm({...form, password:e.target.value})} /></div>
              <button className='btn btn-primary w-100'>Register</button>
              <Link to="/login">If already Registered</Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}