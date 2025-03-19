import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

import './styles.css';

interface Technology {
  name: string;
  icon: string;
  strat?: "dark" | "light"; 
}

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: Technology[];
}

type ProjectCategory = 'All' | 'AI/Machine Learning' | 'Fullstack' | 'Cloud' | 'Gen AI/LLMs' ;

export default function Projects() {

  const allProjects: Project[] = [
    {
      title: 'DoubtStack',
      description: 'A doubt-solving forum using the MERN stack, complete with a robust testing suite and Docker containerization, ensuring seamless deployment.',
      image: 'images/project/doubtStack.png',
      githubUrl: 'https://github.com/Sudhanva1999/DockerDoubtStack',
      technologies: [
        { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
        { name: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
        { name: 'MUI', icon: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' },
      ],
    },
    {
      title: 'LLM based Language Learning Portal',
      description: 'A comprehensive language learning web platform built with React and Express.js, featuring structured vocabulary management, progress tracking, and diverse study activities.',
      image: 'images/project/lang-portal.png',
      githubUrl: 'https://github.com/Sudhanva1999/free-genai-bootcamp-2025',
      technologies: [
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'AWS Bedrock', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', strat: 'dark' },
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
      ],
    },
    {
      title: 'LLM based Language Listening App',
      description: 'An AI-powered Marathi listening comprehension tool using AWS Bedrock and Google TTS to generate practice scenarios with native-sounding audio and interactive feedback.',
      image: 'images/project/lang-list.png',
      githubUrl: 'https://github.com/Sudhanva1999/free-genai-bootcamp-2025/tree/main/listening-comp',
      technologies: [
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'AWS Bedrock', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', strat: 'dark' },
        { name: 'Streamlit', icon: 'icons/Streamlit.png' },
      ],
    },
    {
      title: 'LLM based Language Writing App',
      description: 'An interactive Marathi learning application with word selection, sentence generation, and translation practice features, providing detailed feedback on written skills.',
      image: 'images/project/lang-writing.png',
      githubUrl: 'https://github.com/Sudhanva1999/free-genai-bootcamp-2025/tree/main/writing-comp',
      technologies: [
        { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
        { name: 'AWS Bedrock', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', strat: 'dark' },
        { name: 'Streamlit', icon: 'icons/Streamlit.png' },
      ],
    },
    {
      title: 'LLM based Language Speaking App',
      description: 'A Streamlit-based Marathi speaking practice application that generates contextual images, records speech, provides AI-powered analysis, and grades speaking performance.',
      image: 'images/project/lang-speak.png',
      githubUrl: 'https://github.com/Sudhanva1999/free-genai-bootcamp-2025/tree/main/speech-practice',
      technologies: [
        { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
        { name: 'AWS Bedrock', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', strat: 'dark' },
        { name: 'Streamlit', icon: 'icons/Streamlit.png' },
      ],
    },
    {
      title: 'Pixel Manipulation',
      description: 'An Java based image manipulation software made with strict adherence to MVC principles. Code can be made available on request.',
      image: 'images/project/java.png',
      technologies: [
        { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
      ],
    },
    {
      title: 'Handwriting Recognizer',
      description: 'An unique approach to use CNN based pattern analysis to recognize handwriting patterns for multiclass classifications of authors instead of the traditional OCR based approach.',
      image:  'images/project/hand.png',
      githubUrl: 'https://github.com/Sudhanva1999/Handwritting_Classifier',
      technologies: [
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
      ],
    },
    {
      title: 'Expense Tracker App',
      description: 'A react based expense tracker based on Dinics maxflow algorithm.',
      image: 'images/project/expense.png',
      githubUrl: 'https://github.com/Sudhanva1999/expenseBos',
      technologies: [
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'Flask', icon: 'https://cdn.worldvectorlogo.com/logos/flask.svg', strat: 'dark' },
        { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
        { name: 'Firebase', icon: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
      ],
    },
    {
      title: 'Paper Presentation Conference Portal',
      description: 'A php based CRUD application complete with admin dashboard.',
      image: 'images/project/portal.png',
      liveUrl: 'https://spandanycce.in/',
      technologies: [
        { name: 'PHP', icon: 'https://cdn.worldvectorlogo.com/logos/php-4.svg', strat: 'dark'},
        { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
        { name: 'MySql', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg' , strat: 'dark' },
      ],
    },
    {
      title: 'PokeDex',
      description: 'A vanilla javascript client to consume public open api for Pokemon with a likeness recommendation engine.',
      image: 'images/project/pokedex.png',
      githubUrl: 'https://github.com/Sudhanva1999/supply-frame-pokedex',
      technologies: [
        { name: 'Javascript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
        { name: 'HTML', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      ],
    },

    {
      title: 'Java Movie Review',
      description: 'A JAVA-REACT Communication POC that communicates via RESTful Apis.',
      image: 'images/project/movie.png',
      githubUrl: 'https://github.com/Sudhanva1999/JavaReacMovies',
      technologies: [
        { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      ],
    },

    {
      title: 'Client Host Multimedia Player',
      description: 'A multimedia player capable of controlling client multimedia players accross network and controls like play, pause and vloume controls.',
      image: 'images/project/player.png',
      technologies: [
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Javascript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      ],
    },

    {
      title: 'This Site !',
      description: 'This site made entirely using ReactJS and hosted on github pages.',
      image: 'images/project/site.png',
      liveUrl: 'https://sudhanvapaturkar.com/',
      technologies: [
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'HTML', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { name: 'Github', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg', strat: 'dark' },
      ],
    },
  ];
  
  // AI/Machine Learning projects
  const aiProjects: Project[] = [allProjects[6]];
  
  // Fullstack projects
  const fullstackProjects: Project[] = [
    allProjects[0],
    allProjects[1],
    allProjects[7],
    allProjects[8],
    allProjects[9],
    allProjects[10],
  ];
  
  // Cloud projects
  const cloudProjects: Project[] = [
    allProjects[2],
    allProjects[3],
    allProjects[4],
  ];
  
  // Gen AI/LLMs projects
  const genAiProjects: Project[] = [
    allProjects[1],
    allProjects[2],
    allProjects[3],
    allProjects[4],
  ];

  const tabs: ProjectCategory[] = ['All', 'AI/Machine Learning', 'Fullstack', 'Cloud', 'Gen AI/LLMs'];
  
  const [activeTab, setActiveTab] = useState<ProjectCategory>('All');
  const [currentProjects, setCurrentProjects] = useState<Project[]>(allProjects);

  const getProjectsForTab = (tab: ProjectCategory): Project[] => {
    switch(tab) {
      case 'All':
        console.log("all projects - ", allProjects);
        return allProjects;
      case 'AI/Machine Learning':
        console.log("aiProjects projects - ", aiProjects);
        return aiProjects;
      case 'Fullstack':
        console.log("fullstackProjects projects - ", fullstackProjects);
        return fullstackProjects;
      case 'Cloud':
        console.log("cloudProjects projects - ", cloudProjects);
        return cloudProjects;
      case 'Gen AI/LLMs':
        console.log("genAiProjects projects - ", genAiProjects);
        return genAiProjects;
      default:
        return allProjects;
    }
  };

  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
    const proj = getProjectsForTab(activeTab);
    console.log("Projects for this tab:", proj.length);
    setCurrentProjects(proj);
  }, [activeTab]);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-heading">My Projects</h2>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-5 py-3 text-sm font-medium transition-all duration-200 ease-in-out
                  ${activeTab === tab 
                    ? 'text-blue-400 border-b-2 border-blue-400 -mb-px' 
                    : 'text-gray-400 hover:text-blue-300 dark:hover:text-white'}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <ProjectCard 
                key={`${project.title}-${index}-${activeTab}`}
                title={project.title}
                description={project.description}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                technologies={project.technologies}
                reversed={index % 2 !== 0}
              />
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}