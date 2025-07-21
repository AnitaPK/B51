import React, { useState } from 'react'

const RegisterPage = () => {
    const [userName, setUserName] = useState('Shrihari')
    const [email, setEmail] = useState('shrihari@gmail.com')
    const [password,setPassword] = useState('shrihari') 

  return (
    <div className='container w-50 mx-auto border shadow mt-5 rounded-2 p-3'>
      <form>
        <h1>Register Page</h1>
          <div className="mb-3">
    <label for="exampleInputuser1" className="form-label">User Name</label>
    <input type="text" className="form-control" id="exampleInputuser1" value={userName}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default RegisterPage
