import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello!";
  const [showCursor, setShowCursor] = useState(true);

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
      icon: "/icons/github.svg",
      url: "https://github.com/Sudhanva1999",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      url: "https://instagram.com/sudhanva1999",
    },
    {
      name: "LinkedIn",
      icon:"/icons/linkedin.svg",
      url: "https://linkedin.com/in/sudhanvapaturkar",
    },
  ];

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-2 flex justify-center hero-animate opacity-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="w-80 h-80 md:w-96 md:h-96 relative z-10">
              <img
                src="/images/profile.png"
                alt="Sudhanva Paturkar"
                className="w-full h-full object-cover customShadow"
              />
            </div>
          </div>
        </div>
        <div className="order-2 md:order-1 hero-animate opacity-0">
          <div className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight">
            <h1 className="relative font-mono">
              <span className="terminal-text">{displayText}</span>
              <span className={`terminal-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
            I am{" "}
            <span className="text-primary font-semibold">
              Sudhanva Paturkar
            </span>
            , a Fullstack Developer currently pursuing my masters from
            Northeastern University's Khoury College of Computer Sciences. With
            a strong foundation in both front-end and back-end technologies and
            a passion for GenAi and LLMs, I thrive on transforming complex ideas
            into elegant solutions. Explore my projects and feel free to connect
            with me on my socials!
          </p>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground/5 hover:bg-primary hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label={link.name}
              >
                <img src={link.icon} alt={link.name} className="filter dark:invert" />
              </a>
            ))}

            <a
              target="_blank"
              href="files/resume.pdf"
              download
              className="ml-2 flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}