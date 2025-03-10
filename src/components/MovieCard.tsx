
import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '@/data/movies';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
  delay?: number;
}

const MovieCard = ({ movie, onSelect, delay = 0 }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div 
      className="relative flex-shrink-0 w-[200px] md:w-[240px] group"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "relative overflow-hidden rounded-md transition-all duration-300 netflix-card-shadow",
          isHovered ? "scale-110 z-10" : "scale-100",
          isHovered ? "rounded-b-none" : ""
        )}
      >
        {/* Card image */}
        <img 
          src={movie.image} 
          alt={movie.title} 
          className={cn(
            "w-full aspect-[16/9] object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Hover info */}
        {isHovered && (
          <div className="absolute inset-0 bg-netflix-dark/60 flex flex-col justify-end p-3">
            <div className="flex gap-2 mb-3">
              <button 
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  // Play functionality
                }}
              >
                <Play className="w-4 h-4 text-netflix-black fill-current" />
              </button>
              
              <button className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-white transition-colors">
                <Plus className="w-4 h-4 text-white" />
              </button>
              
              <button className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-white transition-colors">
                <ThumbsUp className="w-4 h-4 text-white" />
              </button>
              
              <button 
                className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-white transition-colors ml-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(movie);
                }}
              >
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex items-center gap-1 text-xs mb-1.5">
              <span className="text-green-500 font-bold">{Math.floor(movie.rating * 10)}% Match</span>
              <span className="text-white/70 border border-white/40 px-[2px] text-[10px]">
                {movie.maturityRating}
              </span>
              <span className="text-white/70">{movie.duration}</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-1">
              {movie.genre.slice(0, 3).map((genre, index) => (
                <span key={index} className="text-xs text-white/90">
                  {index > 0 && <span className="mx-1 text-white/40">•</span>}
                  {genre}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Extended info panel (visible on hover) */}
      {isHovered && (
        <div 
          className="absolute top-full left-0 w-full bg-netflix-dark rounded-b-md p-3 z-10 netflix-card-shadow animate-fade-in"
          style={{ animationDuration: '200ms' }}
        >
          <p className="text-xs text-white/90 line-clamp-3">{movie.description}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
