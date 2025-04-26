
import { useEffect, useState } from 'react';
import { X, Play, Plus, ThumbsUp, VolumeX } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';
import { cn } from '@/lib/utils';

interface Movie {
  title: string;
  backdropImage?: string;
  image: string;
  rating: number;
  year: string | number;
  maturityRating: string;
  duration: string;
  description: string;
  genre: string[];
}

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    if (movie) {
      document.body.style.overflow = 'hidden';
      setIsShowing(true);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [movie]);
  
  const handleClose = () => {
    setIsShowing(false);
    // Wait for animation to finish before removing modal
    setTimeout(() => {
      onClose();
      setIsImageLoaded(false);
    }, 300);
  };
  
  if (!movie) return null;
  
  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 bg-netflix-black/70 backdrop-blur-sm flex items-center justify-center p-4",
        isShowing ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={handleClose}
    >
      <div 
        className={cn(
          "bg-netflix-dark w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl transition-all duration-300 transform",
          isShowing ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header with movie backdrop */}
        <div className="relative w-full h-[30vh] md:h-[40vh] bg-netflix-black/50">
          <div className={cn(
            "absolute inset-0 transition-opacity duration-500", 
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}>
            <img 
              src={movie.backdropImage || movie.image} 
              alt={movie.title}
              className="w-full h-full object-cover opacity-80"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent" />
          </div>

          {/* Modal controls */}
          <div className="absolute top-4 right-4 z-10">
            <button 
              className="w-10 h-10 rounded-full bg-netflix-black/60 flex items-center justify-center hover:bg-netflix-black/80 transition-colors"
              onClick={handleClose}
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-8 z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shadow-lg">{movie.title}</h2>
            
            <div className="flex flex-wrap gap-2">
              <ButtonCustom
                variant="primary"
                size="md"
                icon={<Play className="w-5 h-5" />}
              >
                Play
              </ButtonCustom>
              
              <ButtonCustom
                variant="ghost"
                size="md"
                className="border border-white/20"
                icon={<Plus className="w-5 h-5" />}
              >
                My List
              </ButtonCustom>
              
              <ButtonCustom
                variant="ghost"
                size="md"
                className="border border-white/20"
                icon={<ThumbsUp className="w-5 h-5" />}
              >
                Rate
              </ButtonCustom>
            </div>
          </div>
          
          {/* Mute button */}
          <div className="absolute bottom-8 right-8 z-10">
            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/70 transition-colors">
              <VolumeX className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Movie details */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-green-500 font-semibold">{Math.floor(movie.rating * 10)}% Match</span>
                <span className="text-netflix-light/80">{movie.year}</span>
                <span className="text-white/60 border border-white/40 px-1 text-xs">
                  {movie.maturityRating}
                </span>
                <span className="text-netflix-light/80">{movie.duration}</span>
              </div>
              
              <p className="text-netflix-light/90 text-base mb-6">
                {movie.description}
              </p>
            </div>
            
            <div>
              <div className="mb-4">
                <span className="text-netflix-light/60 text-sm">Genres: </span>
                <span className="text-netflix-light/90 text-sm">{movie.genre.join(', ')}</span>
              </div>
              
              <div className="mb-4">
                <span className="text-netflix-light/60 text-sm">Rating: </span>
                <span className="text-netflix-light/90 text-sm">{movie.rating} / 10</span>
              </div>
              
              <div>
                <span className="text-netflix-light/60 text-sm">Release year: </span>
                <span className="text-netflix-light/90 text-sm">{movie.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
