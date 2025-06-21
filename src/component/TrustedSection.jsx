import * as React from "react";

export default function TrustedSection() {
  return (
    <div className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-24 py-12 sm:py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        
          <div className="flex-shrink-0 mb-6 sm:mb-0 mr-0 sm:mr-4 md:mr-6 lg:mr-8">
            <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-red-500 rounded-2xl flex flex-col items-center justify-center text-white">
              <div className="text-xs lg:text-sm font-normal mb-1">Certified</div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">B</span>
              </div>
              <div className="text-xs lg:text-sm font-normal mt-1">Corporation</div>
            </div>
          </div>
                    
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] font-bold leading-tight lg:leading-[85px] tracking-[-0.02em]">
            TRUSTED FROM FIT OUT TO FURNISHED.
          </h1>
        </div>
                
       
        <div className="max-w-4xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-normal mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Welcome to your new workplace. From our holistic end-to-end service.
          </h2>
                    
          <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-gray-300">
            Make the most of your people and place with a multi-service offering that starts with the fundamentals of good workplace design and ends with the finishing touches.
          </p>
                    
          <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-gray-300">
            When you choose to work with us, you work with a consultancy you can trust to be authentic and fair in our work and communication. Our B Corp certification demonstrates that ethics, sustainability, and transparency drive all our practices.
          </p>
        </div>
                
      
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
          
          <div className="flex items-center gap-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg text-black bg-white rounded-full hover:bg-gray-100 transition-colors font-normal">
              Accreditations
            </button>
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12M12 4V12M4 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
                    
         
          <div className="flex items-center gap-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg text-black bg-white rounded-full hover:bg-gray-100 transition-colors font-normal">
              B Corp
            </button>
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12M12 4V12M4 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}