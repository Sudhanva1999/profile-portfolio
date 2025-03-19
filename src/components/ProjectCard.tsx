import { Github, Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

interface Technology {
  name: string;
  icon: string;
  strat?: "dark" | "light";  // Added strat property
}

type ProjectCategory = 'All' | 'AI/Machine Learning' | 'Fullstack' | 'Cloud' | 'Gen AI/LLMs';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: Technology[];
  reversed?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  technologies,
  reversed = false,
}: ProjectCardProps) {
  // Get the current theme from context
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  
  // Determine which URL to use for the image link (prioritize GitHub over Live Demo)
  const imageClickUrl = githubUrl || liveUrl;
  
  return (
    <Card 
      className={cn(
        "overflow-hidden border-none bg-gradient-to-br from-background/30 to-background/10",
        "backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500",
      )}
    >
      <CardContent className="p-0">
        <div className={cn(
          "grid md:grid-cols-2 gap-8 p-6",
          reversed ? "md:flex-row-reverse" : ""
        )}>
          <div className="flex flex-col justify-between">
            <div>              
              <h3 className="text-2xl font-bold mb-3 group flex items-center gap-2">
                {title}
                <span className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-[0px] transition-all duration-300">
                  <ArrowUpRight size={16} />
                </span>
              </h3>
              
              <p className="text-foreground/70 mb-6">{description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-1 transition-transform hover:scale-110 duration-300">
                    <div className="p-2 rounded-md bg-background/50 shadow-sm">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className={cn(
                          "w-6 h-6",
                          // Only apply invert filter to dark icons when in dark mode
                          tech.strat === "dark" && isDarkMode && "filter invert"
                        )} 
                      />
                    </div>
                    <span className="text-xs text-foreground/70">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
                >
                  <Github size={16} />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
                    View Code
                  </span>
                </a>
              )}
              
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 hover:shadow-md hover:shadow-primary/20 group"
                >
                  <Globe size={16} className="transition-transform group-hover:rotate-12 duration-300" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-foreground after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                    Live Demo
                  </span>
                </a>
              )}
            </div>
          </div>
          
          <div className={cn(
            "overflow-hidden rounded-lg aspect-video group",
            "transition-all duration-500 shadow-md hover:shadow-xl",
            "bg-gradient-to-br from-background/30 to-background/10 p-1",
            imageClickUrl ? "cursor-pointer" : ""
          )}>
            {imageClickUrl ? (
              <a 
                href={imageClickUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-full h-full overflow-hidden rounded-lg"
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ) : (
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}