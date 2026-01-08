import React, { useState } from 'react';

const About = () => {
  // State to handle the "Read More" toggle
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id='about' className="max-w-7xl mx-auto px-6 py-16 bg-white scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-[#A67C48] text-center mb-10">
        Satyam Metro Showstopper
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Text Content Column */}
        <div className="flex-1 space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Welcome to <span className="font-bold text-black">Satyam Metro Showstopper</span> — a landmark residential address by Satyam Metro Group. Set across a sprawling 4-acre premium land parcel, this iconic 40-storey development offers exquisitely crafted 2, 3 & 4 BHK luxury residences, designed to deliver an elevated urban lifestyle. This prestigious community is complemented by world-class amenities and premium specifications, ensuring an unmatched living experience in Kharghar.
          </p>

          <p>
            Residents enjoy seamless access to every essential — from floor plans, pricing, RERA details, construction updates, reviews, and project highlights to comprehensive information on amenities, location advantages, and more.
          </p>

          <h3 className="text-xl font-bold text-black pt-2">
            A Lifestyle Above the Ordinary
          </h3>

          <p>
            Satyam Metro Showstopper boasts 30+ modern lifestyle amenities, including a fully equipped gymnasium, lap pool & kids pool, pool loungers, reading lounge, Zumba studio, business centre, yoga & meditation zone, spa, senior citizen plaza, indoor games room, salon, and a dedicated toddlers' play area, creating a perfect blend of comfort, leisure, and luxury.
          </p>

          {/* Conditional Content */}
          <div className={`space-y-6 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p>
              Prime Address at Sector 20, Kharghar Strategically located in the heart of Kharghar, the project enjoys unrivalled connectivity and proximity to major hubs: Kharghar Railway Station — 5 mins drive | Belapur CBD Railway Station — 10 mins drive.
            </p>
            
            <p className="bg-slate-50 p-4 border-l-4 border-[#A67C48]">
              <strong>Strategic Location Benefits:</strong><br />
              The project is situated near the upcoming Navi Mumbai International Airport and the Mumbai-Pune Expressway, making it a goldmine for investors and end-users alike. Educational institutions like NIFT and ITM, as well as multi-specialty hospitals, are all within a 3km radius.
            </p>

            <p>
              Experience a world where architecture meets art. With Italian-inspired design elements and a grand lobby that welcomes you home, every corner of this development is a testament to the "Showstopper" lifestyle. The 40-storey towers provide panoramic views of the Kharghar hills and the city skyline.
            </p>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1 group"
          >
            {isExpanded ? '- Read Less' : '+ Read More'}
            <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>

        {/* Poster / Side Image Column */}
        <div className="w-full lg:w-[400px] flex-shrink-0 sticky top-24">
          <div className="border border-gray-200 p-2 bg-white shadow-sm">
            <div className="relative border-[12px] border-[#A67C48] p-4 bg-black text-white text-center aspect-[3/4] flex flex-col justify-center overflow-hidden">
              {/* Decorative Leopard Print Border Simulation */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ 
                  backgroundImage: 'radial-gradient(#A67C48 2px, transparent 2px)', 
                  backgroundSize: '15px 15px' 
                }}
              ></div>
              
              <div className="relative z-10 space-y-4">
                <div className="text-[10px] uppercase tracking-[0.2em] border-b border-white/30 pb-2 inline-block mx-auto">
                  From Milan to Kharghar
                </div>
                <h4 className="text-lg font-serif italic">
                  ITALIAN FASHION & LUXURY HOME ICON <br />
                  <span className="not-italic font-bold tracking-widest text-sm uppercase">First Time In India</span>
                </h4>
                
                <div className="py-4 text-[10px] uppercase tracking-widest">
                  Brought to you by
                  <div className="flex justify-center items-center gap-4 mt-2">
                    <span className="font-bold border border-white/50 px-2 py-1">METRO GROUP</span>
                    <span className="font-bold border border-white/50 px-2 py-1">SATYAM</span>
                  </div>
                </div>

                <div className="text-amber-500 text-xs tracking-[0.3em] font-bold uppercase">
                  An Opportunity Like <br />
                  <span className="text-xl">Never Before</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">
                  Get ready for a whole new experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;