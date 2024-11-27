import { Video, Comment, Notification } from '../types';

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Release',
    description: 'The latest season of "Stranger Things" is now available!',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0',
    timestamp: '2 hours ago',
    read: false
  },
  {
    id: '2',
    title: 'Coming Soon',
    description: 'Get ready for "The Matrix 5" - premiering next week!',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0',
    timestamp: '1 day ago',
    read: true
  }
];

export const videos: Video[] = [
  // TV Shows - Drama
  {
    id: 'tv1',
    title: 'YOU',
    thumbnail: 'https://tse1.mm.bing.net/th?id=OIP.hMFvZe2PRp45LDiW0s69cgHaEK&pid=Api&P=0&h=180',
    duration: '45:00',
    views: 2500000,
    uploadDate: '2024-03-15',
    channelName: 'Royal Drama',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    description: 'A historical drama about the British royal family...',
    category: 'tv',
    genre: ['Drama'],
    trending: true
  },
  {
    id: 'tv2',
    title: 'Breaking Bad',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.xIcpeORFfrHQ-hEM0kFZIwHaEK&pid=Api&P=0&h=180',
    duration: '55:00',
    views: 1800000,
    uploadDate: '2024-03-14',
    channelName: 'Drama Central',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'A gripping drama about life choices...',
    category: 'tv',
    genre: ['Drama'],
    recommended: true
  },
  // TV Shows - Comedy
  {
    id: 'tv3',
    title: 'Sex Education',
    thumbnail: 'https://tse1.mm.bing.net/th?id=OIP.NKBnbsWOhTlguogpXCdIEwHaEL&pid=Api&P=0&h=180',
    duration: '22:00',
    views: 1200000,
    uploadDate: '2024-03-13',
    channelName: 'Comedy Central',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    description: 'A hilarious look at office culture...',
    category: 'tv',
    genre: ['Comedy'],
    trending: true
  },
  // TV Shows - Reality
  {
    id: 'tv4',
    title: 'Survival Challenge',
    thumbnail: 'https://tse1.mm.bing.net/th?id=OIP.IcrK9sZbV3yWrKa2dsxVKAHaFj&pid=Api&P=0&h=180',
    duration: '42:00',
    views: 950000,
    uploadDate: '2024-03-12',
    channelName: 'Reality TV',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'Contestants face ultimate survival challenges...',
    category: 'tv',
    genre: ['Reality'],
    recommended: true
  },
  // TV Shows - News
  {
    id: 'tv5',
    title: 'SUITS',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.FSNZLwDaM6XP6AGBrlc_bwHaFj&pid=Api&P=0&h=180',
    duration: '30:00',
    views: 750000,
    uploadDate: '2024-03-11',
    channelName: 'World News',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    description: 'Latest updates from around the world...',
    category: 'tv',
    genre: ['News']
  },
  // TV Shows - Mystery
  {
    id: 'tv6',
    title: 'Dark Secrets',
    thumbnail: 'https://tse4.mm.bing.net/th?id=OIP.nPAKvH8i2Iiiqd-_4EgHfwHaEK&pid=Api&P=0&h=180',
    duration: '50:00',
    views: 1100000,
    uploadDate: '2024-03-10',
    channelName: 'Mystery Channel',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'A mysterious series of events unfolds...',
    category: 'tv',
    genre: ['Mystery'],
    trending: true
  },
  // Original movie entries
  {
    id: '1',
    title: 'Mission Impossible Dead Reckoning',
    thumbnail: 'https://tse1.mm.bing.net/th?id=OIP.oMyMbKAxP0AB53asetafmQHaEK&pid=Api&P=0&h=180',
    duration: '2:45:00',
    views: 1500000,
    uploadDate: '2024-03-15',
    channelName: 'Adventure Studios',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    description: 'Join us on an epic journey through the wilderness...',
    category: 'movie',
    genre: ['Action', 'Adventure'],
    trending: true,
    inWatchlist: true,
    progress: 0,
    favorite: true,
    recommended: true
  },
  {
    id: '2',
    title: 'Fifty Shades of Grey',
    thumbnail: 'https://tse2.mm.bing.net/th?id=OIP.vpjpVAWPvy7cVCz7XYx9HQHaEK&pid=Api&P=0&h=180',
    duration: '2:30:00',
    views: 980000,
    uploadDate: '2024-03-14',
    channelName: 'Urban Stories',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'Experience the vibrant nightlife of Tokyo...',
    category: 'movie',
    genre: ['Drama', 'Romance'],
    trending: true,
    inWatchlist: false,
    progress: 45,
    favorite: false,
    recommended: true
  },
  {
    id: '3',
    title: 'Hangover',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.Vy5JEVMrx-2VB0Lhe84-kAHaEK&pid=Api&P=0&h=180',
    duration: '2:30:00',
    views: 980000,
    uploadDate: '2024-03-14',
    channelName: 'Urban Stories',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'Experience the vibrant nightlife of Tokyo...',
    category: 'movie',
    genre: ['Comedy'],
    trending: true,
    inWatchlist: false,
    progress: 45,
    favorite: false,
    recommended: true
  },
  {
    id: '4',
    title: 'The Goat Life',
    thumbnail: 'https://tse2.mm.bing.net/th?id=OIP.xceVvHJZcr1FYFcnEaYVHAHaEK&pid=Api&P=0&h=180',
    duration: '2:30:00',
    views: 980000,
    uploadDate: '2024-03-14',
    channelName: 'Urban Stories',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'Experience the vibrant nightlife of Tokyo...',
    category: 'movie',
    genre: ['Documentary'],
    trending: true,
    inWatchlist: false,
    progress: 45,
    favorite: false,
    recommended: true
  },
  {
    id: '5',
    title: 'Me Before You',
    thumbnail: 'https://tse2.mm.bing.net/th?id=OIP.DKPTdEfkVNkv_j07RrZx4AHaFk&pid=Api&P=0&h=180',
    duration: '2:30:00',
    views: 980000,
    uploadDate: '2024-03-14',
    channelName: 'Urban Stories',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'Experience the vibrant nightlife of Tokyo...',
    category: 'movie',
    genre: ['Romance'],
    trending: true,
    inWatchlist: false,
    progress: 45,
    favorite: false,
    recommended: true
  },
  {
    id: '6',
    title: 'How to lose a Guy in 10 days',
    thumbnail: 'https://tse4.mm.bing.net/th?id=OIP.J1-eFE3DmqTVahI9PKM2GgHaEK&pid=Api&P=0&h=180',
    duration: '2:30:00',
    views: 980000,
    uploadDate: '2024-03-14',
    channelName: 'Urban Stories',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description: 'Experience the vibrant nightlife of Tokyo...',
    category: 'movie',
    genre: ['Drama'],
    trending: true,
    inWatchlist: false,
    progress: 45,
    favorite: false,
    recommended: true
  },
  

];

export const comments: Comment[] = [
  {
    id: '1',
    user: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'This is absolutely amazing! The cinematography is breathtaking.',
    likes: 245,
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    user: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    content: 'Ive watched this multiple times. Gets better every time!',
    likes: 127,
    timestamp: '5 hours ago'
  }
];