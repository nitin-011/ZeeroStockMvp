import React from 'react';
import HeroSection from '../../components/common/HeroSection';
import TrustSignals from '../../components/common/TrustSignals';
import FeaturedCategories from '../../components/common/FeaturedSignals';
import NewArrivals from '../../components/common/NewArrivals';
import Testimonials from '../../components/common/Testimonials';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* Featured Categories Section */}
      <FeaturedCategories />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Placeholder for "Trusted by Industry Leaders" and other potential sections before footer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted by Industry Leaders</h2>
          {/* You can add logos or more trust signals here */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Placeholder for logos */}
            <img src="https://placehold.co/150x50/F0F9FF/000000?text=Company+A" alt="Company A Logo" className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://placehold.co/150x50/F0F9FF/000000?text=Company+B" alt="Company B Logo" className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://placehold.co/150x50/F0F9FF/000000?text=Company+C" alt="Company C Logo" className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://placehold.co/150x50/F0F9FF/000000?text=Company+D" alt="Company D Logo" className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
