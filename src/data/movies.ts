
export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  backdropImage?: string;
  year: number;
  genre: string[];
  rating: number;
  duration: string;
  maturityRating: string;
}

export interface Category {
  id: number;
  name: string;
  movies: Movie[];
}

export const featuredContent: Movie = {
  id: 1001,
  title: "Inception",
  description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  backdropImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  year: 2010,
  genre: ["Action", "Sci-Fi", "Thriller"],
  rating: 8.8,
  duration: "2h 28m",
  maturityRating: "PG-13"
};

const generateMovies = (start: number, count: number, genreFilter?: string): Movie[] => {
  const movies: Movie[] = [];
  const titles = [
    "The Silent Echo", "Eternal Horizon", "Mystic Dreams", "Digital Nexus", 
    "Quantum Leap", "Solar Eclipse", "Midnight Runner", "Parallel Universe",
    "Neural Network", "Cosmic Voyage", "Temporal Shift", "Holographic Memory",
    "Virtual Existence", "Bionic Redemption", "Galactic Odyssey", "Synthetic Soul"
  ];
  
  const genres = [
    ["Action", "Adventure"], 
    ["Drama", "Thriller"], 
    ["Sci-Fi", "Fantasy"],
    ["Romance", "Comedy"],
    ["Horror", "Mystery"],
    ["Documentary", "Biography"],
    ["Animation", "Family"],
    ["Crime", "Action"]
  ];
  
  const descriptions = [
    "A journey beyond imagination that tests the limits of reality and perception.",
    "When worlds collide, a hero emerges to protect everything they've ever loved.",
    "In a future where technology rules, one person's quest for humanity changes everything.",
    "The line between friend and foe blurs when secrets from the past resurface.",
    "A thrilling adventure that pushes the boundaries of courage and sacrifice.",
    "Sometimes the greatest discoveries come from the most unexpected places."
  ];
  
  for (let i = 0; i < count; i++) {
    const id = start + i;
    const genreIndex = Math.floor(Math.random() * genres.length);
    const selectedGenres = genreFilter 
      ? [genreFilter, genres[genreIndex][Math.floor(Math.random() * 2)]]
      : genres[genreIndex];
    
    movies.push({
      id,
      title: titles[Math.floor(Math.random() * titles.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format`,
      year: 2015 + Math.floor(Math.random() * 9),
      genre: selectedGenres,
      rating: 7 + Math.random() * 3,
      duration: `${1 + Math.floor(Math.random() * 2)}h ${10 + Math.floor(Math.random() * 50)}m`,
      maturityRating: ["PG", "PG-13", "R"][Math.floor(Math.random() * 3)]
    });
  }
  
  return movies;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Trending Now",
    movies: generateMovies(1, 10)
  },
  {
    id: 2,
    name: "New Releases",
    movies: generateMovies(101, 10)
  },
  {
    id: 3,
    name: "Action Thrillers",
    movies: generateMovies(201, 10, "Action")
  },
  {
    id: 4,
    name: "Sci-Fi Adventures",
    movies: generateMovies(301, 10, "Sci-Fi")
  },
  {
    id: 5,
    name: "Award-Winning Films",
    movies: generateMovies(401, 10)
  }
];
