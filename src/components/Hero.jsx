import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <div id='hero' className="font-sans text-gray-800">
      {/* Hero Section - Now starts at the top of the page */}
      <div 
        className="relative h-[85vh] w-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556912177-c54035601844?auto=format&fit=crop&q=80&w=2000')" }}
      >
        
        {/* Information Card */}
        <div className="absolute top-10 left-10 bg-white/95 p-8 rounded-lg shadow-2xl max-w-sm border-t-4 border-amber-800">
          <div className="text-center space-y-4">
            <p className="text-gray-600 font-medium tracking-wide">Launching Soon</p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
              SATYAM METRO SHOWSTOPPER
            </h1>
            <div className="text-sm text-gray-600">
              <p>By Satyam Metro Group</p>
              <p>At Sector 20, Kharghar</p>
            </div>

            {/* Offer Box */}
            <div className="border-2 border-dashed border-[#A67C48] bg-[#A67C48]/10 p-4 rounded-md text-left text-[#A67C48]">
              <p className="font-bold flex items-center gap-2">
                <span className="text-[10px]">◆</span> EOI Offer 7X Return
              </p>
              <p className="font-bold flex items-center gap-2">
                <span className="text-[10px]">◆</span> EOI 2 BHK 2 Lakh
              </p>
            </div>

            <p className="text-gray-600 font-medium">2, 3 & 4 BHK Luxuries Apartments</p>
            
            <div className="text-3xl font-bold text-slate-900">
              ₹ On Request
            </div>

            <button className="w-full bg-[#A67C48] text-white py-3 rounded-md font-semibold hover:bg-[#8e693c] transition-colors shadow-lg flex items-center justify-center gap-2">
              <Download size={18} /> Download Brochure
            </button>
          </div>
        </div>

        {/* Floating Label */}
        <div className="absolute top-[40%] right-[30%] bg-black/70 text-white px-3 py-1 text-xs border border-white/50">
          Satyam Metro Showstopper
        </div>

        {/* Carousel Arrow (Right) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white cursor-pointer transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;