import React, { useState } from 'react';
import { login } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Auth.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      onLogin(response.data.username);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container">
      <div className="center-form">
        <div className="custom-card">
          <h1 className="text-center text-white mb-4 font-bold">LOGIN</h1>
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="Password"
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-submit btn-sm flex-grow-1 mr-1">LOGIN</button>
              <a href="/register" className="btn btn-register btn-sm flex-grow-1 ml-1">REGISTER</a>
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

export default Login;
