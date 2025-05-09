import React from 'react';

const testimonials = [
  {
    content: "Joining CommunitySpaces was the best decision I made this year. I've found amazing people who share my passion for sustainable living.",
    author: "Sarah Johnson",
    role: "Environmental Activist",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    content: "The developer community here is incredibly supportive. I've learned more in 3 months than I did in a year of self-study.",
    author: "Michael Chen",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    content: "I love how easy it is to discover new apps created by community members. It's like having a personalized app store!",
    author: "Priya Patel",
    role: "Digital Creator",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="section-padding bg-gradient-warm" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-warmGray-900 font-display sm:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-warmGray-700 mx-auto">
            Don't just take our word for it — hear from the people who have found their communities.
          </p>
        </div>

        <div className="mt-12 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-warm p-8 border border-warmGray-100 card-hover">
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <div className="text-amber-400 flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-warmGray-700 italic mb-6">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                  />
                  <div className="ml-4">
                    <h4 className="text-warmGray-900 font-medium">{testimonial.author}</h4>
                    <p className="text-warmGray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
