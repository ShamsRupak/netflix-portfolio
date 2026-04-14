import React, { useEffect, useState, useCallback } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const playTudumSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

    // Deep bass hit
    const bass = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bass.type = 'sine';
    bass.frequency.setValueAtTime(80, ctx.currentTime);
    bass.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.8);
    bassGain.gain.setValueAtTime(0.6, ctx.currentTime);
    bassGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
    bass.connect(bassGain);
    bassGain.connect(ctx.destination);
    bass.start(ctx.currentTime);
    bass.stop(ctx.currentTime + 1.2);

    // Mid punch
    const mid = ctx.createOscillator();
    const midGain = ctx.createGain();
    mid.type = 'triangle';
    mid.frequency.setValueAtTime(200, ctx.currentTime);
    mid.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.4);
    midGain.gain.setValueAtTime(0.3, ctx.currentTime);
    midGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
    mid.connect(midGain);
    midGain.connect(ctx.destination);
    mid.start(ctx.currentTime);
    mid.stop(ctx.currentTime + 0.6);

    // Second hit (the "dum" part, slightly delayed)
    const hit2 = ctx.createOscillator();
    const hit2Gain = ctx.createGain();
    hit2.type = 'sine';
    hit2.frequency.setValueAtTime(120, ctx.currentTime + 0.15);
    hit2.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.9);
    hit2Gain.gain.setValueAtTime(0, ctx.currentTime);
    hit2Gain.gain.setValueAtTime(0.5, ctx.currentTime + 0.15);
    hit2Gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
    hit2.connect(hit2Gain);
    hit2Gain.connect(ctx.destination);
    hit2.start(ctx.currentTime + 0.15);
    hit2.stop(ctx.currentTime + 1.5);

    // Noise burst for impact texture
    const bufferSize = ctx.sampleRate * 0.15;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * 0.3;
    }
    const noise = ctx.createBufferSource();
    const noiseGain = ctx.createGain();
    noise.buffer = noiseBuffer;
    noiseGain.gain.setValueAtTime(0.15, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    noise.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(ctx.currentTime);
  } catch (e) {
    console.log('Audio not supported');
  }
};

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (!isClicked) {
      playTudumSound();
      setIsClicked(true);
    }
  }, [isClicked]);

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
