import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

interface WorkExperienceCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
}

export default function WorkExperienceCard({
  title,
  date,
  description,
  technologies,
}: WorkExperienceCardProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);

  // On mobile: show 3 tags initially, expand on click
  // On desktop: show all tags always
  const visibleTags = isTagsExpanded ? technologies : technologies.slice(0, 3);
  const hasMoreTags = technologies.length > 3;

  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300">
      {/* Title and Date */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-2 mb-2 md:mb-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-gray-700 flex-shrink-0" />
          <h3 className="text-base md:text-2xl font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
        <span className="text-xs md:text-base text-gray-600 whitespace-nowrap font-medium">{date}</span>
      </div>
      
      {/* Description */}
      <div className="mb-3 md:mb-6">
        <p className={`text-gray-700 leading-snug md:leading-relaxed text-xs md:text-base ${!isDescriptionExpanded ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
          {description}
        </p>
        <button 
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          className="md:hidden text-blue-600 hover:text-blue-700 text-xs font-medium mt-1"
        >
          {isDescriptionExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
      
      {/* Technologies */}
      {technologies.length > 0 && (
        <div>
          {/* Mobile: show limited tags with expand */}
          <div className="md:hidden">
            <div className="flex flex-wrap gap-1.5 mb-1">
              {visibleTags.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-[10px] bg-black text-white rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {hasMoreTags && (
              <button 
                onClick={() => setIsTagsExpanded(!isTagsExpanded)}
                className="text-blue-600 hover:text-blue-700 text-[10px] font-medium"
              >
                {isTagsExpanded ? 'View less' : `View ${technologies.length - 3} more`}
              </button>
            )}
          </div>

          {/* Desktop: show all tags */}
          <div className="hidden md:flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 text-sm bg-black text-white rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

