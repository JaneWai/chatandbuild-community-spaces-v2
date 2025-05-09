import React from 'react';
import { Users, Compass, Zap, Heart, MessageSquare, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      name: 'Find Your Community',
      description: 'Discover communities that match your interests, values, and goals.',
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Explore Apps',
      description: 'Access apps and tools created by community members to enhance your experience.',
      icon: Compass,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      name: 'Instant Connections',
      description: 'Connect with like-minded individuals instantly through our platform.',
      icon: Zap,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Supportive Environment',
      description: 'Experience a welcoming atmosphere where everyone can contribute and grow.',
      icon: Heart,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      name: 'Meaningful Discussions',
      description: 'Engage in conversations that matter and expand your knowledge.',
      icon: MessageSquare,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Safe & Secure',
      description: 'Our platform prioritizes your privacy and security at every step.',
      icon: Shield,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="section-padding bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-warmGray-900 font-display sm:text-4xl">
            Why Join CommunitySpaces?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-warmGray-600 mx-auto">
            Our platform offers everything you need to find, join, and thrive in communities that matter to you.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 card-hover">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 border border-warmGray-100 shadow-soft h-full">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 rounded-md shadow-md ${feature.color}`}>
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-warmGray-900 tracking-tight font-display">{feature.name}</h3>
                    <p className="mt-5 text-base text-warmGray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
