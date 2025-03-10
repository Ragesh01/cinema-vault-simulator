
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie, Category } from '@/data/movies';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';

interface ContentRowProps {
  category: Category;
  onSelectMovie: (movie: Movie) => void;
}

const ContentRow = ({ category, onSelectMovie }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const scrollRow = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    
    const scrollAmount = direction === 'left' 
      ? -rowRef.current.clientWidth * 0.9
      : rowRef.current.clientWidth * 0.9;
    
    setIsScrolling(true);
    
    rowRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Update arrow visibility after scroll completes
    setTimeout(() => {
      if (!rowRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
      setIsScrolling(false);
    }, 400);
  };
  
  // Handle scroll event to update arrow visibility
  const handleScroll = () => {
    if (!rowRef.current || isScrolling) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };
  
  return (
    <div className="relative group px-4 md:px-8 my-8">
      <h2 className="text-xl font-medium mb-4 text-netflix-light/90">{category.name}</h2>
      
      {/* Left navigation button */}
      <button 
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-40 bg-netflix-black/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300",
          showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none",
          "hover:bg-netflix-black/70"
        )}
        onClick={() => scrollRow('left')}
        aria-label="Scroll left"
        disabled={!showLeftArrow}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      
      {/* Right navigation button */}
      <button 
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-40 bg-netflix-black/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300",
          showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none",
          "hover:bg-netflix-black/70"
        )}
        onClick={() => scrollRow('right')}
        aria-label="Scroll right"
        disabled={!showRightArrow}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
      
      {/* Content row */}
      <div 
        ref={rowRef}
        className="flex space-x-2 md:space-x-4 overflow-x-scroll scrollbar-none pb-8 pt-1"
        onScroll={handleScroll}
      >
        {category.movies.map((movie, index) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onSelect={onSelectMovie}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
