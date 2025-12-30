import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  image?: string;
  title: string;
  description: string;
  fitVertical?: boolean;
  youtubeEmbed?: string;
}

interface HobbyCarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  fitVertical?: boolean;
  hobbyKey?: string; // Add a unique key for each hobby (optional to prevent breaking existing code)
  onSlideChange?: (index: number) => void; // Callback when slide changes
}

export default function HobbyCarousel({ 
  slides, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  fitVertical = false,
  hobbyKey = 'default', // Default key if none provided
  onSlideChange
}: HobbyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);
  
  // Reset currentIndex when hobbyKey changes
  useEffect(() => {
    setCurrentIndex(0);
    onSlideChange?.(0);
  }, [hobbyKey]);

  // Notify parent when slide changes
  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = window.setInterval(goToNextSlide, autoPlayInterval);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && !timerRef.current) {
      timerRef.current = window.setInterval(goToNextSlide, autoPlayInterval);
    }
  };

  // Check if the current slide should use vertical fitting
  const shouldFitVertical = (index: number) => {
    if (fitVertical) return true;
    return slides[index]?.fitVertical || false;
  };

  return (
    <div className="relative w-full h-full">
      {/* Main carousel container */}
      <div 
        className="relative w-full h-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => {
            const isVerticalFit = shouldFitVertical(index);
            
            return (
              <div
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out",
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                {/* YouTube embed handling */}
                {slide.youtubeEmbed ? (
                  <iframe
                    src={slide.youtubeEmbed}
                    className="w-full h-full z-10"
                    title={slide.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    {/* Blurred background for vertical fit images */}
                    {isVerticalFit && index === currentIndex && (
                      <div 
                        className="absolute inset-0 w-full h-full blur-lg opacity-60 scale-110 z-0"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover'
                        }}
                      />
                    )}
                    
                    {slide.image && (
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className={cn(
                          "w-full h-full relative z-10",
                          isVerticalFit 
                            ? "object-contain" // Fit vertically, no cropping
                            : "object-cover"   // Fill and crop as needed
                        )}
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors z-30"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="md:w-5 md:h-5" />
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors z-30"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>
        
        {/* Indicators - Hidden on mobile */}
        <div className="hidden md:flex absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 space-x-1 md:space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white w-3 md:w-4" : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}