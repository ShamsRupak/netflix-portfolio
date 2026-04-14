import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="sr-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">SHAMS RUPAK</span>
          <p className="footer-tagline">Building production-grade systems in AI, Rust, and C++.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/ShamsRupak" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="https://linkedin.com/in/shams-rupak-262906272" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="mailto:shamsrupak@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://shamsrupak.lovable.app" target="_blank" rel="noopener noreferrer"><FaGlobe /> Portfolio</a>
        </div>
        <div className="footer-bottom">
          <p>Forked from <a href="https://github.com/SamalaSumanth0262/netflix_portfolio" target="_blank" rel="noopener noreferrer">SamalaSumanth0262/netflix_portfolio</a></p>
          <p>&copy; {new Date().getFullYear()} Shams Rupak. Built with React + TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
