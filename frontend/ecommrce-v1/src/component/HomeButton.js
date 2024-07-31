import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';
const HomeButton = () => {
  return (
    <Link to="/" className="home-button">
      <img
        src="https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_640.png"
        alt="Home"
        className="home-button-image"
      />
    </Link>
  );
};

export default HomeButton;
