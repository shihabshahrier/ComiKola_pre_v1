import { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Comic } from '@/lib/types';

interface SearchBarProps {
  onSearch: (query: string, filters: any) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = () => {
    if (query.trim()) {
      setSearchHistory((prev) => {
        const newHistory = [query, ...prev.filter((q) => q !== query)].slice(0, 5);
        return newHistory;
      });
      onSearch(query, {});
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Search comics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-9"
          />
          {query && searchHistory.length > 0 && (
            <div className="absolute top-full z-10 mt-1 w-full rounded-md border bg-white p-2 shadow-lg">
              {searchHistory.map((item, index) => (
                <button
                  key={index}
                  className="block w-full px-2 py-1 text-left text-sm hover:bg-neutral-100"
                  onClick={() => setQuery(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
}