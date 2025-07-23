import React, { useState } from "react";

const RegisterPage = ({setIsRegister}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event){
    event.preventDefault()
      const payload = {
        name:userName,
        email:email,
        password:password
      }
      console.log(payload,"payload")
      localStorage.setItem('user',JSON.stringify(payload))
      setIsRegister(true)
  }

  return (
    <div className="container w-50 mx-auto border shadow mt-5 rounded-2 p-3">
      <form onSubmit={handleRegister}>
        <h1>Register Page</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputuser1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputuser1"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
