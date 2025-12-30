import { useEffect, useContext } from 'react';
import SkillsSphere from './SkillsSphere';
import { ThemeContext } from '@/contexts/ThemeContext';

// Add type definition to match what SkillsSphere expects
type Skill = {
  name: string;
  icon: string;
  strat?: "dark" | "light";
};

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills: {
    languages: Skill[];
    frameworks: Skill[];
    databases: Skill[];
    other: Skill[];
  } = {
    languages: [
      { name: 'C++', icon: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
      { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
      { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
      { name: 'PHP', icon: '/icons/php.svg' },
      { name: 'JS', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      { name: 'HTML', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    ],
    frameworks: [
      { name: 'ReactJS', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
      { name: 'AngularJS', icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
      { name: 'NodeJS', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
      { name: 'ElectronJS', icon: 'https://cdn.worldvectorlogo.com/logos/electron-1.svg' },
      { name: 'Flask', icon: 'icons/flask.png' },
      { name: 'Spring Boot', icon: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg' },
    ],
    databases: [
      { name: 'MySql', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg' },
      { name: 'Oracle', icon: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
      { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { name: 'Google Firestore', icon: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
      { name: 'Amazon S3', icon: 'icons/amazonS3.png' },
    ],
    other: [
      { name: 'Agile', icon: 'https://cdn.worldvectorlogo.com/logos/agile-software.svg', strat: 'dark' },
      { name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { name: 'AWS', icon: theme === 'dark' ? 'icons/aws-dark.png' : 'icons/aws-light.png' },
      { name: 'Jira', icon: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
      { name: 'OpenCV', icon: 'icons/opencv.png' },
    ],
  };

  return (
    <section id="skills" className="w-full h-screen flex items-center justify-center pt-6 pb-4 md:py-20">
      <div className="container mx-auto px-8 md:px-12">
        <div className="mb-6 md:mb-8 animate-on-scroll">
          <h2 className="section-heading">Skills</h2>
        </div>
        
        <div className="animate-on-scroll">
          <SkillsSphere skills={skills} />
        </div>
      </div>
    </section>
  );
}