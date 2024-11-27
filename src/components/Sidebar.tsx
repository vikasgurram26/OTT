import React from 'react';
import { Home, Film, Tv, TrendingUp, BookmarkCheck, Clock, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="fixed left-0 top-16 h-screen w-16 md:w-64 bg-black bg-opacity-95 text-white p-4">
      <div className="space-y-4">
        <SidebarItem 
          icon={<Home size={20} />} 
          text="Home" 
          active={location.pathname === '/'} 
          onClick={() => handleNavigation('/')}
        />
        <SidebarItem 
          icon={<Film size={20} />} 
          text="Movies" 
          active={location.pathname === '/movies'} 
          onClick={() => handleNavigation('/movies')}
        />
        <SidebarItem 
          icon={<Tv size={20} />} 
          text="TV Shows" 
          active={location.pathname === '/tv-shows'} 
          onClick={() => handleNavigation('/tv-shows')}
        />
        <SidebarItem 
          icon={<TrendingUp size={20} />} 
          text="Trending" 
          active={location.pathname === '/trending'} 
          onClick={() => handleNavigation('/trending')}
        />
        <SidebarItem 
          icon={<BookmarkCheck size={20} />} 
          text="Watchlist" 
          active={location.pathname === '/watchlist'} 
          onClick={() => handleNavigation('/watchlist')}
        />
        <SidebarItem 
          icon={<Clock size={20} />} 
          text="Continue Watching" 
          active={location.pathname === '/continue-watching'} 
          onClick={() => handleNavigation('/continue-watching')}
        />
        <SidebarItem 
          icon={<Heart size={20} />} 
          text="Favorites" 
          active={location.pathname === '/favorites'} 
          onClick={() => handleNavigation('/favorites')}
        />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active = false, onClick }) => {
  return (
    <div 
      className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer
        ${active ? 'bg-red-600' : 'hover:bg-gray-800'}`}
      onClick={onClick}
    >
      {icon}
      <span className="hidden md:block">{text}</span>
    </div>
  );
};