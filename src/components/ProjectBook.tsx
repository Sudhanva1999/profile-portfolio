import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

interface Technology {
  name: string;
  icon: string;
  strat?: "dark" | "light";
}

export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
  technologies: Technology[];
  isHackathonWinner?: boolean;
  categories: string[];
}

interface ProjectBookProps {
  projects: Project[];
  targetProjectIndex?: number;
}

export default function ProjectBook({ projects, targetProjectIndex }: ProjectBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevProjectsLength = useRef(projects.length);
  
  const totalPages = projects.length;

  // Reset to first page when projects change
  useEffect(() => {
    if (prevProjectsLength.current !== projects.length) {
      setCurrentPage(0);
      setIsFlipping(false);
      prevProjectsLength.current = projects.length;
    }
  }, [projects.length]);
  
  useEffect(() => {
    if (targetProjectIndex !== undefined && targetProjectIndex >= 0 && targetProjectIndex < totalPages) {
      flipToPage(targetProjectIndex);
    }
  }, [targetProjectIndex, totalPages]);

  const flipToPage = (pageIndex: number) => {
    if (pageIndex === currentPage || isFlipping || pageIndex < 0 || pageIndex >= totalPages) return;
    
    setFlipDirection(pageIndex > currentPage ? 'next' : 'prev');
    setIsFlipping(true);
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setTimeout(() => {
        setIsFlipping(false);
      }, 100);
    }, 700);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 700);
    }
  };

  const previousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 700);
    }
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextPage();
      } else {
        previousPage();
      }
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentProject = projects[currentPage];
  const nextProject = currentPage < totalPages - 1 ? projects[currentPage + 1] : null;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center px-8 sm:px-12 md:px-16">
        
        {/* Previous Button */}
        <button
          onClick={previousPage}
          disabled={currentPage === 0 || isFlipping}
          className={cn(
            "absolute left-0 z-30 p-2 sm:p-3 rounded-full transition-all duration-300",
            "bg-primary/10 hover:bg-primary/20 backdrop-blur-sm",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            "hover:scale-110 active:scale-95 shadow-lg"
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </button>

        {/* Book Container */}
        <div
          ref={containerRef}
          className="book-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <div className="book-container-3d">
            {/* Left page - current project */}
            <div className="book-page book-page-left">
              <div className="book-page-inner">
                {currentProject && (
                  <ProjectCard
                    key={`left-${currentProject.title}-${currentPage}`}
                    title={currentProject.title}
                    description={currentProject.description}
                    image={currentProject.image}
                    githubUrl={currentProject.githubUrl}
                    liveUrl={currentProject.liveUrl}
                    devpostUrl={currentProject.devpostUrl}
                    technologies={currentProject.technologies}
                    isHackathonWinner={currentProject.isHackathonWinner}
                  />
                )}
                <div className="page-number left">{currentPage + 1}</div>
              </div>
            </div>

            {/* Right page - flips */}
            <div
              className={cn(
                "book-page book-page-right",
                isFlipping && flipDirection === 'next' && "flipping-next",
                isFlipping && flipDirection === 'prev' && "flipping-prev"
              )}
              key={`right-flip-${currentPage}`}
            >
              {/* Front of right page */}
              <div className="book-page-front">
                {nextProject && (
                  <ProjectCard
                    key={`right-${nextProject.title}-${currentPage}`}
                    title={nextProject.title}
                    description={nextProject.description}
                    image={nextProject.image}
                    githubUrl={nextProject.githubUrl}
                    liveUrl={nextProject.liveUrl}
                    devpostUrl={nextProject.devpostUrl}
                    technologies={nextProject.technologies}
                    isHackathonWinner={nextProject.isHackathonWinner}
                  />
                )}
                {nextProject && <div className="page-number right">{currentPage + 2}</div>}
              </div>

              {/* Back of right page (visible when flipping) */}
              <div className="book-page-back">
                <div className="flex items-center justify-center h-full text-foreground/10 text-sm">
                  {/* Empty back */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages - 1 || isFlipping}
          className={cn(
            "absolute right-0 z-30 p-2 sm:p-3 rounded-full transition-all duration-300",
            "bg-primary/10 hover:bg-primary/20 backdrop-blur-sm",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            "hover:scale-110 active:scale-95 shadow-lg"
          )}
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-2 bg-background/60 backdrop-blur-md rounded-full shadow-lg border border-primary/10">
        <span className="text-sm font-medium text-foreground/70">
          {currentPage + 1} / {totalPages}
        </span>
        <div className="flex gap-1 ml-1">
          {Array.from({ length: Math.min(totalPages, 10) }).map((_, index) => (
            <button
              key={index}
              onClick={() => flipToPage(index)}
              disabled={isFlipping}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentPage
                  ? "bg-primary w-6"
                  : "bg-foreground/20 hover:bg-foreground/40",
                isFlipping && "opacity-50 cursor-not-allowed"
              )}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
          {totalPages > 10 && (
            <span className="text-xs text-foreground/50 ml-1">...</span>
          )}
        </div>
      </div>
    </div>
  );
}
