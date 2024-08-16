import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginButton = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      logout();
      navigate('/');
    }
  };

  return (
    <div className="login-button">
      {user ? (
        <>
        <div className="dashboard-button">
            <Link to="/admin-dashboard">
              <button className="login-button-button">
                Dashboard
              </button>
            </Link>
          </div>
          <button className="login-button-button" onClick={handleLogout}>
            Logout
          </button>
          
        </>
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
