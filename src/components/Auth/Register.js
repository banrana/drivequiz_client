import React, { useState } from 'react';
import { register } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ username, email, password });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container">
      <div className="center-form">
        <div className="custom-card">
          <h1 className="text-center text-white mb-4 font-bold">REGISTER</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mb-2"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-2"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="Password"
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-register btn-sm flex-grow-1">REGISTER</button>
            </div>
            <div className="text-center mt-2">
              <a href="/forgotpassword" className="text-white">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
