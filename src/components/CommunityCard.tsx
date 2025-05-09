import React from 'react';
import { Users } from 'lucide-react';
import { Community } from '../types';

interface CommunityCardProps {
  community: Community;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community }) => {
  return (
    <div className="bg-white rounded-lg shadow-warm overflow-hidden card-hover border border-warmGray-100">
      <div className="h-40 bg-gradient-to-r from-orange-400 to-amber-500 relative">
        {community.image ? (
          <img
            src={community.image}
            alt={community.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{community.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-warmGray-900 font-display">{community.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            {community.category}
          </span>
        </div>
        <p className="mt-2 text-warmGray-600 text-sm line-clamp-2">{community.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-warmGray-500 text-sm">
            <Users className="h-4 w-4 mr-1" />
            <span>{community.memberCount} members</span>
          </div>
          <button className="px-3 py-1 text-sm font-medium text-orange-600 hover:text-orange-700 border border-orange-200 rounded-md hover:bg-orange-50 transition duration-150">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
