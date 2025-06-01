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
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary/90 text-primary-foreground rounded-full text-xs sm:text-sm font-medium shadow-lg">
          <Star size={12} className="fill-current sm:w-3.5 sm:h-3.5" />
          <span>Hackathon Winner</span>
        </div>
      )}
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex flex-col p-4 sm:p-6 h-full">
          {/* Title section - dynamic height */}
          <div className="min-h-[2.5rem] sm:min-h-[3rem] mb-2">              
            <h3 className="text-xl sm:text-2xl font-bold group flex items-start gap-2">
              <span className="line-clamp-2">{title}</span>
              <span className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-[0px] transition-all duration-300 shrink-0 mt-1">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </span>
            </h3>
          </div>
            
          {/* Description section - expandable on mobile */}
          <div className={cn(
            "mb-4",
            isDescriptionExpanded ? "h-auto" : "h-20"
          )}>
            <div className="relative">
              <p className={cn(
                "text-sm sm:text-base text-foreground/70",
                !isDescriptionExpanded && "line-clamp-3"
              )}>
                {description}
              </p>
              {/* Show expand button only on mobile and when text is truncated */}
              <div className="sm:hidden mt-2">
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  {isDescriptionExpanded ? (
                    <>
                      Show Less
                      <ChevronUp size={12} />
                    </>
                  ) : (
                    <>
                      Read More
                      <ChevronDown size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
            
          {/* Technology icons section - fixed height */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 h-24">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-1 transition-transform hover:scale-110 duration-300">
                <div className="p-1.5 sm:p-2 rounded-md bg-background/50 shadow-sm">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={cn(
                      "w-5 h-5 sm:w-6 sm:h-6",
                      tech.strat === "dark" && isDarkMode && "filter invert"
                    )} 
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-foreground/70">{tech.name}</span>
              </div>
            ))}
          </div>
          
          {/* Project Thumbnail - fixed aspect ratio */}
          <div className={cn(
            "overflow-hidden rounded-lg aspect-video group mb-4 sm:mb-6",
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
          
          {/* Buttons section - fixed height */}
          <div className="flex gap-2 sm:gap-4 mt-auto h-8 sm:h-10">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:shadow-md hover:shadow-primary/20 text-xs sm:text-sm"
              >
                <Github size={14} className="sm:w-4 sm:h-4" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
                  View Code
                </span>
              </a>
            )}
            
            {devpostUrl && (
              <a
                href={devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:shadow-md hover:shadow-primary/20 text-xs sm:text-sm"
              >
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
                  View on Devpost
                </span>
              </a>
            )}
            
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 hover:shadow-md hover:shadow-primary/20 group text-xs sm:text-sm"
              >
                <Globe size={14} className="sm:w-4 sm:h-4 transition-transform group-hover:rotate-12 duration-300" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-foreground after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}