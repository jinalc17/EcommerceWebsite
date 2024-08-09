import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.css';
import { useAuth } from './AuthContext';

const LoginButton = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (user) {
      logout(); 
    }
  };

  return (
    <div className="login-button">
      {user ? (
        <button className="login-button-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="login-button-button">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
