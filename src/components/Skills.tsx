import { useEffect } from 'react';
import SkillCategory from './SkillCategory';

// Add type definition to match what SkillCategory expects
type Skill = {
  name: string;
  icon: string;
  strat?: "dark" | "light";
};

export default function Skills() {
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
      { name: 'Flask', icon: 'https://cdn.worldvectorlogo.com/logos/flask.svg', strat: 'dark' },
      { name: 'Spring Boot', icon: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg' },
    ],
    databases: [
      { name: 'MySql', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg' },
      { name: 'Oracle', icon: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
      { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { name: 'Google Firestore', icon: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
      { name: 'Amazon S3', icon: 'https://cdn.worldvectorlogo.com/logos/amazon-s3.svg', strat: 'dark' },
    ],
    other: [
      { name: 'Agile', icon: 'https://cdn.worldvectorlogo.com/logos/agile-software.svg', strat: 'dark' },
      { name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', strat: 'dark' },
      { name: 'Jira', icon: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
      { name: 'OpenCV', icon: 'icons/opencv.png' },
    ],
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16 animate-on-scroll">
          <h2 className="section-heading">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <SkillCategory title="Languages" skills={skills.languages} delay={100} />
          <SkillCategory title="Frameworks" skills={skills.frameworks} delay={200} />
          <SkillCategory title="Databases" skills={skills.databases} delay={300} />
          <SkillCategory title="Other" skills={skills.other} delay={400} />
        </div>
      </div>
    </section>
  );
}