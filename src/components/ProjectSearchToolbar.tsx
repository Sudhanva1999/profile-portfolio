import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export type ProjectCategory = 'All' | 'AI/Machine Learning' | 'Fullstack' | 'Cloud' | 'Gen AI/LLMs';

interface ProjectSearchToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  categories: ProjectCategory[];
}

export default function ProjectSearchToolbar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: ProjectSearchToolbarProps) {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 mb-6 sm:mb-8">
      {/* Search Bar */}
      <div className="relative group">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-foreground/40 group-focus-within:text-primary transition-colors" />
        <Input
          type="text"
          placeholder="Search projects by title, description, or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={cn(
            "w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base",
            "bg-background/40 backdrop-blur-md",
            "border border-primary/20 rounded-full",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            "transition-all duration-300",
            "placeholder:text-foreground/40"
          )}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/40" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full",
              "transition-all duration-300 ease-in-out",
              "border backdrop-blur-sm",
              selectedCategory === category
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                : "bg-background/40 text-foreground/70 border-primary/20 hover:border-primary/40 hover:bg-background/60 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Info */}
      {searchQuery && (
        <div className="text-center text-sm text-foreground/60">
          Search results for "<span className="text-primary font-medium">{searchQuery}</span>"
        </div>
      )}
    </div>
  );
}

