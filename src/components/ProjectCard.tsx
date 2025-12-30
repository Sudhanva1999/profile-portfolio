import { Github, Globe, ArrowUpRight, ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useContext, useState } from 'react';
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
  devpostUrl?: string;
  technologies: Technology[];
  reversed?: boolean;
  isHackathonWinner?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  devpostUrl,
  technologies,
  reversed = false,
  isHackathonWinner = false,
}: ProjectCardProps) {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const imageClickUrl = githubUrl || liveUrl;
  
  return (
    <Card 
      className={cn(
        "overflow-hidden border-none bg-gradient-to-br from-background/30 to-background/10",
        "backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500",
        "h-full flex flex-col relative"
      )}
    >
      {isHackathonWinner && (
        <div className="absolute top-1.5 right-1.5 z-10 flex items-center gap-1 px-2 py-0.5 bg-primary/90 text-primary-foreground rounded-full text-[9px] font-medium shadow-md">
          <Star size={10} className="fill-current" />
          <span>Winner</span>
        </div>
      )}
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex flex-col p-2 sm:p-4 h-full gap-1 sm:gap-2">
          {/* Title section - dynamic height */}
          <div className="min-h-[1.2rem] sm:min-h-[1.5rem]">              
            <h3 className="text-xs sm:text-sm font-bold group flex items-start gap-1">
              <span className="line-clamp-2">{title}</span>
              <span className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-[0px] transition-all duration-300 shrink-0 mt-0.5">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </span>
            </h3>
          </div>
            
          {/* Description section */}
          <div className="h-10 sm:h-12">
            <p className="text-[10px] sm:text-xs text-foreground/70 line-clamp-2 sm:line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>
            
          {/* Technology icons section - fixed height */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5 h-12 sm:h-16">
            {technologies.slice(0, 6).map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-0.5 sm:gap-1 transition-transform hover:scale-110 duration-300">
                <div className="p-0.5 sm:p-1 rounded-md bg-background/50 shadow-sm">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={cn(
                      "w-4 h-4 sm:w-6 sm:h-6",
                      tech.strat === "dark" && isDarkMode && "filter invert"
                    )} 
                  />
                </div>
                <span className="text-[7px] sm:text-[9px] text-foreground/70 leading-tight max-w-[2rem] sm:max-w-[2.5rem] truncate">{tech.name}</span>
              </div>
            ))}
            {technologies.length > 6 && (
              <div className="flex items-center justify-center text-[9px] sm:text-[10px] text-foreground/50">
                +{technologies.length - 6}
              </div>
            )}
          </div>
          
          {/* Project Thumbnail - compact on mobile */}
          <div className={cn(
            "overflow-hidden rounded-md aspect-[16/9] group",
            "transition-all duration-500 shadow-sm hover:shadow-md",
            "bg-gradient-to-br from-background/30 to-background/10 p-0.5",
            imageClickUrl ? "cursor-pointer" : ""
          )}>
            {imageClickUrl ? (
              <a 
                href={imageClickUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-full h-full overflow-hidden rounded-md"
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ) : (
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
          </div>
          
          {/* Buttons section - fixed height */}
          <div className="flex gap-1.5 sm:gap-2 mt-auto h-6 sm:h-7">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-0.5 px-2 sm:px-2.5 py-1 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 text-[9px]"
                title="View Code"
              >
                <Github size={12} className="sm:w-4 sm:h-4" />
              </a>
            )}
            
            {devpostUrl && (
              <a
                href={devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-0.5 px-2 sm:px-2.5 py-1 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 text-[9px]"
                title="View on Devpost"
              >
                <ExternalLink size={12} className="sm:w-4 sm:h-4" />
              </a>
            )}
            
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-0.5 px-2 sm:px-2.5 py-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 group text-[9px]"
                title="Live Demo"
              >
                <Globe size={12} className="sm:w-4 sm:h-4 transition-transform group-hover:rotate-12 duration-300" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}