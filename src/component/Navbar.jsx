import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-3 sm:px-6 py-4 w-full font-sans">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Responsive sizing */}
          <div className="text-[40px] sm:text-[50px] md:text-[60px] font-normal tracking-tight leading-[1] text-white">
            Sketch
          </div>

          {/* Desktop Navigation - Responsive breakpoints */}
          <div className="hidden xl:flex items-center space-x-6 lg:space-x-8 xl:space-x-10 text-[14px] lg:text-[16px] font-normal tracking-normal">
            <a href="#what-we-do" className="hover:text-gray-300 transition-colors whitespace-nowrap">
              What we do
            </a>
            <a href="#our-work" className="hover:text-gray-300 transition-colors whitespace-nowrap">
              Our work
            </a>
            <a href="#who-we-are" className="hover:text-gray-300 transition-colors whitespace-nowrap">
              Who we are
            </a>
            <a href="#news-insights" className="hover:text-gray-300 transition-colors whitespace-nowrap">
              News & Insights
            </a>
          </div>

          {/* Tablet Navigation - Shows on lg but hides on xl */}
          <div className="hidden lg:flex xl:hidden items-center space-x-6 text-[14px] font-normal tracking-normal">
            <a href="#what-we-do" className="hover:text-gray-300 transition-colors">
              What we do
            </a>
            <a href="#our-work" className="hover:text-gray-300 transition-colors">
              Our work
            </a>
            <a href="#who-we-are" className="hover:text-gray-300 transition-colors">
              Who we are
            </a>
            <a href="#news-insights" className="hover:text-gray-300 transition-colors">
              News
            </a>
          </div>

          {/* Right side - Responsive button and menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-[14px] sm:text-[16px] text-black bg-white rounded-full hover:bg-gray-100 transition-colors font-normal flex items-center">
              <span>Get in touch</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 sm:ml-2 sm:w-4 sm:h-4"
              >
                <path 
                  d="M4 4L12 12M12 4V12M4 12H12" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            {/* Mobile Menu Button - Shows up to xl */}
            <button
              onClick={toggleMenu}
              className="xl:hidden flex flex-col justify-center items-center w-8 h-8"
            >
              <span className={`block w-5 sm:w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px] sm:translate-y-[5px]' : 'mb-[5px] sm:mb-[6px]'}`}></span>
              <span className={`block w-5 sm:w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-[5px] sm:mb-[6px]'}`}></span>
              <span className={`block w-5 sm:w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px] sm:-translate-y-[5px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Responsive spacing */}
        <div className={`xl:hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 overflow-hidden`}>
          <div className="pt-4 sm:pt-6 pb-2 space-y-4 sm:space-y-5">
            <a
              href="#what-we-do"
              className="block py-1 text-[14px] sm:text-[16px] hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              What we do
            </a>
            <a
              href="#our-work"
              className="block py-1 text-[14px] sm:text-[16px] hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our work
            </a>
            <a
              href="#who-we-are"
              className="block py-1 text-[14px] sm:text-[16px] hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Who we are
            </a>
            <a
              href="#news-insights"
              className="block py-1 text-[14px] sm:text-[16px] hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              News & Insights
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}