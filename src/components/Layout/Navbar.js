import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/api';

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await logout();
      // Redirect or update state as needed
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;