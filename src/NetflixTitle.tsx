import React, { useEffect, useState, useCallback } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';
import netflixSound from './netflix-sound.mp3';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (!isClicked) {
      const audio = new Audio(netflixSound);
      audio.play().catch(error => console.error("Audio play error:", error));
      setIsClicked(true);
    }
  }, [isClicked]);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handleClick}>
      <div className={`sr-logo-wrapper ${isClicked ? 'animate' : ''}`}>
        <span className="sr-letter">SHAMS</span>
        <span className="sr-letter">RUPAK</span>
      </div>
      {!isClicked && <p className="click-prompt">Click anywhere to enter</p>}
    </div>
  );
};

export default NetflixTitle;
