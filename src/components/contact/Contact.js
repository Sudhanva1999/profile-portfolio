import React from 'react';
import './Contact.css';
import githubIcon from '../../resources/githubicon.png';
import instagramIcon from '../../resources/instagramicon.png';
import linkedinIcon from '../../resources/linkedinicon.png';
import emailIcon from '../../resources/emailicon.png';
import phoneIcon from '../../resources/phoneicon.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className='contactHeader fromLeft'>
        <h1 className='centerClass'>Contact Me</h1>
        <p>Feel free to reach out through any of the following channels:</p>
      </div>

      <div className="social-iconsC fromRight">
        <a className='social-linkC' href="https://github.com/Sudhanva1999" target="_blank" rel="noopener noreferrer">
          <img className="social-iconC" src={githubIcon} alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a className='social-linkC' href="https://www.instagram.com/sudhanva1999/" target="_blank" rel="noopener noreferrer">
          <img className="social-iconC" src={instagramIcon} alt="Instagram" />
          <span>Instagram</span>
        </a>
        <a className='social-linkC' href="https://www.linkedin.com/in/sudhanvapaturkar/" target="_blank" rel="noopener noreferrer">
          <img className="social-iconC" src={linkedinIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a className='social-linkC' href="mailto:paturkar.s@northeastern.edu">
          <img className="social-iconC" src={emailIcon} alt="Email" />
          <span>paturkar.s@northeastern.edu</span>
        </a>
        <a className='social-linkC' href="tel:+617-785-7242">
          <img className="social-iconC" src={phoneIcon} alt="Phone" />
          <span>+617-785-7242</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
