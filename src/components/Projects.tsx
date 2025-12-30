import ProjectGrid from './ProjectGrid';
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
  devpostUrl?: string;
  technologies: Technology[];
  isHackathonWinner?: boolean;
  categories: string[];
}

type ProjectCategory = 'All' | 'AI/Machine Learning' | 'Fullstack' | 'Cloud' | 'Gen AI/LLMs';

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
      categories: ['Fullstack', 'Cloud'],
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
      categories: ['Fullstack', 'Gen AI/LLMs', 'Cloud'],
    },
    {
      title: 'Pixel Manipulation',
      description: 'An Java based image manipulation software made with strict adherence to MVC principles. Code can be made available on request.',
      image: 'images/project/java.png',
      technologies: [
        { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
      ],
      categories: ['Fullstack'],
    },
    {
      title: 'Study Buddy',
      description: 'An AI-powered study assistant that transforms educational videos and documents into interactive learning tools. It extracts key insights to generate detailed notes, flashcards, and dynamic visual mind maps.',
      image: 'images/project/study.png',
      githubUrl: 'https://github.com/Sudhanva1999/StudyBuddyHackathon',
      devpostUrl: 'https://devpost.com/software/studybuddy-ly7g2z',
      isHackathonWinner: true,
      technologies: [
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Google Gemeni', icon: 'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg' },
      ],
      categories: ['AI/Machine Learning', 'Gen AI/LLMs', 'Fullstack'],
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
      categories: ['Gen AI/LLMs', 'Cloud'],
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
      categories: ['Gen AI/LLMs', 'Cloud'],
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
      categories: ['Gen AI/LLMs', 'Cloud'],
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
      categories: ['AI/Machine Learning'],
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
      categories: ['Fullstack', 'Cloud'],
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
      categories: ['Fullstack'],
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
      categories: ['Fullstack'],
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
      categories: ['Fullstack'],
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
      categories: ['Fullstack'],
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
      categories: ['Fullstack'],
    },
  ];

  const categories: ProjectCategory[] = ['All', 'AI/Machine Learning', 'Fullstack', 'Cloud', 'Gen AI/LLMs'];

  return (
    <section id="projects" className="w-full h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-0">
      <div className="container mx-auto h-full flex flex-col max-h-full px-4 md:px-8">
        {/* Title */}
        <div className="flex-shrink-0 pt-3 md:pt-8 pb-2 md:pb-4">
          <h2 className="section-heading text-xl sm:text-4xl mb-1 sm:mb-2">Explore My Projects</h2>
          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs font-medium text-foreground/80">
                <span className="text-primary font-bold">{allProjects.length}</span> projects
              </span>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex-1 min-h-0">
          <ProjectGrid projects={allProjects} categories={categories} />
        </div>
      </div>
    </section>
  );
}
