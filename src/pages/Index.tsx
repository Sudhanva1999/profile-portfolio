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
      title: 'Software Engineer II',
      company: 'Adobe',
      date: 'May 2025 - Present',
      description: 'I build product features in Adobe Acrobat across React and TypeScript frontends. I built the frontend surfaces for AI Voice Over, a generative-AI feature, and worked with the routing and agent teams on its agent integration, handling asynchronous, long-running agent execution on the client. I built the quizzes, flashcards and study packet components behind Study Spaces inside the Jot editor library that renders note documents, and developed an end-to-end extensible toolbar for that editor, including the APIs it exposes across mobile, desktop and web. I also lead frontend development for feature discovery in Acrobat Web and instrumented it with the Adobe Analytics SDK to measure its rollout.',
      icon: <img src="icons/adobe.png" alt={"Adobe Icon"} />,
      technologies: ['React', 'TypeScript', 'Generative AI', 'Agent Integration', 'JavaScript', 'Adobe Analytics', 'Frontend Architecture'],
      button: {
        text: 'View Employer',
        link: 'https://www.adobe.com'
      }
    },
    {
      title: 'Software Engineering Intern',
      company: 'Adobe',
      date: 'Jun 2024 - Aug 2024',
      description: 'I built a personalized, user-data-driven notification system for Adobe Acrobat in Java and Spring Boot that analyzed behavior patterns and increased targeted feature adoption by 15% through customized in-app messaging. I contributed to a Spring Boot microservice processing over 5 million daily log entries with batch processing and multi-threading to generate the user behavior profiles powering the personalization engine, and worked with Apache Kafka pipelines, writing custom producers and consumers to stream data in real time between distributed services.',
      icon: <img src="icons/adobe.png" alt={"Adobe Icon"} />,
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Batch Processing', 'Multi-threading', 'Personalization'],
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
      date: 'Dec 2022 - May 2023',
      description: 'I worked as a consultant with Adobe on their Acrobat Sign product. I integrated in-house AI document-processing APIs into the React frontend and rendered their analysis and extraction results in the product UI. I designed and implemented automated test suites with JUnit4 for backend Java services and Selenium WebDriver for React components, reaching 85% code coverage and a 20% decrease in production regressions, and improved application performance by optimizing async API polling.',
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
      description: 'I worked with Adobe on their document processing solutions. I built document-processing API functionality covering PDF manipulation, digital signature verification and document versioning, along with Splunk dashboards to monitor API performance and system health. I resolved critical customer-reported defects in the enterprise document-signing platform and drove performance work spanning query optimization and caching. My contributions were recognized with the Accenture Pinnacle Award for Product Engineering in FY22-Q4.',
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
