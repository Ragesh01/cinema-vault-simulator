
import { useState } from 'react';
import { Play, Info } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';
import { Movie } from '@/data/movies';

interface HeroProps {
  featured: Movie;
  onOpenModal: (movie: Movie) => void;
}

const Hero = ({ featured, onOpenModal }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={featured.backdropImage} 
          alt={featured.title}
          className={cn(
            "w-full h-full object-cover object-center transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-netflix-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/80 via-netflix-black/0 to-netflix-black/0" />
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-end pb-[10%] px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg max-w-3xl">
            {featured.title}
          </h1>
          
          <div className="mb-4 flex items-center space-x-2 text-sm">
            <span className="text-green-500 font-semibold">{Math.floor(featured.rating * 10)}% Match</span>
            <span className="text-netflix-light/80">{featured.year}</span>
            <span className="text-white/60 border border-white/40 px-1 text-xs">
              {featured.maturityRating}
            </span>
            <span className="text-netflix-light/80">{featured.duration}</span>
          </div>
          
          <p className="text-netflix-light/90 text-base md:text-lg max-w-2xl mb-8 line-clamp-3 text-shadow">
            {featured.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <ButtonCustom
              variant="primary"
              size="lg"
              className="font-semibold px-8 shadow-lg"
              icon={<Play className="w-5 h-5" />}
            >
              Play
            </ButtonCustom>
            
            <ButtonCustom
              variant="secondary"
              size="lg"
              className="font-semibold px-8"
              icon={<Info className="w-5 h-5" />}
              onClick={() => onOpenModal(featured)}
            >
              More Info
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from '@/lib/utils';

export default Hero;
