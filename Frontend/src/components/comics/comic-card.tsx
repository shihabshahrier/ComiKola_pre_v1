import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Comic } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ComicCardProps {
  comic: Comic;
  onLike?: () => void;
}

export function ComicCard({ comic, onLike }: ComicCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsLikeAnimating(true);
    onLike?.();
    setTimeout(() => setIsLikeAnimating(false), 300);
  };

  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link to={`/comics/${comic.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={comic.coverImage}
            alt={comic.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/comics/${comic.id}`}>
          <h2 className="font-semibold hover:text-neutral-600">{comic.title}</h2>
        </Link>
        <p className="text-sm text-neutral-600">by {comic.author}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs">
            {comic.genre}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 transition-transform hover:scale-110"
            >
              <Heart
                className={cn(
                  'h-4 w-4 transition-all',
                  isLiked && 'fill-red-500 text-red-500',
                  isLikeAnimating && 'scale-125'
                )}
              />
              <span className="text-sm">{comic.likes}</span>
            </button>

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">{comic.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}