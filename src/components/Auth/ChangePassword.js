import React, { useState } from 'react';
import { changePassword } from '../../services/api';
import '../../CSS/Auth.css';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePassword(oldPassword, newPassword);
      setMessage('Password updated successfully');
    } catch (error) {
      setMessage('Failed to update password');
      console.error('Failed to update password:', error);
    }
  };

  return (
    <div className="container">
      <div className="center-form">
        <div className="custom-card">
          <h1 className="text-center text-white mb-4 font-bold">CHANGE PASSWORD</h1>
          <form onSubmit={handleSubmit}>
            {message && <p className="message">{message}</p>}
            <div className="form-group">
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="Old Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="New Password"
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-submit btn-sm flex-grow-1">CHANGE PASSWORD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
