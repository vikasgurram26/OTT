import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NotificationsPopover } from './NotificationsPopover';
import { AuthModal } from './AuthModal';
import { notifications } from '../data/sampleData';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-95 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-red-600 text-2xl font-bold">NETSTREAM</Link>
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className={`${location.pathname === '/movies' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Movies
            </Link>
            <Link 
              to="/tv-shows" 
              className={`${location.pathname === '/tv-shows' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              TV Shows
            </Link>
            <Link 
              to="/new" 
              className={`${location.pathname === '/new' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              New & Popular
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white px-4 py-1 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <Bell className="text-white w-6 h-6" />
              {notifications.some(n => !n.read) && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full" />
              )}
            </button>
            <NotificationsPopover
              notifications={notifications}
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>
          
          <button
            onClick={() => setShowAuthModal(true)}
            className="text-white hover:text-gray-300"
          >
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </nav>
  );
};