import * as React from "react";

function Desktop2() {
  return (
    <div className="flex overflow-hidden flex-col" style={{ backgroundColor: '#f8f8f6' }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Times+New+Roman:wght@400;700&family=Georgia:wght@400;700&family=Playfair+Display:wght@400;700&family=Crimson+Text:wght@400;600&family=Lora:wght@400;500;600&display=swap');
      `}</style>
      
      <div className="w-full">
        <div className="flex flex-col px-3 sm:px-5 pt-4 sm:pt-7 w-full bg-black">
          
        </div>
        
        {/* Image section with overlay */}
        <div className="relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/cbc3fd7705efbfa1fd1fd14bd376fa61b3f8f344?placeholderIfAbsent=true"
            className="object-contain z-10 w-full aspect-[2.74] sm:aspect-[2.74] md:aspect-[2.74]"
            alt=""
          />
          
          {/* Text overlay positioned on the left side */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:left-16 z-20 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
            <h1 style={{ 
              fontSize: 'clamp(1.5rem, 6vw, 7rem)',
              lineHeight: '0.9'
            }} className="text-white font-bold tracking-tight uppercase">
              YOUR NEW<br />
              WORKPLACE AWAITS.
            </h1>
          </div>
        </div>
        
        <div className="flex flex-col px-4 sm:px-6 md:px-10 lg:px-14 mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full text-black">
          <div style={{ 
            color: 'black', 
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 'clamp(1.875rem, 6vw, 6rem)',
            lineHeight: '0.9'
          }} className="self-start tracking-tighter font-black uppercase">
            Exceptional workplaces begin here.
          </div>
          
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            {/* First section with bold sans-serif */}
            <div style={{ 
              fontFamily: 'Inter, Arial, sans-serif', 
              fontWeight: 700, 
              fontSize: 'clamp(24px, 4vw, 40px)', 
              color: 'black',
              lineHeight: '1.2',
              marginBottom: 'clamp(20px, 3vw, 32px)'
            }}>
              Your workplace is filled with potential. It's our passion to deliver that potential.
            </div>
            
            {/* Second section with serif font */}
            <div style={{ 
              fontFamily: 'Times New Roman, Times, serif', 
              fontSize: 'clamp(18px, 2.5vw, 24px)', 
              color: 'black',
              lineHeight: '1.6',
              marginBottom: 'clamp(20px, 2.5vw, 28px)'
            }}>
              At Sketch Studios, we specialise in giving workplaces of all kinds the love and attention they deserve. If you want to feel inspired by a workplace as innovative as you and your team, you're in good hands here.
            </div>
            
            {/* Third section with different serif */}
            <div style={{ 
              fontFamily: 'Georgia, Times, serif', 
              fontSize: 'clamp(18px, 2.5vw, 24px)', 
              color: 'black',
              lineHeight: '1.6',
              marginBottom: 'clamp(24px, 3vw, 32px)'
            }}>
              Sketch Studios exists at the intersection between consultancy, design, and transformation of workplaces. We reimagine spaces, seeing the often elusive opportunities that can only be uncovered through new perspectives and unbounded creativity. We infuse each project with a rich tapestry of knowledge and insights that drive success. We push the boundaries of what we can do and challenge what we know until our results mirror the passion that drives us.
            </div>
            
            {/* Fourth section with another serif variation */}
            <div style={{ 
              fontFamily: 'Crimson Text, Georgia, serif', 
              fontSize: 'clamp(18px, 2.5vw, 24px)', 
              color: 'black',
              lineHeight: '1.6',
              marginBottom: 'clamp(24px, 3vw, 32px)'
            }}>
              We're the choice for brands that share our energy and ambition, who we can match with a zest for workplace design and an inventiveness that brings an environment to life.
            </div>
            
            {/* Final section with elegant serif */}
            <div style={{ 
              fontFamily: 'Playfair Display, Georgia, serif', 
              fontSize: 'clamp(18px, 2.5vw, 24px)', 
              color: 'black',
              lineHeight: '1.6'
            }}>
              Your potential is what makes us thrive.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop2;