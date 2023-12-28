import React from 'react';


import Carousel from '../projectslides/Carousel';
import javaicon from '../../resources/techicon/java.gif'
import pythonicon from '../../resources/techicon/pythongif.gif'
import javascripticon from '../../resources/techicon/javascripticon.gif'

import reacticon from '../../resources/skillIcons/reacticon.png'
import htmlicon from '../../resources/skillIcons/htmlicon.png'
import cssicon from '../../resources/skillIcons/cssicon.png'
import booticon from '../../resources/skillIcons/booticon.png'
import flaskicon from '../../resources/skillIcons/flaskicon.png'
import phpicon from '../../resources/skillIcons/phpicon.png'
import firebaseicon from '../../resources/skillIcons/realtimeicon.png'
import sqlicon from '../../resources/skillIcons/sqlicon.png'
import giticon from '../../resources/skillIcons/githubicon.png'


import javaimg1 from '../../resources/projectimages/1_java/1_java.png'
import javaimg2 from '../../resources/projectimages/1_java/2_java.png'
import javaimg3 from '../../resources/projectimages/1_java/3_java.png'
import javaimg4 from '../../resources/projectimages/1_java/4_java.png'
import javaimg5 from '../../resources/projectimages/1_java/5_java.png'
import javaimg6 from '../../resources/projectimages/1_java/6_java.png'

import handimg1 from '../../resources/projectimages/3_hand/hand_1.png'
import handimg2 from '../../resources/projectimages/3_hand/hand_2.png'
import handimg3 from '../../resources/projectimages/3_hand/hand_3.png'
import handimg4 from '../../resources/projectimages/3_hand/hand_4.png'
import handimg5 from '../../resources/projectimages/3_hand/hand_5.png'

import portalimg1 from '../../resources/projectimages/4_portal/portal_1.png'
import portalimg2 from '../../resources/projectimages/4_portal/portal_2.png'
import portalimg3 from '../../resources/projectimages/4_portal/portal_3.png'


import fakeNewsImg1 from '../../resources/projectimages/5_fakeNews/fakenews_1.png'
import fakeNewsImg2 from '../../resources/projectimages/5_fakeNews/fakenews_2.png'
import fakeNewsImg3 from '../../resources/projectimages/5_fakeNews/fakenews_3.png'






import './Projects.css'; 

