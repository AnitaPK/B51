import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    console.log(typeof(u),'in efffct')
    setUser({...user, ...u});
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    // let flag=false
    // console.log(email,password)
    try {
        if(user.email == email && user.password == password) {
      // flag = true
      alert('Success')
      navigate('/dashboard');
    }else {
      alert("inavalid credientials");
      navigate('/')
    }
    } catch (error) {
        console.log(error)
    }

    
  }
  console.log(user, "user from local storage");
  console.log(typeof(user),'type at end')
  return (
    <div className="container w-50 mx-auto border shadow mt-5 rounded-2 p-3">
      <form onSubmit={handleLogin}>
        <h1>Login page</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // value={email}
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
            // value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <Link to="/register">If Not Registered</Link>
      </form>
    </div>
  );
};

export default LoginPage;
