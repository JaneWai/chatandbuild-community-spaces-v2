import React from 'react';
import { Users, Compass, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-warm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-warmGray-900 font-display sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Find your</span>{' '}
                <span className="block text-orange-600 xl:inline">perfect community</span>
              </h1>
              <p className="mt-3 text-base text-warmGray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join communities that resonate with your interests and discover amazing apps created by passionate community members.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow-warm">
                  <a
                    href="https://jj-thrive-plt-808.chatandbuild.app/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Explore Communities
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#apps"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <Compass className="w-5 h-5 mr-2" />
                    Discover Apps
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="People working on laptops in a collaborative space"
        />
      </div>
    </div>
  );
};

export default Hero;
