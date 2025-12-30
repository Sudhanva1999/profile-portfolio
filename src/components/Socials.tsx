import { useEffect, useContext } from 'react';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Socials() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    return initScrollAnimations();
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: "icons/github-dark.png", iconLight: "icons/github-light.png", url: 'https://github.com/Sudhanva1999', text: 'GitHub' },
    { name: 'Instagram', icon: "icons/instagram-dark.png", iconLight: "icons/instagram-light.png", url: 'https://instagram.com/Sudhanva1999', text: 'Instagram' },
    { name: 'LinkedIn', icon: "icons/linkedin-dark-min.png", iconLight: "icons/linkedin-light-min.png", url: 'https://linkedin.com/in/sudhanvapaturkar', text: 'LinkedIn' },
    { name: 'Email', icon: 'icons/mail.png', url: 'mailto:sudhanvawork@outlook.com', text: 'sudhanvawork@outlook.com' },
    { name: 'Phone', icon: "icons/phone.png", url: 'tel:+16177857242', text: '+617-785-7242' },
  ];

  return (
    <section id="socials" className="w-full h-screen flex items-center justify-center pt-6 pb-4 md:py-12">
      <div className="container mx-auto px-8 md:px-12">
        <div className="mb-4 md:mb-10 animate-on-scroll">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-4">Connect With Me</h2>
          <p className="text-center text-foreground/70 text-xs md:text-base max-w-sm md:max-w-2xl mx-auto px-2">
            Find me on social media or reach out directly through any of these channels
          </p>
        </div>
        
        <div className="max-w-sm md:max-w-2xl mx-auto animate-on-scroll">
          <div className="glass-panel rounded-lg md:rounded-xl p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="space-y-2 md:space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-foreground/5 transition-all duration-300 group card-hover"
                >
                  <div className="p-2 md:p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <img
                      src={link.iconLight && theme === 'light' ? link.iconLight : link.icon}
                      alt={link.name}
                      className={`contactIcons w-5 h-5 md:w-6 md:h-6 ${
                        (link.name === 'Email' || link.name === 'Phone') && theme === 'dark' ? 'filter invert brightness-0 invert' : ''
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm md:text-lg">{link.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{link.text}</p>
                  </div>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

