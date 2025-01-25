import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Star } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/search/search-bar';
import { ComicCard } from '@/components/comics/comic-card';
import { Comic, SearchFilters } from '@/lib/types';

export function Comics() {
  const [comics, setComics] = useState<Comic[]>([
    {
      id: '1',
      title: 'The Adventure Begins',
      coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&q=80&w=400',
      author: 'Sarah Johnson',
      genre: 'Adventure',
      likes: 234,
      rating: 4.7,
      description: '',
      pages: [],
      comments: [],
    },
    {
      id: '2',
      title: 'Mystic Dreams',
      coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400',
      author: 'Mike Chen',
      genre: 'Fantasy',
      likes: 189,
      rating: 4.5,
      description: '',
      pages: [],
      comments: [],
    },
  ]);

  const [filters, setFilters] = useState<SearchFilters>({
    genre: '',
    sortBy: 'newest',
  });

  const [filteredComics, setFilteredComics] = useState(comics);

  const handleSearch = (query: string, searchFilters: SearchFilters) => {
    const filtered = comics.filter((comic) => {
      const matchesQuery =
        !query ||
        comic.title.toLowerCase().includes(query.toLowerCase()) ||
        comic.author.toLowerCase().includes(query.toLowerCase());

      const matchesGenre =
        !searchFilters.genre || comic.genre === searchFilters.genre;

      const matchesRating =
        !searchFilters.rating || comic.rating >= searchFilters.rating;

      return matchesQuery && matchesGenre && matchesRating;
    });

    const sorted = [...filtered];
    switch (searchFilters.sortBy) {
      case 'popular':
        sorted.sort((a, b) => b.likes - a.likes);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'newest' is default, using ID as proxy for creation date
        sorted.sort((a, b) => b.id.localeCompare(a.id));
    }

    setFilteredComics(sorted);
  };

  useEffect(() => {
    handleSearch('', filters);
  }, [comics, filters]);

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Browse Comics</h1>
          
          <div className="flex gap-4">
            <label htmlFor="genre-select" className="sr-only">Select Genre</label>
            <select
              id="genre-select"
              className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-neutral-950"
              value={filters.genre}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, genre: e.target.value }))
              }
            >
              <option value="">All Genres</option>
              <option value="Adventure">Adventure</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
            </select>
            
            <label htmlFor="sort-select" className="sr-only">Sort By</label>
            <select
              id="sort-select"
              className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-neutral-950"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as 'newest' | 'popular' | 'rating',
                }))
              }
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredComics.map((comic) => (
          <ComicCard
            key={comic.id}
            comic={comic}
            onLike={() => {
              // TODO: Implement like functionality
              const updatedComics = comics.map((c) =>
                c.id === comic.id ? { ...c, likes: c.likes + 1 } : c
              );
              setComics(updatedComics);
            }}
          />
        ))}
      </div>
    </div>
  );
}