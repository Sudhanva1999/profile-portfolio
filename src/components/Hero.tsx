import { useEffect, useRef, useState, useContext } from "react";
import { Download, MessageCircle } from "lucide-react";
import { ThemeContext } from '@/contexts/ThemeContext';

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const { theme } = useContext(ThemeContext);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello!";
  const [showCursor, setShowCursor] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".hero-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Terminal typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const typingSpeed = 200; // Slower, consistent typing speed
    const deletingSpeed = 200; // Same speed for deleting
    const pauseBeforeDelete = 1500; // Longer pause before deleting
    const pauseBeforeRestart = 800; // Longer pause before restarting

    const animateText = () => {
      // When typing
      if (!isDeleting && currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
        
        if (currentIndex > fullText.length) {
          // Pause before starting to delete
          isDeleting = true;
          setTimeout(animateText, pauseBeforeDelete);
          return;
        }
        
        setTimeout(animateText, typingSpeed);
        return;
      }
      
      // When deleting
      if (isDeleting && currentIndex >= 0) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex--;
        
        if (currentIndex === 0) {
          // Reset after fully deleted
          isDeleting = false;
          setTimeout(animateText, pauseBeforeRestart);
          return;
        }
        
        setTimeout(animateText, deletingSpeed);
        return;
      }
    };

    // Start the animation
    const animationTimeout = setTimeout(animateText, 500);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(animationTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: "icons/github-dark.png",
      iconLight: "icons/github-light.png",
      url: "https://github.com/Sudhanva1999",
    },
    {
      name: "Instagram",
      icon: "icons/instagram-dark.png",
      iconLight: "icons/instagram-light.png",
      url: "https://instagram.com/sudhanva1999",
    },
    {
      name: "LinkedIn",
      icon: "icons/linkedin-dark-min.png",
      iconLight: "icons/linkedin-light-min.png",
      url: "https://linkedin.com/in/sudhanvapaturkar",
    },
  ];

  const fullDescription = `I am Sudhanva Paturkar, a Software Engineer at Adobe with a Master's degree in Computer Science from Northeastern University's Khoury College. With expertise in full-stack development and a passion for GenAI and LLMs, I specialize in building scalable document processing solutions. My experience spans from developing high-performance systems to creating innovative AI-powered applications. Explore my projects and feel free to connect with me on my socials!`;

  return (
    <section id="home" className="w-full h-screen flex items-center justify-center pt-6 pb-4 md:py-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center px-8 md:px-12 max-h-screen overflow-y-auto md:overflow-visible">
        <div className="order-1 md:order-2 flex justify-center hero-animate opacity-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative z-10">
              <img
                src="/images/profile.png"
                alt="Sudhanva Paturkar"
                className="w-full h-full object-cover customShadow"
              />
            </div>
          </div>
        </div>
        <div className="order-2 md:order-1 hero-animate opacity-0">
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 tracking-tighter leading-tight">
            <h1 className="relative font-mono">
              <span className="terminal-text">{displayText}</span>
              <span className={`terminal-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </h1>
          </div>
          
          <div className="mb-4 md:mb-6">
            <p className={`text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed ${!isExpanded ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
              I am{" "}
              <span className="text-primary font-semibold">
                Sudhanva Paturkar
              </span>
              , a Software Engineer at Adobe with a Master's degree in Computer Science from Northeastern University's Khoury College. With expertise in full-stack development and a passion for GenAI and LLMs, I specialize in building scalable document processing solutions. My experience spans from developing high-performance systems to creating innovative AI-powered applications. Explore my projects and feel free to connect with me on my socials!
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden text-primary text-sm font-medium mt-2 hover:underline"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground/5 hover:bg-primary hover:text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label={link.name}
              >
                <img
                  src={link.iconLight && theme === 'light' ? link.iconLight : link.icon}
                  alt={link.name}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
            ))}

            <a
              target="_blank"
              href="files/resume.pdf"
              download
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-300 text-sm md:text-base"
            >
              <Download className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </a>

            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 text-sm md:text-base font-medium shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Chat with me</span>
              <span className="sm:hidden">Chat</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}