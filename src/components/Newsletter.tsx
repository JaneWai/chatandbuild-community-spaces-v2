import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <div className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-warm rounded-2xl shadow-warm overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-warmGray-900 font-display sm:text-4xl">
                <span className="block">Stay connected with our community</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-warmGray-600">
                Subscribe to our newsletter and never miss updates on new communities, apps, and events.
              </p>
              <div className="mt-8 sm:flex sm:justify-center">
                <div className="sm:flex-1 sm:max-w-lg">
                  <form className="sm:flex">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-warmGray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        className="block w-full pl-10 pr-3 py-3 text-base rounded-md placeholder-warmGray-500 border-warmGray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-6 border border-transparent rounded-md shadow-warm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:px-10 transition duration-150"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <p className="mt-3 text-sm text-warmGray-500">
                We care about your data. Read our{' '}
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
