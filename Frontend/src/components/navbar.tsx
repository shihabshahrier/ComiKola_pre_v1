import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-bold">comiKola</span>
        </Link>
        
        <div className="ml-auto flex items-center space-x-4 md:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className={`ml-auto flex items-center space-x-4 hidden md:flex`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="search"
              placeholder="Search comics..."
              className="h-9 w-[200px] rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950"
            />
          </div>
          
          <Link to="/comics">
            <Button variant="ghost">Browse</Button>
          </Link>
          
          <Link to="/upload">
            <Button>Upload Comic</Button>
          </Link>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-2 space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="search"
                placeholder="Search comics..."
                className="h-9 w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950"
              />
            </div>

            <Link to="/comics">
              <Button variant="ghost" className="w-full">Browse</Button>
            </Link>
            
            <Link to="/upload">
              <Button className="w-full">Upload Comic</Button>
            </Link>
            
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="w-full flex justify-center">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}