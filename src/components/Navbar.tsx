import { useContext, useState } from 'react';
import { Sun, Moon, Menu, X, Home, Briefcase, Award, FolderOpen, Code, Camera, Palette, Video, Users, Mail } from 'lucide-react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, index: 0 },
    { name: 'Adobe', icon: <Briefcase className="w-5 h-5" />, index: 1 },
    { name: 'Accenture', icon: <Briefcase className="w-5 h-5" />, index: 2 },
    { name: 'Northeastern University', icon: <Briefcase className="w-5 h-5" />, index: 3 },
    { name: 'Education', icon: <Award className="w-5 h-5" />, index: 4 },
    { name: 'Achievements', icon: <Award className="w-5 h-5" />, index: 5 },
    { name: 'Projects', icon: <FolderOpen className="w-5 h-5" />, index: 6 },
    { name: 'Skills', icon: <Code className="w-5 h-5" />, index: 7 },
    { name: 'Photography', icon: <Camera className="w-5 h-5" />, index: 8 },
    { name: 'Painting', icon: <Palette className="w-5 h-5" />, index: 9 },
    { name: '3D Animation', icon: <Video className="w-5 h-5" />, index: 10 },
    { name: 'Socials', icon: <Users className="w-5 h-5" />, index: 11 },
    { name: 'Contact Me', icon: <Mail className="w-5 h-5" />, index: 12 },
  ];

  const scrollToSection = (index: number) => {
    const sectionElements = document.querySelectorAll('.snap-section');
    if (sectionElements[index]) {
      sectionElements[index].scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left: Name only */}
          <div className="text-xs md:text-lg font-mono font-bold tracking-tighter bg-background/50 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-full">
            <span className="text-gradient">{'{ '}</span>
            <span>SUDHANVA PATURKAR</span>
            <span className="text-gradient">{' }'}</span>
          </div>

          {/* Right: Menu & Theme Toggle */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="bg-background/50 backdrop-blur-sm p-2 md:p-2.5 rounded-full hover:bg-background/80 transition-colors"
              aria-label="Navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
            <button 
              onClick={toggleTheme} 
              className="bg-background/50 backdrop-blur-sm p-2 md:p-2.5 rounded-full hover:bg-background/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8 mt-12">
                  <h2 className="text-2xl font-bold">Jump To</h2>
                </div>

                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.index}
                      onClick={() => scrollToSection(section.index)}
                      className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors text-left group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {section.icon}
                      </div>
                      <span className="font-medium text-base">{section.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}