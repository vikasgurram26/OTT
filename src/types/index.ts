export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  channelName: string;
  channelAvatar: string;
  description: string;
  category: 'movie' | 'tv' | 'all';
  genre?: string[];
  trending?: boolean;
  inWatchlist?: boolean;
  progress?: number;
  favorite?: boolean;
  recommended?: boolean;
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  timestamp: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  timestamp: string;
  read: boolean;
}

export interface User {
  email: string;
  password: string;
  subscription?: 'basic' | 'premium' | 'none';
}