import React from 'react';
import { ExternalLink } from 'lucide-react';
import { App } from '../types';

interface AppCardProps {
  app: App;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="bg-white rounded-lg shadow-warm overflow-hidden card-hover border border-warmGray-100">
      <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 relative">
        {app.image ? (
          <img
            src={app.image}
            alt={app.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{app.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-warmGray-900 font-display">{app.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {app.category}
          </span>
        </div>
        <p className="mt-2 text-warmGray-600 text-sm line-clamp-2">{app.description}</p>
        <div className="mt-3 text-sm text-warmGray-500">
          <span>By </span>
          <a href="#" className="font-medium text-orange-600 hover:text-orange-700">
            {app.communityName}
          </a>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-warmGray-500 text-sm">
            <span>{app.rating} ★</span>
            <span className="mx-1">•</span>
            <span>{app.downloads} downloads</span>
          </div>
          <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-orange-600 hover:text-orange-700 border border-orange-200 rounded-md hover:bg-orange-50 transition duration-150"
          >
            View <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
