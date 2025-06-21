import * as React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full bg-black overflow-hidden" style={{ height: 'clamp(8rem, 20vh, 20rem)' }}>
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between py-2 sm:py-3" style={{ paddingLeft: 'clamp(1rem, 4vw, 8rem)', paddingRight: 'clamp(1rem, 4vw, 8rem)' }}>
        
        {/* Top Section - "WHAT WE DO" */}
        <div className="mt-1 sm:mt-2">
          <div 
            className="text-white font-normal tracking-widest uppercase"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}
          >
            WHAT WE DO
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="flex justify-end items-end w-full mb-2 sm:mb-3">
          {/* Scroll to explore - Right aligned */}
          <div className="text-white">
            <div 
              className="font-normal flex items-center justify-end"
              style={{ 
                fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                gap: 'clamp(0.25rem, 1vw, 0.5rem)'
              }}
            >
              <svg 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                style={{ width: 'clamp(0.875rem, 2vw, 1.25rem)', height: 'clamp(0.875rem, 2vw, 1.25rem)' }}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}