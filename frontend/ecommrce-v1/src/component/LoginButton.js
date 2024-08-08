// src/component/LoginButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.css'; // Import the CSS file

const LoginButton = () => {
  return (
    <div className="login-button">
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button className="login-button-button">Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;
