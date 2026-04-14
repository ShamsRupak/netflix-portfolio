import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handleClick}>
      <div className={`sr-logo-wrapper ${isClicked ? 'animate' : ''}`}>
        <span className="sr-letter">S</span>
        <span className="sr-letter">R</span>
      </div>
      {!isClicked && <p className="click-prompt">Click anywhere to enter</p>}
    </div>
  );
};

export default NetflixTitle;
