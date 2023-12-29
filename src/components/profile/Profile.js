import React, { useEffect, useState } from 'react';
import './Profile.css'; 
import profilePic from '../../resources/profile1.png'
import githubIcon from '../../resources/githubicon.png';
import instagramIcon from '../../resources/instagramicon.png';
import linkedinIcon from '../../resources/linkedinicon.png';
import resumeFile from '../../resources/sudhanvaResume.pdf'; 


const Profile = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleDownloadResume = () => {
    window.open(resumeFile, '_blank');
  };

  useEffect(() => {
    // Simulate an animation delay (you can replace this with a library like GSAP for more advanced animations)
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`profile-container ${animationComplete ? 'animate' : ''}`}>
      <div className="profile-picture-container">
        <img
          className="profile-picture"
          src={ profilePic }
          alt="Profile"
        />
      </div>
      <div className="profile-info">
      <svg height="100" stroke="white" stroke-width="2" class="text-line" width="100%"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Hello !</text></svg>
        <p> I am <strong>Sudhanva</strong>, a Fullstack Developer currently 
            pursuing my masters from Northeastern University's 
            Khoury College of Computer Sciences.
            I have a strong foundation in both front-end and 
            back-end technologies, I thrive on transforming 
            complex ideas into elegant solution. Explore my
            projects and feel free to connect with me on my
            socials!
            </p>
            <div className="social-icons">
          <a className='social-link' href="https://github.com/Sudhanva1999" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={githubIcon} alt="GitHub" />
          </a>
          <a className='social-link' href="https://www.instagram.com/sudhanva1999/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={instagramIcon} alt="Instagram" />
          </a>
          <a  className='social-link' href="https://www.linkedin.com/in/sudhanvapaturkar/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={linkedinIcon} alt="LinkedIn" />
          </a>
          <button className="download-button" onClick={handleDownloadResume}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
