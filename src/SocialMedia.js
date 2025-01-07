import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {


  return (
    <div className="social-media-links">
      <a href="https://www.instagram.com/robertlaffan/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size="3em" className="social-icon" />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size="3em" className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;