const slides1 = [
    <img className='project-slides' key={3} src={javaimg3} alt="Slide 3" />,
    <img className='project-slides' key={1} src={javaimg1} alt="Slide 1" />,
    <img className='project-slides' key={2} src={javaimg2} alt="Slide 2" />,
    <img className='project-slides' key={4} src={javaimg4} alt="Slide 4" />,
    <img className='project-slides' key={5} src={javaimg5} alt="Slide 5" />,
    <img className='project-slides' key={6} src={javaimg6} alt="Slide 6" />,
  ];

  const slidesHand = [
    <img className='project-slides' key={3} src={handimg1} alt="Slide 3" />,
    <img className='project-slides' key={1} src={handimg2} alt="Slide 1" />,
    <img className='project-slides' key={2} src={handimg3} alt="Slide 2" />,
    <img className='project-slides' key={4} src={handimg4} alt="Slide 4" />,
    <img className='project-slides' key={5} src={handimg5} alt="Slide 5" />,
  ];


  const portalimgs = [
    <img className='project-slides' key={3} src={portalimg1} alt="Slide 3" />,
    <img className='project-slides' key={1} src={portalimg2} alt="Slide 1" />,
    <img className='project-slides' key={2} src={portalimg3} alt="Slide 2" />,
  ];

  const fakeNewsImg = [
    <img className='project-slides' key={3} src={fakeNewsImg1} alt="Slide 3" />,
    <img className='project-slides' key={1} src={fakeNewsImg2} alt="Slide 1" />,
    <img className='project-slides' key={2} src={fakeNewsImg3} alt="Slide 2" />,
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
      <h3>Click for details !</h3><br/>
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
        <img className="actual-icon" src={firebaseicon} />
          </div>
        

        </div>
        <div className="project-name" onClick={() => scrollToProject('project3')}>
        RNN Based Handwriting Classifier and Analysis Tool 
        <div>
        <img className="actual-icon" src={pythonicon} />
        <img className="actual-icon" src={flaskicon} />
        <img className="actual-icon" src={htmlicon} />
        <img className="actual-icon" src={cssicon} />
        <img className="actual-icon" src={booticon} />
        </div>
       
        </div>
        <div className="project-name" onClick={() => scrollToProject('project4')}>
        Paper Presentation Conference Portal	
        <div>
        <img className="actual-icon" src={phpicon} />
        <img className="actual-icon" src={htmlicon} />
        <img className="actual-icon" src={cssicon} />
        <img className="actual-icon" src={booticon} />
        <img className="actual-icon" src={sqlicon} />
        </div>
	
        </div>
        <div className="project-name" onClick={() => scrollToProject('project5')}>
        CNN based Fake News Detector 	
        <div>
        <img className="actual-icon" src={pythonicon} />
        <img className="actual-icon" src={htmlicon} />
        <img className="actual-icon" src={cssicon} />
        <img className="actual-icon" src={booticon} />
        </div>	
        </div> 
        <div className="project-name" onClick={() => scrollToProject('project6')}>
        Client Host Multimedia Player	
        <div>
        <img className="actual-icon" src={pythonicon} />
        <img className="actual-icon" src={reacticon} />
        <img className="actual-icon" src={javascripticon} />
        </div>	
        </div>

        <div className="project-name">
        This Site ! 
        <div>
        <img className="actual-icon" src={reacticon} />
        <img className="actual-icon" src={htmlicon} />
        <img className="actual-icon" src={cssicon} />
        <img className="actual-icon" src={booticon} />
        <img className="actual-icon" src={giticon} />
        </div>	
        </div>
      </div>

      <div id="project1" className="project-section">
        <h2>Image Processing Software
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
            <Carousel slides={slides1} />
            <div>
                <br/>
                <h3>
                    <strong>
                    What the project is about :
                    </strong>
                </h3>
                <p>
                    An image processing software that implements features like image sharpening,
                    levels adjustment, color correction and much more, the main focus being 
                    the software's adherance to MVC design pattern along with several industry 
                    standards focusing on maximum scalability and adaptability to new features. 
                </p>
                <br/>
                <p>
                    <strong>Key Features:</strong> <br/>
                    - The software has been written entirely in core java without using any libraries 
                    apart from the jdk. <br/>
                    - The software supports preview functionality to reduce 
                    operation time by operating on a smaller subset of the image matrix.   <br/> 
                    - The GUI has been implemented in Swing UI and the communication between GUI and 
                    controller has been designed in a way where it can be easiliy swaped out with any 
                    other UI library.  <br/>
                    - Includes a histogram feature similar to the one in Adobe Photoshop where one can see realtime 
                    changes in image color channels as different operations are performed on it.     
                </p>
            </div>
        </div>
      </div>

      <div id="project2" className="project-section">
        <h2>
        React Based Complex Team Management Tool 
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
            <div>
                <br/>
                <h3>
                    <strong>
                    What the project is about: 
                    </strong>
                    </h3>
                <p>
                    The Complex Team Management Tool is a sophisticated React application 
                    designed to streamline and enhance the collaborative workflow within 
                    complex team structures. Built with a focus on incorporating fundamental
                    React concepts, this app serves as a showcase for various advanced 
                    front-end development techniques. The app also uses data from rest apis 
                    and uses Google's Firestore to store user details. 
                </p>
                <br/>
                <p>
                    <strong>Key Features:</strong> <br/>
                   - Context API for Global State : The Context API is employed to manage global state across components, ensuring a centralized and accessible data source.
                                                    This approach simplifies state management in larger applications with complex component hierarchies.<br/>
                   - Hooks : React Hooks, such as useState and useEffect, are used to enhance the functional components with stateful logic.
                             This modern approach allows functional components to manage state and side effects without the need for class components.<br/>
                   - Optimizing Performance : React's performance optimization strategies, including memoization and PureComponent, are implemented to ensure efficient rendering.
                                              This results in a responsive user interface with minimized unnecessary re-renders.<br/>
                   - Conditional Rendering : React's conditional rendering capabilities are employed to display different views based on the application's state.
                                             This ensures that users are presented with relevant information and features depending on the context of their interactions.
                </p>
            </div>
        </div>
      </div>

      <div id="project3" className="project-section">
        <h2>
        RNN Based Handwriting Classifier and Analysis Tool 
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
        <Carousel slides={slidesHand} />
            <div>
                <br/>
                <h3>
                    <strong>
                    What the project is about: 
                    </strong>
                    </h3>
                <p>
                    The Complex Team Management Tool is a sophisticated React application 
                    designed to streamline and enhance the collaborative workflow within 
                    complex team structures. Built with a focus on incorporating fundamental
                    React concepts, this app serves as a showcase for various advanced 
                    front-end development techniques. The app also uses data from rest apis 
                    and uses Google's Firestore to store user details. 
                </p>
                <br/>
                <p>
                    <strong>Key Features:</strong> <br/>
                   - Context API for Global State : The Context API is employed to manage global state across components, ensuring a centralized and accessible data source.
                                                    This approach simplifies state management in larger applications with complex component hierarchies.<br/>
                   - Hooks : React Hooks, such as useState and useEffect, are used to enhance the functional components with stateful logic.
                             This modern approach allows functional components to manage state and side effects without the need for class components.<br/>
                   - Optimizing Performance : React's performance optimization strategies, including memoization and PureComponent, are implemented to ensure efficient rendering.
                                              This results in a responsive user interface with minimized unnecessary re-renders.<br/>
                   - Conditional Rendering : React's conditional rendering capabilities are employed to display different views based on the application's state.
                                             This ensures that users are presented with relevant information and features depending on the context of their interactions.
                </p>
            </div>
        </div>
      </div>

      <div id="project4" className="project-section">
        <h2>
        Paper Presentation Conference Portal
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
        <Carousel slides={portalimgs} />
            <div>
                <br/>
                <h3>
                    <strong>
                    What the project is about: 
                    </strong>
                    </h3>
                <p>
                    The Complex Team Management Tool is a sophisticated React application 
                    designed to streamline and enhance the collaborative workflow within 
                    complex team structures. Built with a focus on incorporating fundamental
                    React concepts, this app serves as a showcase for various advanced 
                    front-end development techniques. The app also uses data from rest apis 
                    and uses Google's Firestore to store user details. 
                </p>
                <br/>
                <p>
                    <strong>Key Features:</strong> <br/>
                   - Context API for Global State : The Context API is employed to manage global state across components, ensuring a centralized and accessible data source.
                                                    This approach simplifies state management in larger applications with complex component hierarchies.<br/>
                   - Hooks : React Hooks, such as useState and useEffect, are used to enhance the functional components with stateful logic.
                             This modern approach allows functional components to manage state and side effects without the need for class components.<br/>
                   - Optimizing Performance : React's performance optimization strategies, including memoization and PureComponent, are implemented to ensure efficient rendering.
                                              This results in a responsive user interface with minimized unnecessary re-renders.<br/>
                   - Conditional Rendering : React's conditional rendering capabilities are employed to display different views based on the application's state.
                                             This ensures that users are presented with relevant information and features depending on the context of their interactions.
                </p>
            </div>
        </div>
      </div>

      <div id="project5" className="project-section">
        <h2>
        CNN based Fake News Detector 	
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
        <Carousel slides={fakeNewsImg} />
            <div>
                <br/>
                <h3>
                    <strong>
                    What the project is about: 
                    </strong>
                    </h3>
                <p>
                    The Complex Team Management Tool is a sophisticated React application 
                    designed to streamline and enhance the collaborative workflow within 
                    complex team structures. Built with a focus on incorporating fundamental
                    React concepts, this app serves as a showcase for various advanced 
                    front-end development techniques. The app also uses data from rest apis 
                    and uses Google's Firestore to store user details. 
                </p>
                <br/>
                <p>
                    <strong>Key Features:</strong> <br/>
                   - Context API for Global State : The Context API is employed to manage global state across components, ensuring a centralized and accessible data source.
                                                    This approach simplifies state management in larger applications with complex component hierarchies.<br/>
                   - Hooks : React Hooks, such as useState and useEffect, are used to enhance the functional components with stateful logic.
                             This modern approach allows functional components to manage state and side effects without the need for class components.<br/>
                   - Optimizing Performance : React's performance optimization strategies, including memoization and PureComponent, are implemented to ensure efficient rendering.
                                              This results in a responsive user interface with minimized unnecessary re-renders.<br/>
                   - Conditional Rendering : React's conditional rendering capabilities are employed to display different views based on the application's state.
                                             This ensures that users are presented with relevant information and features depending on the context of their interactions.
                </p>
            </div>
        </div>
      </div>

      <div id="project6" className="project-section">
        <h2>
        Client Host Media Controller
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
        </h2> 
        <div>
            <div>
                <br/>
                <h3>
                    <strong>
                    What the project is about: 
                    </strong>
                    </h3>
                <p>
                    The Complex Team Management Tool is a sophisticated React application 
                    designed to streamline and enhance the collaborative workflow within 
                    complex team structures. Built with a focus on incorporating fundamental
                    React concepts, this app serves as a showcase for various advanced 
                    front-end development techniques. The app also uses data from rest apis 
                    and uses Google's Firestore to store user details. 
                </p>
                <br/>
                <p>
                    <strong>Key Features:</strong> <br/>
                   - Context API for Global State : The Context API is employed to manage global state across components, ensuring a centralized and accessible data source.
                                                    This approach simplifies state management in larger applications with complex component hierarchies.<br/>
                   - Hooks : React Hooks, such as useState and useEffect, are used to enhance the functional components with stateful logic.
                             This modern approach allows functional components to manage state and side effects without the need for class components.<br/>
                   - Optimizing Performance : React's performance optimization strategies, including memoization and PureComponent, are implemented to ensure efficient rendering.
                                              This results in a responsive user interface with minimized unnecessary re-renders.<br/>
                   - Conditional Rendering : React's conditional rendering capabilities are employed to display different views based on the application's state.
                                             This ensures that users are presented with relevant information and features depending on the context of their interactions.
                </p>
            </div>
        </div>
      </div>




    </div>

    

    
  );
};

export default Projects;
