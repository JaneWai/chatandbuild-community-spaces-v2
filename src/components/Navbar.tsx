import React, { useState } from 'react';
import { Menu, X, Users, Globe, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Globe className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-warmGray-900 font-display">CommunitySpaces</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-orange-500 text-warmGray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#communities" className="border-transparent text-warmGray-600 hover:border-orange-300 hover:text-warmGray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150">
                Communities
              </a>
              <a href="#apps" className="border-transparent text-warmGray-600 hover:border-orange-300 hover:text-warmGray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150">
                Apps
              </a>
              <a href="#" className="border-transparent text-warmGray-600 hover:border-orange-300 hover:text-warmGray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150">
                About
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-warmGray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-warmGray-200 rounded-md leading-5 bg-warmGray-50 placeholder-warmGray-500 focus:outline-none focus:placeholder-warmGray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-150"
                placeholder="Search communities"
                type="search"
              />
            </div>
            <button className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-warm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150">
              Sign In
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-warmGray-400 hover:text-warmGray-500 hover:bg-warmGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-orange-50 border-orange-500 text-orange-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </a>
            <a href="#communities" className="border-transparent text-warmGray-600 hover:bg-warmGray-50 hover:border-orange-300 hover:text-warmGray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Communities
            </a>
            <a href="#apps" className="border-transparent text-warmGray-600 hover:bg-warmGray-50 hover:border-orange-300 hover:text-warmGray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Apps
            </a>
            <a href="#" className="border-transparent text-warmGray-600 hover:bg-warmGray-50 hover:border-orange-300 hover:text-warmGray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              About
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-warmGray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Users className="h-10 w-10 text-warmGray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-warmGray-800">Guest User</div>
                <div className="text-sm font-medium text-warmGray-500">Sign in to join communities</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button className="w-full text-left block px-4 py-2 text-base font-medium text-warmGray-500 hover:text-warmGray-800 hover:bg-warmGray-100">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
