// About.js
import React from "react";

import ycceIcon from "../../resources/ycceicon.png";
import neuIcon from "../../resources/neuicon.png";
import accentureIcon from "../../resources/accentureicon.png";
import utechIcon from "../../resources/utechicon.png";
import adobeIcon from "../../resources/adobeicon.png";
import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">About Me</h1>
      <div className="educationTitle">Education</div>
      <div className="projectSection1 aboutmargin">
        <img className="about_icon_college" src={neuIcon} alt="neuIcon" />
        <ul className="custom-list">
          <li>- Cumulative GPA of 3.91.</li>
          <li>- Secured an A in Web Development.</li>
          <li>- Secured an A in Algorithms.</li>
          <li>
            - Secured an A- in Professor Amit Shesh's Programming Design
            Paradigm.
          </li>
          <li>
            - Secured an A in Professor Kathreen Durant's Database Management
            Systems.
          </li>
        </ul>
      </div>
      <div className="projectSection2">
        <img className="about_icon_ycce" src={ycceIcon} alt="ycceIcon" />
        <div className="aboutTitle">Nagpur University</div>

        <ul className="custom-list">
          <li>
            - Awarded semester topper for 2 semesters during undergraduate.
          </li>
          <li>- Graduated with a CGPA of 9.02.</li>
          <li>- Conducted several workshops on web development for juniors.</li>
          <li>
            - Taught high school kids programming basics under the Compufest
            event.
          </li>
          <li>
            - Served as the technical committee head for Spandan, an
            inter-college paper presentation competition held by the Computer
            Technology department at YCCE.
          </li>
        </ul>
      </div>

      <div className="educationTitle aboutmargin">Professional experience</div>

      <div className="projectSection1 aboutmargin">
        <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
        <img className="about_icon_sq" src={adobeIcon} alt="adobeIcon" />
        <div className="aboutTitle">Senior FullStack Developer</div>

        <ul className="custom-list">
          <li>
            - Enhanced document processing efficiency by implementing optimized
            API polling, resulting in a 20% reduction in page load times for
            Adobe's FillAndSign feature.
          </li>
          <li>
            - Developed image processing algorithms to convert signature images
            into their dark mode versions, enhancing the visual appeal of the
            web application.
          </li>
          <li>
            - Spearheaded the development of automated unit and integration
            tests utilizing JUnit4 and Selenium frameworks, resulting in a 40%
            decrease in regression issues and ensuring code reliability.
          </li>
          <li>
            - Seamlessly integrated AI-based document processing APIs into a
            React-based single-page application, enhancing its functionality and
            user experience.
          </li>
        </ul>
      </div>

      <div className="projectSection2">
        <img className="about_icon" src={accentureIcon} alt="accentureIcon" />
        <img className="about_icon_sq" src={adobeIcon} alt="adobeIcon" />
        <div className="aboutTitle">FullStack Developer</div>

        <ul className="custom-list">
              <li>
                - Collaborated on a online document signing solution Fill And
                Sign, addressing 24 customer-reported defects and bugs to
                enhance product stability and user experience.
              </li>
              <li>
                - Designed and integrated 3 advanced API functionalities for
                document processing using Amazon Elastic-Search, complemented by
                the implementation of a Splunk dashboard to monitor system
                performance metrics.
              </li>
              <li>
                - Led code review sessions and implemented performance
                optimizations,resulting in a 15% decrease in application
                response times, enhancing overall user satisfaction and system
                efficiency.
              </li>
              <li>
                - Achieved the Accenture Pinnacle Award for contribution in the
                Product Engineering department for FY22-Q4.
              </li>
            </ul>
      </div>

      <div className="projectSection1">
      <img className="about_icon_intern" src={utechIcon} alt="utechIcon" />
        <div className="aboutTitle">Software Development Intern</div>
        <ul className="custom-list">
              <li>
                - Created a web-based dashboard for smart home automation tools,
                managing sensor data for smart home analytics.
              </li>
              <li>
                - Utilized ReactJS for lightweight dashboards following MVC
                principles.
              </li>
              <li>
                - Led a team of 10 interns and conducted regular scrum meetings
                to efficiently deliver output and meet deadlines.
              </li>
              <li>
                - AAchieved the Best Intern for best performance and most
                contributions made towards product development.
              </li>
            </ul>
      </div>
    </div>
  );
};

export default About;
