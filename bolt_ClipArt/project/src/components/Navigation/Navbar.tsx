import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, User, LogOut } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="/" className="text-teal-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="/explore" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Explore
                </a>
                <a href="/pricing" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="/how-it-works" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  How It Works
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <a href="/create" className="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Create Clipart
                </a>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 focus:outline-none">
                    <img 
                      src={user?.avatar || 'https://via.placeholder.com/40'} 
                      alt={user?.name} 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    <a href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </a>
                    <button 
                      onClick={logout} 
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <a href="/login" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Log in
                </a>
                <a href="/signup" className="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Sign up
                </a>
              </div>
            )}
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-teal-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/explore" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
              Explore
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <a href="/how-it-works" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
              How It Works
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="px-2 space-y-1">
                <div className="flex items-center px-3">
                  <div className="flex-shrink-0">
                    <img 
                      src={user?.avatar || 'https://via.placeholder.com/40'} 
                      alt={user?.name} 
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user?.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                  </div>
                </div>
                <a href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                  Dashboard
                </a>
                <a href="/create" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                  Create Clipart
                </a>
                <button 
                  onClick={logout} 
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-1">
                <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                  Log in
                </a>
                <a href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                  Sign up
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;