import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
}

export function RatingStars({ initialRating = 0, onChange, readonly }: RatingStarsProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    if (!readonly) {
      setRating(value);
      onChange?.(value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const value = star - 0.5;
        const isHalfFilled = rating >= value && rating < star;
        const isFilled = (hover || rating) >= star;

        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => !readonly && setHover(star)}
            onMouseLeave={() => !readonly && setHover(0)}
            className={cn(
              'relative transition-transform hover:scale-110',
              readonly && 'cursor-default'
            )}
            disabled={readonly}
          >
            <Star
              className={cn(
                'h-5 w-5',
                isFilled ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300',
                isHalfFilled && 'fill-[url(#half-star)]'
              )}
            />
            {isHalfFilled && (
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor="#facc15" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
}