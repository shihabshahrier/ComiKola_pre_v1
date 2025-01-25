import { useState } from 'react';
import { BookOpen, Heart, Star, Clock, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ComicCard } from '@/components/comics/comic-card';
import { Comic } from '@/lib/types';
import { Link } from 'react-router-dom';

export function Profile() {
  const [activeTab, setActiveTab] = useState<'comics' | 'history' | 'favorites'>('comics');

  const user = {
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    bio: 'Comic enthusiast and digital artist',
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200',
    stats: {
      comics: 12,
      likes: 156,
      rating: 4.8,
    },
    readingHistory: [
      {
        id: '1',
        title: 'The Adventure Begins',
        coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&q=80&w=400',
        author: 'Sarah Johnson',
        genre: 'Adventure',
        likes: 234,
        rating: 4.7,
      },
    ],
    favorites: [
      {
        id: '2',
        title: 'Mystic Dreams',
        coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400',
        author: 'Mike Chen',
        genre: 'Fantasy',
        likes: 189,
        rating: 4.5,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="border-b p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={user.profileImage}
              alt={user.username}
              className="h-24 w-24 rounded-full object-cover"
            />
            
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold">
                    {user.firstName} {user.lastName}
                  </h1>
                  <p className="text-neutral-600">@{user.username}</p>
                </div>
                
                <Link to="/edit-profile">
                  <Button className="mt-4 sm:mt-0">Edit Profile</Button>
                </Link>
              </div>
              
              <p className="mt-4 text-neutral-700 text-center sm:text-left">{user.bio}</p>
              
              <div className="mt-6 flex justify-center sm:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="font-medium">{user.stats.comics}</p>
                    <p className="text-sm text-neutral-600">Comics</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="font-medium">{user.stats.likes}</p>
                    <p className="text-sm text-neutral-600">Likes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="font-medium">{user.stats.rating}</p>
                    <p className="text-sm text-neutral-600">Avg. Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-b px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setActiveTab('comics')}
              className={`border-b-2 px-4 py-2 font-medium ${
                activeTab === 'comics'
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <BookOpen className="mr-2 inline-block h-4 w-4" />
              My Comics
            </button>
            
            <button
              onClick={() => setActiveTab('history')}
              className={`border-b-2 px-4 py-2 font-medium ${
                activeTab === 'history'
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Clock className="mr-2 inline-block h-4 w-4" />
              Reading History
            </button>
            
            <button
              onClick={() => setActiveTab('favorites')}
              className={`border-b-2 px-4 py-2 font-medium ${
                activeTab === 'favorites'
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Bookmark className="mr-2 inline-block h-4 w-4" />
              Favorites
            </button>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeTab === 'comics' && (
              <p className="col-span-full text-center text-neutral-600">
                No comics uploaded yet
              </p>
            )}
            
            {activeTab === 'history' &&
              user.readingHistory.map((comic) => (
                <ComicCard key={comic.id} comic={comic as Comic} />
              ))}
            
            {activeTab === 'favorites' &&
              user.favorites.map((comic) => (
                <ComicCard key={comic.id} comic={comic as Comic} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}