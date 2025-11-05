import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, getCurrentUser } from '../services/authService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      // 1️⃣ Login to get token
      const res = await login(email, password);

      // Backend returns { message, token }
      if (!res.data.token) {
        setError(res.data.message || 'Invalid credentials');
        return;
      }

      // 2️⃣ Get user info using token
      const user = await getCurrentUser();

      // 3️⃣ Redirect if admin
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        alert('Only admin users can access this panel');
        localStorage.removeItem('token');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3 text-center">Admin Login</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submit}>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
            </form>
            <div className="mt-3 text-center">
              <Link to="/register">Register new user</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
