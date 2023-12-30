// About.js
import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons';
import ycceIcon from '../../resources/ycceicon.png';
import neuIcon from '../../resources/neuicon.png';
import accentureIcon from '../../resources/accentureicon.png';
import utechIcon from '../../resources/utechicon.png';
import adobeIcon from '../../resources/adobeicon.png';

const PopupContent = ({ content }) => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

const SeniorAccenturePopupContent = () => {
  return (
    <div class="experience-details">
      <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
      <img className="about_icon_sq" src={adobeIcon} alt="adobeIcon" />
      <h2>Accenture, Senior FullStack Developer</h2>
      <ul>
        <li>- Collaborated with Adobe's SanJose Team on their FillAndSign product, enhancing API calls and optimizing page load times by 20%.</li>
        <li>- Implemented dark mode for signature images using React JS, enhancing user experience.</li>
        <li>- Led the development of key features, like dark mode and API-based document processing, resolving over 40 major software bugs.</li>
        <li>- Participated in several bug hunts organized by Adobe and reported 11 major bugs that affected optimization and user experience.</li>
      </ul>
    </div>
  );
};

const AccentureFullStackDeveloperPopupContent = () => (
  <div className="experience-details">
    <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
    <img className="about_icon_sq" src={adobeIcon} alt="adobeIcon" />

    <h2>Accenture, Full-Stack Developer</h2>
    <ul>
      <li>- Collaborated with Adobe on their Adobe Sign product by resolving over 24 major customer-facing defects and bugs in the tool.</li>
      <li>- Implemented 3 new API features for faster document processing along with a Splunk dashboard to monitor their performance.</li>
      <li>- Awarded the Accenture Pinnacle Award for exceptional contribution in the Product Engineering department for FY22-Q4.</li>
    </ul>
  </div>
);

const UtechInternPopupContent = () => (
  <div className="experience-details">
    <img className="about_icon" src={utechIcon} alt="utechIcon" />
    <h2>Sacchidanand Utech, Software Development Intern</h2>
    <ul>
      <li>- Designed and created a web-based dashboard for smart home automation tools, managing sensor data for smart home analytics.</li>
      <li>- Utilized React JS for lightweight dashboards following MVC principles.</li>
      <li>- Led a team of 10 interns and conducted regular scrum meetings to efficiently deliver output and meet deadlines.</li>
      <li>- Awarded Best Intern for the best performance and most contributions made towards product development.</li>
    </ul>
  </div>
);

const YCCEPopupContent = () => (
  <div className="experience-details">
    <img className="about_icon" src={ycceIcon} alt="ycceIcon" />
    <h2>YCCE, Nagpur University</h2>
    <ul>
      <li>- Awarded semester topper for 2 semesters during undergraduate.</li>
      <li>- Graduated with a CGPA of 9.02.</li>
      <li>- Conducted several workshops on web development for juniors.</li>
      <li>- Taught high school kids programming basics under the Compufest event.</li>
      <li>- Served as the technical committee head for Spandan, an inter-college paper presentation competition held by the Computer Technology department at YCCE.</li>
    </ul>
  </div>
);

const NEUPopupContent = () => (
  <div className="experience-details">
    <img className="about_icon" src={neuIcon} alt="neuIcon" />
    <h2>Northeastern University</h2>
    <ul>
      <li>- GPA for the 1st semester: 3.8.</li>
      <li>- Secured an A- in Professor Amit Shesh's Programming Design Paradigm.</li>
      <li>- Secured an A in Professor Kathreen Durant's Database Management Systems.</li>
    </ul>
  </div>
);
const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  return (
    <div className='bodyContainerAbout'>
      <div className="about-container">
        <h1>About Me </h1>

        <div className="about-content">
          <section className="about-section">
            <div className="about-entry fromLeft">
              <FontAwesomeIcon icon={faGraduationCap} className="about-icon" />
              <h2>Education</h2>
              <h5>Click for more details !</h5>
              <table>
                <tbody>
                  <tr className='item_row' onClick={() => togglePopup(<NEUPopupContent />)}>
                    <td>
                      <img className="about_icon" src={neuIcon} alt="Neu_Icon" />
                    </td>
                    <td>
                      Master of Science in Computer Science<br />Northeastern University, Boston, MA (2025)
                    </td>
                  </tr>
                  <tr className='item_row' onClick={() => togglePopup(<YCCEPopupContent />)}>
                    <td>
                      <img className="about_icon" src={ycceIcon} alt="Ycce_Icon" />
                    </td>
                    <td>
                      Bachelor of Engineering in Computer Technology<br />Nagpur University, Maharashtra, India (2021)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="about-section">
            <div className="about-entry fromRight">
              <FontAwesomeIcon icon={faBriefcase} className="about-icon" />
              <h2>Work Experience</h2>
              <h5>Click for more details !</h5>
              <table>
                <tbody>
                  <tr className='item_row' onClick={() => togglePopup(<SeniorAccenturePopupContent />)}>
                    <td>
                      <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
                    </td>
                    <td>
                      Senior Full-Stack Developer at Accenture<br />Pune, India (Dec 2022 - May 2023)<br />
                    </td>
                  </tr>
                  <tr className='item_row' onClick={() => togglePopup(<AccentureFullStackDeveloperPopupContent />)}>
                    <td>
                      <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
                    </td>
                    <td>
                      Full-Stack Developer at Accenture<br />Pune, India (June 2021 - Nov 2022)
                    </td>
                  </tr>
                  <tr className='item_row' onClick={() => togglePopup(<UtechInternPopupContent />)}>
                    <td>
                      <img className="about_icon" src={utechIcon} alt="utechIcon" />
                    </td>
                    <td>
                      Software Development Intern at Sacchidanand Utech<br />Nagpur, India (May 2019 - Nov 2019)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {showPopup && (
          <div className="popup growOut" onClick={() => togglePopup('')}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => togglePopup('')}>
                &times;
              </span>
              <PopupContent content={popupContent} />
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default About;
