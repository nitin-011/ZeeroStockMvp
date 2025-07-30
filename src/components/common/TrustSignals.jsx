import React from 'react';
import { Button } from '../ui/button'; // Import Shadcn Button
import { Input } from '../ui/input';   // Import Shadcn Input
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-24 lg:py-32 rounded-b-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Unlock Capital, Accelerate <br className="hidden sm:inline" /> Sustainability
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Liquidate & Procure Excess Manufacturing Inventory with Ease. Connect with a Global Network of Manufacturers and Buyers.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Button
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate('/for-sellers')} // Use navigate hook
          >
            Sell Excess Inventory
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => navigate('/search-inventory')} // Use navigate hook
          >
            Browse Inventory
          </Button>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto bg-white p-2 rounded-full shadow-lg flex items-center border border-gray-200">
          <Input
            type="text"
            placeholder="Type Part Number, Category, or Keyword..."
            className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-2 text-gray-700 rounded-l-full"
            aria-label="Search inventory"
          />
          <Button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
            aria-label="Search"
            onClick={() => navigate('/search-results')} // Added navigation for search button
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
