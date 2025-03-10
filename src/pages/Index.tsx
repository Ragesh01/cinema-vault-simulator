
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import MovieModal from '@/components/MovieModal';
import { featuredContent, categories, Movie } from '@/data/movies';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Navbar />
      
      <main>
        <Hero 
          featured={featuredContent} 
          onOpenModal={setSelectedMovie}
        />
        
        <div className="relative z-10 -mt-20">
          {categories.map((category) => (
            <ContentRow 
              key={category.id} 
              category={category} 
              onSelectMovie={setSelectedMovie}
            />
          ))}
        </div>
      </main>
      
      <MovieModal 
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default Index;
