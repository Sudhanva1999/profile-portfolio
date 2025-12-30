import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface Technology {
  name: string;
  icon: string;
  strat?: "dark" | "light";
}

interface Project {
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

type ProjectCategory = 'All' | 'AI/Machine Learning' | 'Fullstack' | 'Cloud' | 'Gen AI/LLMs';

interface ProjectGridProps {
  projects: Project[];
  categories: ProjectCategory[];
}

export default function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => 
        project.categories.includes(selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => {
        const titleMatch = project.title.toLowerCase().includes(query);
        const descriptionMatch = project.description.toLowerCase().includes(query);
        const techMatch = project.technologies.some(tech => 
          tech.name.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || techMatch;
      });
    }

    return filtered;
  }, [projects, selectedCategory, searchQuery]);

  // Calculate grid columns based on number of projects
  const getGridColumns = (count: number) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 lg:grid-cols-2';
    if (count <= 6) return 'grid-cols-2 lg:grid-cols-3';
    if (count <= 9) return 'grid-cols-3 lg:grid-cols-3';
    return 'grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
  };

  // Close focused card on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFocusedIndex(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {/* Controls Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-shrink-0 px-3 sm:px-6 pt-2 sm:pt-4 pb-2 sm:pb-3"
      >
        {/* Search Bar */}
        <div className="relative group mb-2 sm:mb-3">
          <Search className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/40 group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              "w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-1.5 sm:py-2 text-xs sm:text-sm h-8 sm:h-auto",
              "bg-background/40 backdrop-blur-md",
              "border border-primary/20 rounded-full",
              "focus:border-primary focus:ring-2 focus:ring-primary/20",
              "transition-all duration-300",
              "placeholder:text-foreground/40"
            )}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 p-0.5 sm:p-1 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/40" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full",
                "transition-all duration-300 ease-in-out",
                "border backdrop-blur-sm",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-background/40 text-foreground/70 border-primary/20 hover:border-primary/40 hover:bg-background/60"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Grid Section */}
      <div className="flex-1 px-3 sm:px-6 pb-2 sm:pb-4 overflow-y-auto overflow-x-hidden scrollbar-thin">
        <motion.div
          layout
          className={cn(
            "grid gap-2 sm:gap-3",
            getGridColumns(filteredProjects.length),
            "auto-rows-fr"
          )}
          style={{
            minHeight: 'fit-content'
          }}
        >
          <AnimatePresence mode="sync" initial={false}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isFocused={focusedIndex === index}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  isAnyFocused={focusedIndex !== null}
                />
              ))
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex items-center justify-center min-h-[300px]"
              >
                <div className="text-center space-y-2 p-6 bg-background/40 backdrop-blur-md rounded-2xl border border-primary/20">
                  <p className="text-lg text-foreground/70">No projects found</p>
                  <p className="text-sm text-foreground/50">
                    Try adjusting your search or category filter
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// ProjectCard Component
interface ProjectCardProps {
  project: Project;
  index: number;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  isAnyFocused: boolean;
}

function ProjectCard({ project, index, isFocused, onFocus, onBlur, isAnyFocused }: ProjectCardProps) {
  return (
    <>
      {/* Compact Card */}
      <motion.div
        layout="position"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isAnyFocused && !isFocused ? 0.4 : 1,
          scale: isAnyFocused && !isFocused ? 0.95 : 1,
          filter: isAnyFocused && !isFocused ? 'blur(2px)' : 'blur(0px)',
        }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          layout: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.15 },
          scale: { duration: 0.15 },
          filter: { duration: 0.15 },
        }}
        whileHover={!isAnyFocused ? { scale: 1.05 } : {}}
        onClick={onFocus}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onFocus();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${project.title}`}
        className={cn(
          "relative cursor-pointer group overflow-hidden rounded-lg",
          "bg-gradient-to-br from-background/60 to-background/30",
          "backdrop-blur-md border border-primary/20",
          "hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/20",
          "transition-colors duration-200",
          "shadow-lg hover:shadow-xl",
          "flex flex-col",
          "focus:outline-none"
        )}
        style={{ 
          zIndex: isFocused ? 50 : isAnyFocused ? 1 : 10,
          willChange: 'transform, opacity'
        }}
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {project.isHackathonWinner && (
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-primary/90 text-primary-foreground rounded-full text-[8px] font-medium">
              Winner
            </div>
          )}
        </div>

        {/* Title */}
        <div className="p-2 flex-1 flex items-center justify-center">
          <h3 className="text-xs font-bold text-center line-clamp-2 leading-tight">
            {project.title}
          </h3>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence mode="wait">
        {isFocused && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={onBlur}
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.25, 
                ease: [0.4, 0, 0.2, 1]
              }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative max-w-3xl w-full max-h-[80vh] overflow-y-auto project-modal-scroll",
                "bg-card border border-primary/30 rounded-2xl shadow-2xl",
                "p-4 sm:p-6"
              )}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
            >
              {/* Close button */}
              <button
                onClick={onBlur}
                className="absolute top-3 right-3 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Winner Badge */}
              {project.isHackathonWinner && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium flex items-center gap-1">
                  <span>🏆</span>
                  <span>Hackathon Winner</span>
                </div>
              )}

              {/* Content */}
              <div className="space-y-4 mt-8">
                {/* Title */}
                <h2 id="project-title" className="text-2xl sm:text-3xl font-bold">{project.title}</h2>

                {/* Image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="p-2 rounded-md bg-background/50 shadow-sm">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6"
                          />
                        </div>
                        <span className="text-[10px] text-foreground/70">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 text-sm font-medium"
                    >
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.devpostUrl && (
                    <a
                      href={project.devpostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 text-sm font-medium"
                    >
                      Devpost
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

