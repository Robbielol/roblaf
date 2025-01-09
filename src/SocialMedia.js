import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMediaLinks = () => {


  return (
    <div className="social-media-links">
      <a href="https://github.com/robbielol/" target="_blank" rel="noopener noreferrer">
        <FaGithub size="2em" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/robert-laffan-5a82a9141/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size="2em" className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;