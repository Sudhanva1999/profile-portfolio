// About.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons';
import ycceIcon from '../../resources/ycceicon.png';
import neuIcon from '../../resources/neuicon.png';
import accentureIcon from '../../resources/accentureicon.png';
import utechIcon from '../../resources/utechicon.png';
import adobeIcon from '../../resources/adobeicon.png';
import './About.css'

import { render } from 'react-dom'
import { StyleRoot } from 'radium'

import Timeline from '../timeline/Timeline'

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
      <div class="ag-courses_item">
        <a href="#" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
          <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
          <img className="about_icon_sq" src={adobeIcon} alt="adobeIcon" />
          <div class="ag-courses-item_title">
            Senior FullStack Developer
          </div>

          <div class="ag-courses-item_date-box">
            <span class="ag-courses-item_date">
              <ul>
                <li>- Enhanced document processing efficiency by implementing optimized API polling, resulting in a 20% reduction in page load times for Adobe's FillAndSign feature.</li>
                <li>- Developed image processing algorithms to convert signature images into their dark mode versions, enhancing the visual appeal of the web application.</li>
                <li>- Spearheaded the development of automated unit and integration tests utilizing JUnit4 and Selenium frameworks, resulting in a 40% decrease in regression issues and ensuring code reliability.</li>
                <li>- Seamlessly integrated AI-based document processing APIs into a React-based single-page application, enhancing its functionality and user experience.</li>
              </ul>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

const AccentureFullStackDeveloperPopupContent = () => (
<div class="experience-details">
<div class="ag-courses_item">
  <a href="#" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>
    <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
    <img className="about_icon_sq" src={adobeIcon} alt="adobeIcon" />
    <div class="ag-courses-item_title">
    Full-Stack Developer
    </div>

    <div class="ag-courses-item_date-box">
      <span class="ag-courses-item_date">
      
    <ul>
      <li>- Collaborated on a online document signing solution Fill And Sign, addressing 24 customer-reported defects and bugs to enhance product stability and user experience.</li>
      <li>- Designed and integrated 3 advanced API functionalities for document processing using Amazon Elastic-Search, complemented by the implementation of a Splunk dashboard to monitor system performance metrics.</li>
      <li>- Led code review sessions and implemented performance optimizations,resulting in a 15% decrease in application response times, enhancing overall user satisfaction and system efficiency.</li>
      <li>- Achieved the Accenture Pinnacle Award for contribution in the Product Engineering department for FY22-Q4.</li>

    </ul>
      </span>
    </div>
  </a>
</div>
</div>
);

const UtechInternPopupContent = () => (
<div class="experience-details">
<div class="ag-courses_item">
  <a href="#" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>
    <img className="about_icon_intern" src={utechIcon} alt="utechIcon" />
    <div class="ag-courses-item_title">
    Software Development Intern
    </div>

    <div class="ag-courses-item_date-box">
      <span class="ag-courses-item_date">
      
      <ul>
      <li>- Created a web-based dashboard for smart home automation tools, managing sensor data for smart home analytics.</li>
      <li>- Utilized ReactJS for lightweight dashboards following MVC principles.</li>
      <li>- Led a team of 10 interns and conducted regular scrum meetings to efficiently deliver output and meet deadlines.</li>
      <li>- AAchieved the Best Intern for best performance and most contributions made towards product development.</li>
    </ul>
      </span>
    </div>
  </a>
</div>
</div>
);

const YCCEPopupContent = () => (
<div class="experience-details">
<div class="ag-courses_item">
  <a href="#" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>
    <img className="about_icon_ycce" src={ycceIcon} alt="ycceIcon" />
    <div class="ag-courses-item_title">
    Nagpur University
    </div>

    <div class="ag-courses-item_date-box">
      <span class="ag-courses-item_date">
      
      <ul>
      <li>- Awarded semester topper for 2 semesters during undergraduate.</li>
      <li>- Graduated with a CGPA of 9.02.</li>
      <li>- Conducted several workshops on web development for juniors.</li>
      <li>- Taught high school kids programming basics under the Compufest event.</li>
      <li>- Served as the technical committee head for Spandan, an inter-college paper presentation competition held by the Computer Technology department at YCCE.</li>
    </ul>
      </span>
    </div>
  </a>
</div>
</div>
);

const NEUPopupContent = () => (
  <div class="experience-details">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <img className="about_icon_college" src={neuIcon} alt="neuIcon" />
        <div class="ag-courses-item_title">
          Northeastern University
        </div>
        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
            <ul>
              <li>- Cumilitive GPA of 3.91.</li>
              <li>- Secured an A in Web Development.</li>
              <li>- Secured an A in Algorithms.</li>
              <li>- Secured an A- in Professor Amit Shesh's Programming Design Paradigm.</li>
              <li>- Secured an A in Professor Kathreen Durant's Database Management Systems.</li>
            </ul>
          </span>
        </div>
      </a>
    </div>
  </div>
);
const TimelineItem = ({ icon, content, date }) => (
  <div className="timeline-item">
    <div className="timeline-icon">
      <img className="about_icon" src={icon} alt={`${icon}_icon`} />
    </div>
    <div className="timeline-content">
      <h2>{content}</h2>
      <p>{date}</p>
    </div>
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
    <StyleRoot id="about" className="aboutContainer">
      <h1 className='aboutTitle'>About Me</h1>
      <Timeline activeColor='black'>
        <div>
          <NEUPopupContent />
        </div>
        <div>
          <SeniorAccenturePopupContent />
        </div>
        <div>
          <AccentureFullStackDeveloperPopupContent />
        </div>
        <div>
          <UtechInternPopupContent />
        </div>
        <div>
          <YCCEPopupContent />
        </div>
      </Timeline>
    </StyleRoot>
  );
};

export default About;