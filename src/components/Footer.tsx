import React from 'react';
import { Globe, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-warmGray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-orange-400" />
              <span className="ml-2 text-xl font-bold text-white font-display">CommunitySpaces</span>
            </div>
            <p className="text-warmGray-300 text-base">
              Connecting passionate individuals through communities that inspire growth and innovation.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-warmGray-400 hover:text-orange-400 transition duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-warmGray-400 hover:text-orange-400 transition duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-warmGray-400 hover:text-orange-400 transition duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-warmGray-400 hover:text-orange-400 transition duration-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warmGray-200 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Communities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warmGray-200 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Community Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warmGray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warmGray-200 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Partnerships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-warmGray-400 hover:text-orange-300 transition duration-300">
                      Advertise
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-warmGray-700 pt-8">
          <p className="text-base text-warmGray-400 xl:text-center">
            &copy; {new Date().getFullYear()} CommunitySpaces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
