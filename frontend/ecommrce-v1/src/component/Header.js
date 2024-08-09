// src/component/Header.js
import React from 'react';
import HomeButton from './HomeButton';
import CartIcon from './CartIcon';
import LoginButton from './LoginButton';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <HomeButton />
      <div className="header-content">
        <div className="header-text">TechHaven</div>
      </div>
      <div className="header-buttons">
        <CartIcon />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
