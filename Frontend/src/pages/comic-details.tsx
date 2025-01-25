import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, MessageSquare, Share2, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RatingStars } from '@/components/comics/rating-stars';
import { cn } from '@/lib/utils';

export function ComicDetails() {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);

  const comic = {
    id,
    title: 'The Adventure Begins',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&q=80&w=800',
    author: 'Sarah Johnson',
    genre: 'Adventure',
    description: 'Follow the journey of a young hero as they discover their destiny and embark on an epic adventure filled with magic, friendship, and danger.',
    likes: 234,
    rating: 4.7,
    pages: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&q=80&w=800',
    ],
    comments: [
      {
        id: '1',
        user: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=50&h=50',
        content: "This is amazing! Cannot wait for the next chapter.",
        timestamp: '2 hours ago',
        replies: [],
      },
    ],
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsLikeAnimating(true);
    setTimeout(() => setIsLikeAnimating(false), 300);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // TODO: Implement comment submission
      setComment('');
    }
  };

  const handleReply = (commentId: string) => {
    // TODO: Implement reply functionality
  };

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <div className="rounded-lg border bg-white shadow-sm">
        {/* Comic Header */}
        <div className="border-b p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={comic.coverImage}
              alt={comic.title}
              className="w-full md:w-48 h-auto rounded-lg object-cover shadow-sm"
            />

            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">{comic.title}</h1>
                <p className="text-neutral-600">by {comic.author}</p>
              </div>

              <p className="mb-6 text-neutral-700">{comic.description}</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  onClick={handleLike}
                  className={cn(
                    'flex items-center gap-2 transition-transform',
                    isLikeAnimating && 'scale-110'
                  )}
                >
                  <Heart
                    className={cn(
                      'h-5 w-5',
                      isLiked ? 'fill-red-500 text-red-500' : 'text-neutral-500'
                    )}
                  />
                  <span>{comic.likes}</span>
                </Button>

                <div className="flex items-center gap-2">
                  <RatingStars initialRating={comic.rating} readonly />
                  <span className="font-medium">{comic.rating}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Button variant="outline" className="flex items-center gap-1">
                    <Share2 className="h-5 w-5" />
                    Share
                  </Button>

                  <Button variant="ghost" className="flex items-center gap-1">
                    <Flag className="h-5 w-5" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comic Pages */}
        <div className="border-b p-8">
          <h2 className="mb-6 text-xl font-semibold">Pages</h2>
          <div className="grid grid-cols-1 gap-6">
            {comic.pages.map((page, index) => (
              <img
                key={index}
                src={page}
                alt={`Page ${index + 1}`}
                className="w-full rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="p-8">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <MessageSquare className="h-5 w-5" />
            Comments
          </h2>

          {/* Add Comment */}
          <div className="mb-6">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="mb-2 w-full"
            />
            <Button onClick={handleComment} className="w-full sm:w-auto">
              Post Comment
            </Button>
          </div>

          {/* Existing Comments */}
          <div className="space-y-6">
            {comic.comments.map((comment) => (
              <div key={comment.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={comment.avatar}
                    alt={comment.user}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.user}</span>
                      <span className="text-sm text-neutral-500">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-neutral-700">{comment.content}</p>
                    <button
                      onClick={() => handleReply(comment.id)}
                      className="mt-2 text-sm font-medium text-neutral-600 hover:text-neutral-900"
                    >
                      Reply
                    </button>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies?.map((reply) => (
                  <div key={reply.id} className="ml-14 flex flex-col sm:flex-row gap-4">
                    <img
                      src={reply.avatar}
                      alt={reply.user}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{reply.user}</span>
                        <span className="text-sm text-neutral-500">
                          {reply.timestamp}
                        </span>
                      </div>
                      <p className="text-neutral-700">{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}