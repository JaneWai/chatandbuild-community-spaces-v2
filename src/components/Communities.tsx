import React, { useState } from 'react';
import CommunityCard from './CommunityCard';
import { communities } from '../data/communities';
import { Filter } from 'lucide-react';

const Communities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(communities.map(community => community.category)))];
  
  const filteredCommunities = activeCategory === 'All' 
    ? communities 
    : communities.filter(community => community.category === activeCategory);

  return (
    <div className="section-padding" id="communities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-warmGray-900 font-display sm:text-4xl">
            Discover Communities
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-warmGray-700 mx-auto">
            Find your tribe and connect with people who share your interests and passions.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="inline-flex items-center text-warmGray-700 mr-2">
            <Filter className="h-5 w-5 mr-1" /> Filter:
          </span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-warmGray-700 hover:bg-orange-100 border border-warmGray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCommunities.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-warm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150">
            View All Communities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Communities;
