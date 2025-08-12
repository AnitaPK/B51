import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loggedUser, login } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
    try {
      const mgs = login(email, password);
      if (mgs) {
        alert(mgs);
        navigate("/dashboard");
      } else {
        alert("inavalid credientials");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(loggedUser, "in login page");
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
