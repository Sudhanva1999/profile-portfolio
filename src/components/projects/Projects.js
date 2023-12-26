import React from 'react';


import Carousel from '../projectslides/Carousel';
import javaicon from '../../resources/techicon/java.gif'
import pythonicon from '../../resources/techicon/pythongif.gif'

import reacticon from '../../resources/skillIcons/reacticon.png'
import htmlicon from '../../resources/skillIcons/htmlicon.png'
import cssicon from '../../resources/skillIcons/cssicon.png'
import booticon from '../../resources/skillIcons/booticon.png'
import flaskicon from '../../resources/skillIcons/flaskicon.png'

import javaimg1 from '../../resources/projectimages/1_jav_img.png'
import javaimg2 from '../../resources/projectimages/2_jav_img.png'
import javaimg3 from '../../resources/projectimages/3_jav_img.png'





import './Projects.css'; 

const slides1 = [
    <img className='project-slides' key={1} src={javaimg1} alt="Slide 1" />,
    <img className='project-slides' key={2} src={javaimg2} alt="Slide 2" />,
    <img className='project-slides' key={3} src={javaimg3} alt="Slide 3" />,
  ];

const Projects = () => {
  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      {/* Rows of project names that trigger scrolling on click */}
      <div className="project-list">
        <div className="project-name" onClick={() => scrollToProject('project1')}>
          Image Processing Software
          <div>
             <img className="actual-icon" src={javaicon} />
          </div>
            
        </div>
        <div className="project-name" onClick={() => scrollToProject('project2')}>
        React Based Complex Team Management Tool 
        <div>
        <img className="actual-icon" src={reacticon} />
        <img className="actual-icon" src={htmlicon} />
        <img className="actual-icon" src={cssicon} />
        <img className="actual-icon" src={booticon} />
          </div>
        

        </div>
        <div className="project-name" onClick={() => scrollToProject('project2')}>
        RNN Based Handwriting Classifier and Analysis Tool 
        <div>
        <img className="actual-icon" src={pythonicon} />
        <img className="actual-icon" src={flaskicon} />
        <img className="actual-icon" src={htmlicon} />
        <img className="actual-icon" src={cssicon} />
        <img className="actual-icon" src={booticon} />
        </div>
       
        </div>
        <div className="project-name" onClick={() => scrollToProject('project2')}>
        Paper Presentation Conference Portal		
        </div>
        <div className="project-name" onClick={() => scrollToProject('project2')}>
        CNN based Fake News Detector 		
        </div>
        <div className="project-name" onClick={() => scrollToProject('project2')}>
        Client Host Multimedia Player		
        </div>
        {/* Add more project names as needed */}
      </div>

      <div id="project1" className="project-section">
        <h2>Image Processing Software
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
        <Carousel slides={slides1} />
        <p>Description of Project 1...</p>
        </div>
        
      
      </div>

      <div id="project2" className="project-section">
        <h2>Project 2</h2>
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        <div className="project-icons">
        </div>
        <p>Description of Project 2...</p>
      </div>

      {/* Add more project sections as needed */}
    </div>
  );
};

export default Projects;
