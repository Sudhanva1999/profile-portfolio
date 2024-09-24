// About.js
import React from "react";

import aboutMeTitle from "../../resources/aboutMe.png";
import ycceIcon from "../../resources/about/ycceIcon.png";
import neuIcon from "../../resources/about/neuIcon.png";
import utechIcon from "../../resources/utechicon.png";
import adobeIcon from "../../resources/about/adobeIcon.png";
import adobeThumb from "../../resources/about/adobeThumb.png";
import accentureIcon from "../../resources/about/accenIcon.png";
import accentureThumb from "../../resources/about/accentureThumb.png";
import sacciThumb from "../../resources/about/utechThumb.png";
import sacciIcon from "../../resources/about/utechIcon.png";
import Tabs from "../tabs/tabs";
import "./About.css";
import ThumbnailCard from "../thumbnailCard/thumbnailCard";
let data = [
  {
    icon: adobeIcon,
    image: adobeThumb,
    name: "Adobe",
    position: "Software Engineering Intern",
    text: "At Adobe, I spearheaded several key initiatives that significantly enhanced user engagement and streamlined data processing. I developed a personalized notification system for Adobe Acrobat, harnessing user data to drive a 10% increase in feature usage. This project involved creating a robust Java Spring-Boot service capable of processing millions of logs to generate comprehensive user profiles. To support this data-intensive operation, I designed and implemented an Apache Kafka pipeline, establishing efficient data flows between high-volume services handling millions of records. This infrastructure laid the groundwork for more responsive and scalable systems across the platform. Further optimizing our data architecture, I integrated GraphQL to streamline data retrieval for personalized notifications. This strategic implementation resulted in a 30% improvement in fetch times, significantly enhancing the user experience. These projects demonstrate my proficiency in building scalable, data-driven solutions that not only improve system performance but also deliver tangible benefits to end-users. My work at Adobe showcases my ability to tackle complex technical challenges and drive meaningful improvements in large-scale software applications.",
  },
  {
    name: "Accenture",
    position: "Senior Fullstack Developer",
    icon: accentureIcon,
    image: accentureThumb,
    text: "During my time at Accenture I worked with Adobe on their Acrobat Sign product as a consultant. I significantly improved our document processing capabilities and overall application performance by optimising API polling, I achieved a 5% reduction in page load times, creating a smoother user experience. I also developed some simple image processing algorithms to dynamically generate dark mode versions of signature images, enhancing the visual appeal of our web application. To ensure code reliability, I implemented comprehensive automated testing using JUnit4 and Selenium, which led to a 20% decrease in regression issues. One of my key contributions was integrating AI-powered document processing APIs into our React-based single-page application, which not only expanded its functionality but also greatly improved user interaction. This experience allowed me to combine technical skills with creative problem-solving, resulting in tangible improvements to our product.",
  },
  {
    name: "Accenture",
    position: "Fullstack Developer",
    icon: accentureIcon,
    image: accentureThumb,
    text: "As a Full-stack developer at Accenture, I was working with Adobe on their document processing solutions and improving system performance. I played a key role in refining the document signing platform, resolving 24 customer-reported issues to boost product stability and user satisfaction. Expanding our capabilities, I designed and implemented  API functionalities leveraging Amazon Elastic-Search, while also creating a Splunk dashboard for real-time performance monitoring. Through active participation in code reviews and targeted optimisations, I contributed to a 5% reduction in application response times, significantly improving user experience and system efficiency. My dedication and technical expertise were recognised with the Accenture Pinnacle Award for outstanding contributions to the Product Engineering department in FY22-Q4. These experiences showcase my ability to tackle complex challenges, implement innovative solutions, and deliver measurable improvements in software quality and performance.",
  },
  {
    name: "Sacchidanand Utech",
    position: "Software Engineering Intern",
    icon: sacciIcon,
    image: sacciThumb,
    text: "During my internship, Ied the development of a web-based dashboard for smart home automation tools, focusing on managing and analysing sensor data. Leveraging ReactJS, I created lightweight, efficient dashboards adhering to MVC principles, demonstrating my proficiency in modern front-end technologies. Beyond technical contributions, I took on a leadership role, guiding a team of 10 interns and facilitating regular scrum meetings. This experience honed my project management skills, ensuring timely delivery and fostering a collaborative environment. My dedication to product development and overall performance did not go unnoticed, as I was honored with the Best Intern award. This recognition underscored my ability to not only execute technical tasks effectively but also to lead and inspire a team towards achieving project goals.",
  },
];

const About = () => {
  return (
    <div className="aboutContainer">
      <img className="titleAboutMe" src={aboutMeTitle} alt="aboutMeTitle" />
      <div className="educationTitle aboutmargin">Professional experience</div>
      <div className="tabs">
        <Tabs data={data} />
      </div>
      <div className="educationTitle">Education</div>
      <ThumbnailCard
        title="Northeastern University"
        description="Cumulative GPA: 3.91. Currently focussing on learning to build large scale distributed systems and machine learning concepts. Earlier secured
A in Web Development, Algorithms, and Database Management Systems.
A- in Programming Design Paradigm with Professor Amit Shesh."
        thumbnailSrc={neuIcon}
      />

      <ThumbnailCard
        title="Nagpur University"
        description="Graduated with a CGPA of 9.02 and awarded semester topper twice.
Conducted web development workshops for juniors and taught programming basics to high school students at Compufest.
Served as the technical committee head for Spandan, an inter-college paper presentation competition at YCCE."
        thumbnailSrc={ycceIcon}
      />
    </div>
  );
};

export default About;
