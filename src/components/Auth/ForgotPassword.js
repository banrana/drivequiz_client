import React, { useState } from 'react';
import { forgotPassword } from '../../services/api';
import '../../CSS/Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div className="container">
      <div className="center-form">
        <div className="custom-card">
          <h1 className="text-center text-white mb-4 font-bold">FORGOT PASSWORD</h1>
          <form onSubmit={handleSubmit}>
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
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-submit btn-sm flex-grow-1">RESET PASSWORD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
