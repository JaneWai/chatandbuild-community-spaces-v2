import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Communities from './components/Communities';
import Apps from './components/Apps';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warmGray-50 font-sans text-warmGray-800">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Features />
      </div>
      <div className="bg-gradient-warm">
        <Communities />
      </div>
      <div className="bg-white">
        <Apps />
      </div>
      <div className="bg-gradient-warm">
        <Testimonials />
      </div>
      <div className="bg-white">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
