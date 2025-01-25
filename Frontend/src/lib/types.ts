export interface Comic {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  genre: string;
  description: string;
  likes: number;
  rating: number;
  pages: string[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  profileImage: string;
  stats: {
    comics: number;
    likes: number;
    rating: number;
  };
  readingHistory: Comic[];
  favorites: Comic[];
}

export type SearchFilters = {
  genre?: string;
  rating?: number;
  sortBy?: 'newest' | 'popular' | 'rating';
};