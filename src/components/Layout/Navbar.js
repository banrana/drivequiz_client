import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/api';
import '../../CSS/Navbar.css';

const Navbar = ({ isAuthenticated, username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      onLogout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', color: 'white' }}>
        Quiz
      </Link>
      <div className="collapse navbar-collapse justify-content-end">
        <div className="btn-group">
          {isAuthenticated ? (
            <>
              <span className="navbar-text mr-3" style={{ color: 'white' }}>
                {username}
              </span>
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary mr-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
