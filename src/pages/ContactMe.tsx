import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaRocket } from 'react-icons/fa';
import { contactData } from '../data';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={contactData.profilePicture.url} alt={contactData.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{contactData.name}</h3>
          <p className="badge-title">{contactData.title}</p>
          <p className="badge-description">{contactData.summary}</p>
          <p className="badge-company">{contactData.companyUniversity}</p>
          <a href={contactData.linkedinLink} target="_blank" rel="noopener noreferrer" className="badge-link">
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>Let's build something together. Reach out anytime.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item" onClick={() => window.open(`mailto:${contactData.email}`)}>
          <FaEnvelope className="contact-icon" />
          <span className="contact-link">{contactData.email}</span>
        </div>

        <div className="contact-item" onClick={() => window.open(contactData.linkedinLink, '_blank')}>
          <FaLinkedin className="contact-icon" style={{ color: '#0077b5' }} />
          <span className="contact-link">LinkedIn Profile</span>
        </div>

        <div className="contact-item" onClick={() => window.open(contactData.github, '_blank')}>
          <FaGithub className="contact-icon" style={{ color: '#e6e6e6' }} />
          <span className="contact-link">github.com/ShamsRupak</span>
        </div>

        <div className="contact-item" onClick={() => window.open(contactData.portfolio, '_blank')}>
          <FaGlobe className="contact-icon" style={{ color: '#a78bfa' }} />
          <span className="contact-link">shamsrupak.lovable.app</span>
        </div>
      </div>

      <div className="contact-fun">
        <FaRocket className="coffee-icon" style={{ color: '#e50914' }} />
        <p>Currently seeking SWE, AI/ML, and Data Science roles</p>
      </div>
    </div>
  );
};

export default ContactMe;
