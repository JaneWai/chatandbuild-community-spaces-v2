import React, { useState } from 'react';
import AppCard from './AppCard';
import { apps } from '../data/apps';
import { Filter, Search } from 'lucide-react';

const Apps: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = ['All', ...Array.from(new Set(apps.map(app => app.category)))];
  
  const filteredApps = apps
    .filter(app => activeCategory === 'All' || app.category === activeCategory)
    .filter(app => 
      searchQuery === '' || 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.communityName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="section-padding" id="apps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-warmGray-900 font-display sm:text-4xl">
            Explore Community Apps
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-warmGray-600 mx-auto">
            Discover useful applications created by our community members to enhance your experience.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center text-warmGray-700 mr-2">
              <Filter className="h-5 w-5 mr-1" /> Filter:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-warmGray-700 hover:bg-amber-100 border border-warmGray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-warmGray-400" />
              </div>
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-warmGray-300 rounded-md leading-5 bg-white placeholder-warmGray-500 focus:outline-none focus:placeholder-warmGray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-warm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150">
            View All Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;
