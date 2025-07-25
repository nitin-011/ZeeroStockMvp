import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center space-x-2">
            {/* Using a placeholder for the logo for now. 
                In a real app, you'd import an SVG or image. */}
            <span className="text-blue-600 font-bold text-2xl">ZeeroStock</span>
            {/* If you have the actual logo image: */}
            {/* <img src="/path/to/your/logo.svg" alt="ZeeroStock Logo" className="h-8 w-auto" /> */}
          </a>
        </div>

        {/* Navigation Links (Hidden on small screens, shown on medium and up) */}
        <div className="hidden md:flex space-x-8">
          <a href="/how-it-works" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
            How It Works
          </a>
          <a href="/for-sellers" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
            For Sellers
          </a>
          <a href="/for-buyers" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
            For Buyers
          </a>
          <a href="/support" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
            Support
          </a>
        </div>

        {/* Auth Buttons (Hidden on small screens, shown on medium and up) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button (Shown on small screens, hidden on medium and up) */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            // onClick handler for mobile menu toggle will be added later
          >
            <span className="sr-only">Open main menu</span>
            {/* Heroicon menu icon */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, will be shown with state management) */}
      {/* This section would typically be controlled by React state to toggle visibility */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">How It Works</a>
          <a href="/for-sellers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">For Sellers</a>
          <a href="/for-buyers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">For Buyers</a>
          <a href="/support" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Support</a>
          <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Login</a>
          <a href="/register" className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mt-2">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
