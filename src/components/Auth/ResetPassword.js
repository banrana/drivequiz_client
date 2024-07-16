import React, { useState } from 'react';
import { resetPassword } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import '../../CSS/Auth.css';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, password);
      setMessage('Password reset successfully');
      navigate('/login');
    } catch (error) {
      setMessage('Failed to reset password');
      console.error('Failed to reset password:', error);
    }
  };

  return (
    <div className="container">
      <div className="center-form">
        <div className="custom-card">
          <h1 className="text-center text-white mb-4 font-bold">RESET PASSWORD</h1>
          <form onSubmit={handleSubmit}>
            {message && <p className="message">{message}</p>}
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="New Password"
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-submit btn-sm flex-grow-1">RESET PASSWORD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
