import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEventProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  date: string;
  description: string;
  logo?: string;
  technologies?: string[];
  button?: {
    text: string;
    link: string;
  };
}

export default function TimelineEvent({
  icon,
  title,
  company,
  date,
  description,
  logo,
  technologies = [],
  button,
}: TimelineEventProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // Update content height when expanded state changes or on window resize
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const scrollHeight = contentRef.current.scrollHeight;
        setContentHeight(isExpanded ? `${scrollHeight}px` : "0px");
      }
    };

    // Set initial height
    updateHeight();
    
    // Add resize listener to handle content changes
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [isExpanded, description, technologies]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative pl-6 pb-6 sm:pl-8 sm:pb-8">
      <div className="timeline-connector" />
      <div className="absolute left-0 top-0 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary border-3 sm:border-4 border-background z-10"></div>
      
      <div 
        className={cn(
          "glass-panel rounded-lg p-3 sm:p-4 transition-all duration-300",
          "hover:shadow-lg cursor-pointer",
          isExpanded ? "shadow-lg" : ""
        )}
        onClick={toggleExpand}
      >
        {/* Mobile-friendly header layout */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 text-primary shrink-0">
              <div className="w-8 h-8 sm:w-16 sm:h-16">
                {typeof icon === 'object' && 'type' in icon && icon.type === 'img' ? (
                  <div className="w-full h-full flex items-center justify-center">
                    {React.cloneElement(icon as React.ReactElement, {
                      className: "w-full h-full object-contain rounded-full"
                    })}
                  </div>
                ) : (
                  icon
                )}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-base sm:text-lg line-clamp-2 sm:line-clamp-none">{title}</h3>
              <p className="text-xs sm:text-sm text-foreground/70">{company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-0">
            <span className="text-xs sm:text-sm text-foreground/60 whitespace-nowrap">{date}</span>
            {button && !isExpanded && (
              <a 
                href={button.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors ml-1.5 sm:ml-2"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${button.text}`}
              >
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              </a>
            )}
            <button 
              className="text-primary/70 hover:text-primary transition-colors ml-auto sm:ml-0"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
              onClick={(e) => {
                e.stopPropagation(); // Prevent double triggering
                toggleExpand();
              }}
            >
              {isExpanded ? <ChevronUp size={16} className="sm:w-[18px] sm:h-[18px]" /> : <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>
          </div>
        </div>
        
        {/* Content section with dynamic height */}
        <div 
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: contentHeight }}
        >
          <div className="mt-2 sm:mt-3">
            {logo && (
              <div className="mb-3 sm:mb-4 max-w-[80px] sm:max-w-[100px]">
                <img src={logo} alt={company} className="w-full h-auto" />
              </div>
            )}
            
            <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4">{description}</p>
            
            {button && isExpanded && (
              <div className="mb-3 sm:mb-4">
                <a 
                  href={button.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {button.text}
                  <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            )}
            
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pb-0.5 sm:pb-1">
                {technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}