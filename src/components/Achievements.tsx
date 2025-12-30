import { useEffect, useRef, useState, useContext } from 'react';
import { ExternalLink, X } from 'lucide-react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { ThemeContext } from '@/contexts/ThemeContext';

interface Achievement {
  title: string;
  company: string;
  date: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  button: {
    text: string;
    link: string;
  };
  gridSize?: string; // e.g., 'col-span-1 row-span-1'
}

export default function Achievements() {
  const { theme } = useContext(ThemeContext);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    // A - Left tall card (rows 1-2, col 1)
    {
      title: "Best Intern Award",
      company: "Sacchidanand Utech",
      date: "2019",
      description: "Recognized for exceptional performance and leadership during internship, successfully leading a team of 10 interns and delivering high-quality solutions for smart home automation.",
      icon: <img src="images/utechThumb.png" alt="Utech Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["Leadership", "Project Management", "Technical Innovation", "Team Collaboration"],
      button: {
        text: 'View Certificate',
        link: 'https://drive.google.com/file/d/1jmFdIV4Gx7WDL1TSXdtkCzaZOOP-bjNX/view?usp=sharing'
      },
      gridSize: ''
    },
    // B - Top card (row 1, col 2)
    {
      title: "GenAI Bootcamp Certificate",
      company: "ExamPro",
      date: "2025",
      description: "Earned the GenAl Bootcamp Certificate (Gold Squad), demonstrating foundational knowledge of GenAI, RAGs, Local and Hosted LLMs, Agentic LLMs, and more.",
      icon: <img src={theme === 'dark' ? "icons/exampro.png" : "icons/exampro-dark-min.png"} alt="ExamPro Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["GenAI", "RAGs", "Local and Hosted LLMs", "Agentic LLMs", "Google Gemeni", "OpenAI", "Anthropic", "Gemini", "Claude", "Amazon AWS Bedrock"],
      button: {
        text: 'View Certificate',
        link: 'https://app.exampro.co/student/achievements/validate/certificate/DKJr3qqbBe7zSUywc_N5ig2f1ad'
      },
      gridSize: ''
    },
    // C - Bottom card (row 2, col 2)
    {
      title: "AWS Developer Associate",
      company: "Amazon Web Services",
      date: "2022",
      description: "Earned the AWS Developer Associate certification, demonstrating thorough knowledge of AWS services and cloud computing concepts.",
      icon: <img src={theme === 'dark' ? "icons/aws-light.png" : "icons/aws-dark.png"} alt="AWS Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["AWS Lambda", "AWS CloudFront", "AWS S3", "AWS EC2", "AWS API Gateway", "AWS DynamoDB", "AWS IAM", "AWS CloudWatch", "AWS CloudTrail", "AWS CloudFormation"],
      button: {
        text: 'View Certificate',
        link: 'https://www.credly.com/badges/013e77c5-dbbd-4a28-b7b1-89dec611a088?'
      },
      gridSize: ''
    },
    // D - Middle tall card (rows 1-2, col 3)
    {
      title: "SharkHack Hackathon Winner",
      company: "Simmons University",
      date: "2025",
      description: "Won the SharkHack Hackathon with an innovative AI-powered study companion, demonstrating excellence in hackathon development and presentation.",
      icon: <img src="icons/shark.png" alt="SharkHack Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["Product Engineering", "Innovation", "LLMS", "Technical Excellence", "Hackathon", "The Moonshot Venture Award"],
      button: {
        text: 'View Project on Devpost',
        link: 'https://devpost.com/software/studybuddy-ly7g2z'
      },
      gridSize: ''
    },
    // E - Right very tall card (rows 1-3, col 4)
    {
      title: "Accenture Pinnacle Award",
      company: "Accenture",
      date: "2022",
      description: "Received the prestigious Pinnacle Award for outstanding contributions to Product Engineering in FY22-Q4, recognizing exceptional performance and innovation in software development.",
      icon: <img src="icons/accenture.png" alt="Accenture Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["Product Engineering", "Innovation", "Leadership", "Technical Excellence"],
      button: {
        text: 'View Certificate',
        link: 'https://drive.google.com/file/d/191n9nujcOgtsqLQC5Dgzs8nIQElipFq5/view?usp=sharing'
      },
      gridSize: ''
    },
    // F - Bottom wide card (row 3, cols 1-2)
    {
      title: "Semester Topper",
      company: "Nagpur University",
      date: "2017-2021",
      description: "Achieved top academic performance twice during undergraduate studies, maintaining a CGPA of 9.02 while actively participating in technical workshops and leadership roles.",
      icon: <img src="icons/ycceIcon.png" alt="YCCE Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["Academic Excellence", "Technical Leadership", "Workshop Organization", "Student Mentorship"],
      button: {
        text: 'View Certificate',
        link: 'https://drive.google.com/file/d/1y-Y1toAycfIx1qpT6-Ls73zH8FYNr6-4/view?usp=sharing'
      },
      gridSize: ''
    },
    // G - Bottom right card (row 3, col 3)
    {
      title: "Adobe Bravo Award",
      company: "Adobe",
      date: "2023",
      description: "Recognized with the Adobe Bravo Award for exceptional team collaboration and delivering high-impact solutions that significantly improved system performance and user experience.",
      icon: <img src="icons/adobe.png" alt="Adobe Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />,
      technologies: ["Team Collaboration", "System Performance", "User Experience", "Innovation", "Problem Solving"],
      button: {
        text: 'View Recognition',
        link: 'https://www.adobe.com'
      },
      gridSize: ''
    }
  ];

  // Auto-scroll effect - continuous, no pause
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;

        // Reset for seamless loop
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Duplicate achievements for seamless loop
  const duplicatedAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <>
      <section id="achievements" className="w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-6 pb-4 md:py-8 relative">
        <div className="container mx-auto px-8 md:px-12 mb-6 z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center flex items-center justify-center gap-2">
            <EmojiEventsIcon sx={{ fontSize: { xs: 28, md: 44 } }} />
            Achievements & Certifications
          </h2>
          <p className="text-center text-foreground/70 text-sm md:text-base mt-2">
            Click to show more details!
          </p>
        </div>

        {/* Centered wrapper with max-width and overflow hidden */}
        <div className="relative w-full h-[280px] md:h-[480px] overflow-hidden flex items-center justify-center">
          <div 
            className="relative overflow-hidden h-full"
            style={{ 
              maxWidth: '1400px',
              width: '100%'
            }}
          >

            {/* Scrolling container with opacity fade */}
            <div 
              ref={scrollContainerRef}
              className="h-full flex items-center"
              style={{ 
                overflowX: 'scroll',
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                paddingLeft: '40px',
                paddingRight: '40px',
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
              }}
            >
              {/* Grid container for bento cards */}
              <div className="flex gap-4 md:gap-12 px-4 md:px-12">
                {[...Array(Math.ceil(duplicatedAchievements.length / 7))].map((_, setIndex) => {
                  // Responsive grid sizing
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                  const colWidth = isMobile ? 100 : 160;
                  const rowHeight = isMobile ? 80 : 140;
                  const gridWidth = isMobile ? 520 : 840;
                  
                  return (
                  <div 
                    key={setIndex}
                    className="grid gap-2 md:gap-4 flex-shrink-0"
                    style={{
                      gridTemplateColumns: `repeat(5, ${colWidth}px)`,
                      gridTemplateRows: `repeat(3, ${rowHeight}px)`,
                      width: `${gridWidth}px`
                    }}
                  >
                    {/* Card A - spans rows 1-2, col 1 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '1', gridRow: '1 / 3' }}
                      onClick={() => setSelectedAchievement(achievements[0])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">
                        <img src="images/utechThumb.png" alt="Utech Icon" className="w-6 h-6 md:w-12 md:h-12 object-contain" />
                      </div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[0].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[0].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[0].date}</p>
                    </div>

                    {/* Card B - row 3, cols 1-2 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '1 / 3', gridRow: '3' }}
                      onClick={() => setSelectedAchievement(achievements[1])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">{achievements[1].icon}</div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[1].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[1].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[1].date}</p>
                    </div>

                    {/* Card C - row 1, cols 2-3 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '2 / 4', gridRow: '1' }}
                      onClick={() => setSelectedAchievement(achievements[2])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">{achievements[2].icon}</div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[2].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[2].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[2].date}</p>
                    </div>

                    {/* Card D - row 2, cols 2-3 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '2 / 4', gridRow: '2' }}
                      onClick={() => setSelectedAchievement(achievements[3])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">{achievements[3].icon}</div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[3].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[3].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[3].date}</p>
                    </div>

                    {/* Card E - row 3, cols 3-4 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '3 / 5', gridRow: '3' }}
                      onClick={() => setSelectedAchievement(achievements[4])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">{achievements[4].icon}</div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[4].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[4].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[4].date}</p>
                    </div>

                    {/* Card F - rows 1-2, col 4 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '4', gridRow: '1 / 3' }}
                      onClick={() => setSelectedAchievement(achievements[5])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">{achievements[5].icon}</div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[5].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[5].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[5].date}</p>
                    </div>

                    {/* Card G - rows 1-3, col 5 */}
                    <div
                      className="bg-foreground text-background rounded-xl md:rounded-2xl p-2 md:p-6 cursor-pointer transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl flex flex-col items-center justify-center text-center"
                      style={{ gridColumn: '5', gridRow: '1 / 4' }}
                      onClick={() => setSelectedAchievement(achievements[6])}
                    >
                      <div className="flex-shrink-0 mb-1 md:mb-3">{achievements[6].icon}</div>
                      <h3 className="text-[10px] md:text-base font-bold mb-0.5 md:mb-1 leading-tight">{achievements[6].title}</h3>
                      <p className="text-[8px] md:text-xs opacity-70 leading-tight">{achievements[6].company}</p>
                      <p className="text-[8px] md:text-xs font-semibold text-accent mt-1 md:mt-2">{achievements[6].date}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CSS to hide scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <div 
            className="bg-card text-card-foreground rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                {selectedAchievement.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{selectedAchievement.title}</h2>
                <p className="text-base opacity-70">{selectedAchievement.company}</p>
                <p className="text-sm font-semibold text-primary mt-1">{selectedAchievement.date}</p>
              </div>
            </div>
            
            <p className="text-base opacity-80 mb-4 leading-relaxed">
              {selectedAchievement.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedAchievement.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedAchievement.button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              <span>{selectedAchievement.button.text}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
