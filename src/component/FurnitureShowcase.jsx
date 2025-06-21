import React from "react";

const FurnitureShowcase = () => {
  // Custom SVG Icon
  const DiagonalArrowIcon = ({ className = "" }) => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17,7 17,17 7,17" />
    </svg>
  );

  const servicesData = [
    {
      id: 1,
      title: "FURNITURE CONSULTANCY",
      image: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/aa81db056d92ed0c4f500036e4060594fa2dc94d?placeholderIfAbsent=true",
      paragraphs: [
        "Thorough examination of your business operations, structure, and goals unveils hidden opportunities that can enhance your spatial utilisation, boost efficiency, reduce costs, and, most importantly, elevate the wellbeing of your workforce.",
        "Furniture consultancy employs analysis, surveys, and testing to offer strategic insights into how your workspace can align with your vision, all while adhering to your budget, time constraints, and space limitations.",
        "When you collaborate with us, we define the ideal look and ambiance for your workspace, how it can function at peak efficiency, and its intricate details. This serves as the crucial initial phase in crafting an environment that empowers both your employees and your brand to realise their full potential.",
        "Furniture consultancy may well be the cornerstone of your entire project. With guidance rooted in insights, recommendations, and creative input pertaining to furniture design, it can be the linchpin to achieving your business aspirations. Entrust this vital aspect to capable hands."
      ]
    },
    {
      id: 2,
      title: "OFFICE DESIGN",
      image: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/0905bcdc2e54211ae35512fd0c07cde294382646?placeholderIfAbsent=true",
      paragraphs: [
        "It's there right now, just under the surface of your busy, well-loved space. A new office awaits to propel your team into the future. At Sketch Studios, creativity meets reality in a holistic approach to office design that weaves aesthetics and functionality to invigorate your space with new energy.",
        "With a professional eye (or several), we view your project from multiple angles so that any requirements, ideas, and recommendations can be incorporated with efficiency, sustainability, and style. Like us, our design concepts are malleable, adaptable to change, and invite challenges—the result: a workplace design that will always elevate your brand.",
        "Identity, operational needs, and team culture play into your new office design at every turn, and our collaborative way of working means we've always got sight of exactly what you need and how we're meeting it.",
        "In a world where clients are too often just numbers on the books, our promise to you is a personalised and authentic service. We combine the intimate experience of a close-knit team with the resources and assets of a deep pool of industry talent."
      ]
    },
    {
      id: 3,
      title: "FURNITURE",
      image: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/f8f745b8dd6775632dd2b55dbe771dca84f7a537?placeholderIfAbsent=true",
      paragraphs: [
        "It's not just a desk. It's someone's memory of their first day at work. It's where you landed your largest project yet. It's where your extraordinary team elevates your business; every day.",
        "We treat office furniture as an extension of your brand. It's the personality that makes your staff look forward to work and is a reflection of your culture, attitude, and aspirations. Office furniture facilitates achieving your goals in its look, feel, and function.",
        "Your furnishings are the stage on which your brand story occurs, so they need to set the scene visually and function efficiently. They need to complement your day-to-day operations without taking over the space. We know exactly what to bring to your workplace when it comes to furnishing.",
        "Your brand doesn't simply occupy its space. It comes to life in it, working in synergy with all the elements around it. Our choice of furniture and how we introduce it to your space reflects your brand's identity, personality, and desired market position."
      ]
    },
    {
      id: 4,
      title: "OFFICE REFURBISHMENT",
      image: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/e288fae4ce1048202f2f13024fa3350f9db24ebc?placeholderIfAbsent=true",
      paragraphs: [
        "Office refurbishment is the perfect solution for any business that wants to increase ROI, or that wants a more environmentally conscious workplace turnover, or that simply wants to amplify its brand identity with an injection of energy.",
        "This is the next step in the evolution of your business. We change the scenery, the atmosphere, and the experience to reflect where you are today and how far you've come. Trust us to execute that plan with swift efficiency, seizing the opportunities we find along the way to produce breathtaking results.",
        "We see the potential in any space. Our office refurbishment process allows us to actualise that potential, working with what you already have to bring it up to the level of quality you deserve. From fundamental aspects like new electrical wiring allowing for better connectivity to a fresh lick of paint that optimises light dispersion, an expert touch can be eye-opening.",
        "Our cooperative mindset sets us apart from other refurbishment professionals. We understand that the heart of your business needs to beat in your new space, not get lost in translation. Instead of leading, we guide."
      ]
    },
    {
      id: 5,
      title: "MOVES & RELOCATIONS",
      image: "https://cdn.builder.io/api/v1/image/assets/2fbb717cb9604ca0a1bb16062f4edccf/2c4c096b26601a7af0ab1df52ad82d487be4fe95?placeholderIfAbsent=true",
      paragraphs: [
        "Moving the contents of your workplace is a daunting thought. What if you could hand the process over to a coordinated team of professionals who could not only dismantle, package, and securely store your equipment but transport and reassemble it at the drop of a hat? Well, you're in luck!",
        "A dedicated move manager will oversee the entire process of your relocation. It all starts in your current workplace, where we help you prepare for the move. We draw up a plan with you so everyone involved knows exactly what to expect at each stage.",
        "We facilitate each stage of the move with the help of our professional team, whether that's professionally dismantling tech systems or delicate storage until you're ready to move into your new space. Nothing is a rush in our meticulously detailed plan.",
        "When your relocation doesn't all happen in one go (as they often don't), you need a secure storage area with a stable internal atmosphere that protects sensitive data and the condition of electrical equipment. Our regional network of secure warehousing facilities meets all these requirements to give you complete peace of mind during the transition."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {servicesData.map((service, index) => {
        return (
          <div key={service.id} className="min-h-screen">
            <div className="flex flex-col lg:flex-row min-h-screen">
              {/* Image Section - Left Side */}
              <div className="w-full lg:w-1/3 p-2 sm:p-4">
                <div className="w-full h-48 xs:h-52 sm:h-64 md:h-72 lg:h-full overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              </div>
              
              
              <div className="w-full lg:w-2/3 bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                 
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-[0.05em] sm:tracking-[0.1em] text-black leading-tight font-sans px-2">
                      {service.title}
                    </h2>
                  </div>
                  
                  
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {service.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-black text-left font-sans px-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  
                  <div className="pt-4 sm:pt-6 md:pt-8 text-center">
                    <button className="group relative inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-black uppercase tracking-wider hover:text-gray-700 transition-colors duration-300 bg-white border border-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                      <span>Find out more</span>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <DiagonalArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        );
      })}
    </div>
  );
};

export default FurnitureShowcase;