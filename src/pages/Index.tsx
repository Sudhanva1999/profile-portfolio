import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import Socials from '@/components/Socials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TimelineEvent from '@/components/TimelineEvent';
import WorkExperienceCard from '@/components/WorkExperienceCard';
import { ChatWidget } from '@/components/ChatWidget';
import { ExternalLink } from 'lucide-react';
import SchoolIcon from '@mui/icons-material/School';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Total pages: Home(1) + About(4) + Achievements(1) + Projects(1) + Skills(1) + Hobbies(3) + Socials(1) + Contact(1) = 13
  const totalPages = 13;

  // Page names for pagination dots tooltips
  const pageNames = [
    'Home',
    'Adobe',
    'Accenture',
    'Northeastern University',
    'Education',
    'Achievements',
    'Projects',
    'Skills',
    'Photography',
    'Painting',
    '3D Animation',
    'Socials',
    'Contact Me'
  ];

  const adobeExperience = [
    {
      title: 'Software Engineer',
      company: 'Adobe',
      date: 'May 2025 - Present',
      description: 'As a Software Engineer at Adobe, I am working on developing and maintaining critical components of Adobe\'s document processing solutions. My role involves collaborating with cross-functional teams to design and implement scalable features, optimize system performance, and ensure high-quality code delivery. I am actively contributing to the enhancement of Adobe\'s document processing capabilities while maintaining a strong focus on user experience and system reliability.',
      icon: <img src="icons/adobe.png" alt={"Adobe Icon"} />,
      technologies: ['Java', 'Spring Boot', 'React', 'Microservices', 'Cloud Architecture', 'System Design', 'Performance Optimization', 'Code Quality', 'Team Collaboration'],
      button: {
        text: 'View Employer',
        link: 'https://www.adobe.com'
      }
    },
    {
      title: 'Software Engineering Intern',
      company: 'Adobe',
      date: 'Jun 2023 - Aug 2023',
      description: 'At Adobe, I spearheaded key initiatives that enhanced user engagement and streamlined data processing. I developed a personalized notification system for Adobe Acrobat that leveraged user data to drive a 10% increase in feature usage, creating a robust Java Spring-Boot service capable of processing millions of logs for comprehensive user profiles. I designed and implemented an Apache Kafka pipeline to establish efficient data flows between high-volume services handling millions of records, laying groundwork for more responsive and scalable systems. By integrating GraphQL to streamline data retrieval for personalized notifications, I achieved a 30% improvement in fetch times.',
      icon: <img src="icons/adobe.png" alt={"Adobe Icon"} />,
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'GraphQL', 'Data processing', 'Scalable systems'],
      button: {
        text: 'View Employer',
        link: 'https://www.adobe.com'
      }
    }
  ];

  const accentureExperience = [
    {
      title: 'Senior Fullstack Developer',
      company: 'Accenture',
      date: 'Nov 2022 - May 2023',
      description: 'During my time at Accenture, I worked as a consultant with Adobe on their Acrobat Sign product. I significantly improved document processing capabilities and application performance by optimizing API polling, achieving a 5% reduction in page load times for a smoother user experience. I developed image processing algorithms to dynamically generate dark mode versions of signature images, enhancing our web applications visual appeal.',
      icon: <img src="icons/accenture.png" alt={"Accenture Icon"} className="aboutIcons" />,
      technologies: ['API polling', 'Image processing algorithms', 'JUnit4', 'Selenium', 'AI-powered document processing', 'React'],
      button: {
        text: 'View Employer',
        link: 'https://www.accenture.com'
      }
    },
    {
      title: 'Full-stack Developer',
      company: 'Accenture',
      date: 'Jun 2021 - Nov 2022',
      description: 'As a Full-stack developer at Accenture, I worked with Adobe on their document processing solutions and system performance improvements. I refined the document signing platform, resolving 24 customer-reported issues to enhance product stability. My technical expertise was recognized with the Accenture Pinnacle Award for outstanding contributions to Product Engineering in FY22-Q4.',
      icon: <img src="icons/accenture.png" alt={"Accenture Icon"} className="aboutIcons" />,
      technologies: ['Document processing', 'Amazon Elastic-Search', 'Splunk', 'Real-time monitoring', 'Performance optimization'],
      button: {
        text: 'View Employer',
        link: 'https://www.accenture.com'
      }
    }
  ];

  const workStudy = [
    {
      title: "Graduate Teaching Assistant",
      company: "Northeastern University",
      date: "Jan 2025 - May 2025",
      description: "As a Teaching Assistant for Foundations of Software Engineering, I mentored 45+ graduate students by conducting weekly office hours and providing detailed code reviews that improved project quality. I created supplementary learning materials on Github Actions and CI/CD pipelines that were adopted by the professor for future classes.",
      icon: <img src="icons/khoury.png" alt={"khoury Icon"} className="aboutIcons" />,
      technologies: ["Software Architecture", "Code Review", "Git Workflow", "CI/CD", "Agile Methodologies", "Technical Mentorship"],
      button: {
        text: 'View on LinkedIn',
        link: 'https://www.linkedin.com/school/khoury-college/posts/?feedView=all'
      }
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Northeastern University",
      date: "Sep 2024 - Dec 2024",
      description: "During my first semester as a TA for Foundations of Software Engineering, I was helping to manage and mentor a class of 60 students, with a focus on practical application of software design patterns.",
      icon: <img src="icons/khoury.png" alt={"khoury Icon"} className="aboutIcons" />,
      technologies: ["Design Patterns", "Technical Documentation", "Adaptive Teaching", "Systems Architecture"],
      button: {
        text: 'View on LinkedIn',
        link: 'https://www.linkedin.com/school/khoury-college/posts/?feedView=all'
      }
    }
  ];

  const education = [
    {
      title: 'MS in Computer Science',
      company: 'Northeastern University',
      date: 'Aug 2023 - May 2025',
      description: 'With a cumulative GPA of 3.91, I have demonstrated strong academic performance across key computer science disciplines, earning A grades in Web Development, Algorithms, and Database Management Systems. My current focus lies at the intersection of large-scale distributed systems and machine learning, where I am actively developing new-age GenAI applications.',
      icon: <img src="icons/neu.png" alt={"NEU Icon"} />,
      technologies: ['Distributed Systems', 'Machine Learning', 'Web Development', 'Algorithms', 'Database Management', 'Gen AI'],
      button: {
        text: 'View University',
        link: 'https://www.northeastern.edu'
      }
    },
    {
      title: 'B.E. in Computer Science',
      company: 'Nagpur University',
      date: 'June 2017 - May 2021',
      description: 'Graduated with a CGPA of 9.02 and recognized as semester topper twice, demonstrating consistent academic excellence. Led the technical committee for Spandan, an inter-college paper presentation competition at YCCE.',
      icon: <img src="icons/ycceIcon.png" alt={"YCCE Icon"} className="aboutIcons" />,
      technologies: ['C++', 'Java', 'Python', 'Web Development', 'Data Structures', 'Leadership'],
      button: {
        text: 'View University',
        link: 'https://ycce.edu/about-ycce/'
      }
    }
  ];

  useEffect(() => {
    const container = document.querySelector('.main-snap-container');
    if (!container) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('.snap-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Check if section is in the viewport center
        if (rect.top >= -100 && rect.top <= 100) {
          setCurrentPage(index);
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage = (pageIndex: number) => {
    const sections = document.querySelectorAll('.snap-section');
    if (sections[pageIndex]) {
      sections[pageIndex].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Global Pagination Dots with Tooltips */}
      <div className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-4">
        {[...Array(totalPages)].map((_, index) => (
          <div key={index} className="relative group flex items-center">
            <button
              onClick={() => scrollToPage(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-foreground dark:bg-white scale-125 shadow-lg' 
                  : 'bg-foreground/30 dark:bg-white/30 hover:bg-foreground/50 dark:hover:bg-white/50'
              }`}
              aria-label={`Go to ${pageNames[index]}`}
            />
            {/* Tooltip - spring out animation, vertically centered */}
            <div className="absolute left-full ml-2 md:ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 invisible scale-75 origin-left group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none">
              <span className="text-sm md:text-base font-bold text-foreground dark:text-white drop-shadow-lg">{pageNames[index]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Snap Scroll Container */}
      <main className="main-snap-container w-full h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Hero Section - Page 1 */}
            <div className="snap-section">
            <Hero onOpenChat={() => setIsChatOpen(true)} />
            </div>

            {/* About - Adobe Section - Page 2 */}
            <section id="about-adobe" className="snap-section w-full h-screen bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 overflow-y-auto flex items-center pt-6 pb-4 md:py-0">
              <div className="container mx-auto px-8 md:px-12 py-6 md:py-10 max-w-6xl w-full">
                {/* Company Header */}
                <div className="mb-3 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                      <img src="icons/adobe.png" alt="Adobe Icon" className="w-12 h-12 md:w-10 md:h-10 object-contain" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Adobe</h2>
                  </div>
                  <a 
                    href="https://www.adobe.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 md:gap-2 text-white/80 hover:text-white transition-colors text-xs md:text-base"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View Employer</span>
                  </a>
                </div>

                {/* Experience Cards */}
                <div className="space-y-3 md:space-y-8">
                  {adobeExperience.map((job, index) => (
                    <WorkExperienceCard
                      key={index}
                      title={job.title}
                      date={job.date}
                      description={job.description}
                      technologies={job.technologies}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* About - Accenture Section - Page 3 */}
            <section id="about-accenture" className="snap-section w-full h-screen bg-gradient-to-br from-purple-700 to-purple-900 overflow-y-auto flex items-center pt-6 pb-4 md:py-0">
              <div className="container mx-auto px-8 md:px-12 py-6 md:py-10 max-w-6xl w-full">
                {/* Company Header */}
                <div className="mb-3 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                      <img src="icons/accenture.png" alt="Accenture Icon" className="aboutIcons w-12 h-12 md:w-10 md:h-10 object-contain" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Accenture</h2>
                  </div>
                  <a 
                    href="https://www.accenture.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 md:gap-2 text-white/80 hover:text-white transition-colors text-xs md:text-base"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View Employer</span>
                  </a>
                </div>

                {/* Experience Cards */}
                <div className="space-y-3 md:space-y-8">
                  {accentureExperience.map((job, index) => (
                    <WorkExperienceCard
                      key={index}
                      title={job.title}
                      date={job.date}
                      description={job.description}
                      technologies={job.technologies}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* About - Northeastern Section - Page 4 */}
            <section id="about-northeastern" className="snap-section w-full h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black overflow-y-auto flex items-center pt-6 pb-4 md:py-0">
              <div className="container mx-auto px-8 md:px-12 py-6 md:py-10 max-w-6xl w-full">
                {/* Company Header */}
                <div className="mb-3 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-1">
                    <img src="icons/khoury.png" alt="Khoury Icon" className="aboutIcons w-16 h-16 md:w-14 md:h-14 object-contain" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Northeastern University</h2>
                  </div>
                  <p className="text-white/80 text-sm md:text-base mb-2 ml-18 md:ml-17">Teaching Assistant Experience</p>
                  <a 
                    href="https://www.linkedin.com/school/khoury-college/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 md:gap-2 text-white/80 hover:text-white transition-colors text-xs md:text-base ml-23 md:ml-20"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View on LinkedIn</span>
                  </a>
                </div>

                {/* Experience Cards */}
                <div className="space-y-3 md:space-y-8">
                  {workStudy.map((job, index) => (
                    <WorkExperienceCard
                      key={index}
                      title={job.title}
                      date={job.date}
                      description={job.description}
                      technologies={job.technologies}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* About - Education Section - Page 5 */}
            <section id="about-education" className="snap-section w-full h-screen bg-gradient-to-br from-blue-900 to-blue-950 overflow-y-auto flex items-center pt-6 pb-4 md:py-0">
              <div className="container mx-auto px-8 md:px-12 py-6 md:py-10 max-w-6xl w-full">
                {/* Section Header */}
                <div className="mb-3 md:mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2 md:gap-3">
                    <SchoolIcon sx={{ fontSize: { xs: 32, md: 44 } }} className="text-white" />
                    Education
                  </h2>
                </div>

                {/* Education Cards */}
                <div className="space-y-3 md:space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300">
                      {/* University Header */}
                      <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-4">
                        <img 
                          src={edu.icon.props.src} 
                          alt={edu.icon.props.alt} 
                          className="w-16 h-16 md:w-16 md:h-16 object-contain"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-2 mb-1 md:mb-2">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{edu.title}</h3>
                              <p className="text-lg md:text-lg text-gray-700 font-medium">{edu.company}</p>
                            </div>
                            <span className="text-xs md:text-base text-gray-600 whitespace-nowrap font-medium">{edu.date}</span>
                          </div>
                          {edu.button && (
                            <a 
                              href={edu.button.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 md:gap-2 text-blue-600 hover:text-blue-700 transition-colors text-xs md:text-sm"
                            >
                              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                              <span>{edu.button.text}</span>
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 mb-3 md:mb-6 leading-snug md:leading-relaxed text-xs md:text-base">
                        {edu.description}
                      </p>
                      
                      {/* Technologies */}
                      {edu.technologies && edu.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {edu.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-sm bg-black text-white rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Achievements & Certifications - Page 6 */}
            <div className="snap-section">
              <Achievements />
            </div>

            {/* Projects - Page 7 */}
            <div className="snap-section">
              <Projects />
            </div>

            {/* Skills - Page 9 */}
            <div className="snap-section">
              <Skills />
            </div>

            {/* Hobbies - Pages 9-12 */}
            <Hobbies />

            {/* Socials - Page 11 */}
            <div className="snap-section">
              <Socials />
            </div>

            {/* Contact Me - Page 12 */}
            <div className="snap-section">
              <Contact />
              <Footer />
            </div>
      </main>

      {/* Custom CSS for smooth snap scrolling */}
      <style>{`
        .main-snap-container {
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .main-snap-container::-webkit-scrollbar {
          display: none;
        }

        .snap-section {
          min-height: 100vh;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
      `}</style>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
