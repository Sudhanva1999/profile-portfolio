import { useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import TimelineEvent from './TimelineEvent';

export default function About() {
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

  const workExperience = [
    {
      title: 'Software Engineering Intern',
      company: 'Adobe',
      date: 'Jun 2023 - Aug 2023',
      description: 'At Adobe, I spearheaded key initiatives that enhanced user engagement and streamlined data processing. I developed a personalized notification system for Adobe Acrobat that leveraged user data to drive a 10% increase in feature usage, creating a robust Java Spring-Boot service capable of processing millions of logs for comprehensive user profiles. I designed and implemented an Apache Kafka pipeline to establish efficient data flows between high-volume services handling millions of records, laying groundwork for more responsive and scalable systems. By integrating GraphQL to streamline data retrieval for personalized notifications, I achieved a 30% improvement in fetch times. These projects demonstrate my proficiency in building scalable, data-driven solutions that improve system performance and deliver tangible benefits to end-users, showcasing my ability to tackle complex technical challenges in large-scale software applications.',
      icon: <img src="icons/adobe.svg" alt={"Adobe Icon"} className="filter" />,
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'GraphQL', 'Data processing', 'Scalable systems', 'Personalized notification systems', 'User profiling', 'High-volume services', 'Data retrieval optimization']
    },
    {
      title: 'Senior Fullstack Developer',
      company: 'Accenture',
      date: 'Nov 2022 - May 2023',
      description: 'During my time at Accenture, I worked as a consultant with Adobe on their Acrobat Sign product. I significantly improved document processing capabilities and application performance by optimizing API polling, achieving a 5% reduction in page load times for a smoother user experience. I developed image processing algorithms to dynamically generate dark mode versions of signature images, enhancing our web applications visual appeal. To ensure code reliability, I implemented comprehensive automated testing using JUnit4 and Selenium, reducing regression issues by 20%. A key contribution was integrating AI-powered document processing APIs into our React-based single-page application, expanding functionality and improving user interaction. This experience combined my technical skills with creative problem-solving to deliver tangible product improvements.',
      icon: <img src="icons/accenture.png" alt={"Accenture Icon"} className="filter aboutIcons" />,
      technologies: ['API polling', 'Image processing algorithms', 'JUnit4', 'Selenium', 'AI-powered document processing', 'React', 'Single-page application', 'Automated testing']
    },
    {
      title: 'Full-stack Developer',
      company: 'Accenture',
      date: 'Jun 2021 - Nov 2022',
      description: 'As a Full-stack developer at Accenture, I worked with Adobe on their document processing solutions and system performance improvements. I refined the document signing platform, resolving 24 customer-reported issues to enhance product stability and user satisfaction. I expanded capabilities by designing API functionalities using Amazon Elastic-Search and created a Splunk dashboard for real-time performance monitoring. Through code reviews and targeted optimizations, I contributed to a 5% reduction in application response times. My technical expertise was recognized with the Accenture Pinnacle Award for outstanding contributions to Product Engineering in FY22-Q4. These experiences demonstrate my ability to implement innovative solutions and deliver measurable improvements in software quality and performance.',
      icon: <img src="icons/accenture.png" alt={"Accenture Icon"} className="filter aboutIcons" />,
      technologies: ['Document processing', 'Amazon Elastic-Search', 'Splunk', 'Real-time monitoring', 'Performance optimization', 'Code review']    
    },
    {
      title: 'Software Engineering Intern',
      company: 'Sacchidanand Utec',
      date: 'May 2019 - Nov 2019',
      description: 'During my internship, I led the development of a web-based dashboard for smart home automation tools, focusing on managing and analysing sensor data. Leveraging ReactJS, I created lightweight, efficient dashboards adhering to MVC principles, demonstrating my proficiency in modern front-end technologies. Beyond technical contributions, I took on a leadership role, guiding a team of 10 interns and facilitating regular scrum meetings. This experience honed my project management skills, ensuring timely delivery and fostering a collaborative environment. My dedication to product development and overall performance did not go unnoticed, as I was honored with the Best Intern award. This recognition underscored my ability to not only execute technical tasks effectively but also to lead and inspire a team towards achieving project goals.',
      icon: <img src="images/utechThumb.png" alt={"Accenture Icon"} className="filter aboutIcons" />,
      technologies: ['ReactJS', 'MVC principles', 'Web-based dashboard', 'Smart home automation', 'Sensor data analysis', 'Scrum', 'Project management']
    },
  ];

  const education = [
    {
      title: 'MS in Computer Science',
      company: 'Northeastern University',
      date: '2023 - Present',
      description: 'With a cumulative GPA of 3.91, I have demonstrated strong academic performance across key computer science disciplines, earning A grades in Web Development, Algorithms, and Database Management Systems, and an A- in Programming Design Paradigm under Professor Amit Shesh. My current focus lies at the intersection of large-scale distributed systems and machine learning, where I am actively developing new-age GenAI applications through rapid prototyping methodologies. This hands-on approach has deepened my understanding of machine learning concepts while sharpening my ability to quickly iterate and deploy innovative solutions that leverage cutting-edge AI technologies.',
      icon: <img src="icons/neu.png" alt={"NEU Icon"} className="filter dark:invert" />,
      technologies: ['Distributed Systems', 'Machine Learning', 'Web Development', 'Algorithms', 'Database Management', 'Gen Ai', 'Rapid Prototyping'],
    },
    {
      title: 'B.E. in Computer Science',
      company: 'Nagpur University',
      date: '2017 - 2021',
      description: 'Graduated with a CGPA of 9.02 and recognized as semester topper twice, demonstrating consistent academic excellence. Shared my technical knowledge by conducting web development workshops for juniors and teaching programming basics to high school students at Compufest. Led the technical committee for Spandan, an inter-college paper presentation competition at YCCE, where I coordinated all technical aspects of the event and managed the selection process. My combination of academic achievement, teaching experience, and leadership capabilities showcases my well-rounded technical profile.',
      icon: <img src="icons/ycceIcon.png" alt={"NEU Icon"} className="filter aboutIcons " />,
      technologies: ['C++', 'Java', 'Python', 'Web Development', 'Data Structures', 'Semester Topper', 'Workshops', 'Leadership', 'Paper Presentation' ],
    },
  ];

  const workStudy = [
    {
      "title": "Graduate Teaching Assistant",
      "company": "Northeastern University",
      "date": "Jan 2025 - May 2025",
      "description": "As a Teaching Assistant for Foundations of Software Engineering, I mentored 45+ graduate students by conducting weekly office hours and providing detailed code reviews that improved project quality and helped students understand the nuances of Software Engineering. I created supplementary learning materials on Github Actions and CI/CD pipelines that were adopted by the professor for future classes. I also collaborated with the professor to redesign a major group assignment, incorporating industry-relevant Agile methodologies that better prepared students for real-world software development practices.",
      "icon": <img src="icons/khoury.png" alt={"khoury Icon"} className="filter aboutIcons " />,
      "technologies": ["Software Architecture", "Code Review", "Git Workflow", "CI/CD", "Agile Methodologies", "Technical Mentorship", "Debugging", "Software Testing", "Project Management", "Educational Content Creation"]
    },
    {
      "title": "Graduate Teaching Assistant",
      "company": "Northeastern University",
      "date": "Sep 2024 - Dec 2024",
      "description": "During my first semester as a TA for Foundations of Software Engineering, I was helping to manage and mentor a class of 60 students, with a focus on practical application of software design patterns. Working closely with a diverse student body, I adapted my teaching approach to accommodate different learning styles and technical backgrounds. ",
      "icon": <img src="icons/khoury.png" alt={"khoury Icon"} className="filter aboutIcons " />,
      "technologies": ["Design Patterns", "Technical Documentation", "Adaptive Teaching", "Peer Review Systems", "Software Requirements", "Systems Architecture", "Knowledge Transfer", "Team Collaboration", "Problem Solving", "Educational Innovation"]
    },
  ];

  const achievements = [
    {
      title: "SharkHack Hackathon Winner",
      company: "Simmons University",
      date: "2025",
      description: "Received the prestigious Pinnacle Award for outstanding contributions to Product Engineering in FY22-Q4, recognizing exceptional performance and innovation in software development.",
      icon: <img src="icons/shark.png" alt={"SharkHack Icon"} className="filter aboutIcons" />,
      technologies: ["Product Engineering", "Innovation", "LLMS", "Technical Excellence", "Hackathon", "The Moonshot Venture Award"]
    },
    {
      title: "Accenture Pinnacle Award",
      company: "Accenture",
      date: "2022",
      description: "Received the prestigious Pinnacle Award for outstanding contributions to Product Engineering in FY22-Q4, recognizing exceptional performance and innovation in software development.",
      icon: <img src="icons/accenture.png" alt={"Accenture Icon"} className="filter aboutIcons" />,
      technologies: ["Product Engineering", "Innovation", "Leadership", "Technical Excellence"]
    },
    {
      title: "Best Intern Award",
      company: "Sacchidanand Utec",
      date: "2019",
      description: "Recognized for exceptional performance and leadership during internship, successfully leading a team of 10 interns and delivering high-quality solutions for smart home automation.",
      icon: <img src="images/utechThumb.png" alt={"Accenture Icon"} className="filter aboutIcons" />,
      technologies: ["Leadership", "Project Management", "Technical Innovation", "Team Collaboration"]
    },
    {
      title: "Semester Topper",
      company: "Nagpur University",
      date: "2017-2021",
      description: "Achieved top academic performance twice during undergraduate studies, maintaining a CGPA of 9.02 while actively participating in technical workshops and leadership roles.",
      icon: <img src="icons/ycceIcon.png" alt={"NEU Icon"} className="filter aboutIcons " />,
      technologies: ["Academic Excellence", "Technical Leadership", "Workshop Organization", "Student Mentorship"]
    }
  ];

  return (
    <section id="about" className="section min-h-0 h-auto w-full">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-16 animate-on-scroll">
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="animate-on-scroll">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="relative mt-8">
              {workExperience.map((job, index) => (
                <TimelineEvent key={index} {...job} />
              ))}
            </div>

            <div className="animate-on-scroll customTopPadding">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-primary" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              
              <div className="relative mt-8">
                {achievements.map((achievement, index) => (
                  <TimelineEvent key={index} {...achievement} />
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="relative mt-8">
                {education.map((edu, index) => (
                  <TimelineEvent key={index} {...edu} />
                ))}
              </div>
            </div>

            <div className="animate-on-scroll customTopPadding">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-primary" />
                <h3 className="text-2xl font-bold">Work Study</h3>
              </div>
              
              <div className="relative mt-8">
                {workStudy.map((edu, index) => (
                  <TimelineEvent key={index} {...edu} />
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}