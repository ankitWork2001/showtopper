import React, { useState } from 'react';
import { X } from 'lucide-react'; // Optional: for a clean close icon

const InterestForm = ({onClose}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Main Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl mx-4">
        
        {/* Header Section */}
        <div className="relative bg-[#A67C52] py-4 text-center">
          <h2 className="text-2xl font-semibold text-white">Express Your Interest</h2>
          <button 
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity"
          >
            <X size={28} strokeWidth={3} />
          </button>
        </div>

        {/* Content Section */}
        <div className="px-8 pt-6 pb-10 flex flex-col items-center">
          
          {/* Logo Placeholder */}
          <div className="mb-6 bg-black p-4 rounded-sm border border-yellow-600/50 w-full max-w-[320px] text-center shadow-lg">
            <div className="text-[10px] tracking-[0.3em] text-gray-300 uppercase">Codename</div>
            <div className="text-2xl font-serif tracking-widest text-[#D4AF37] font-light">SHOWSTOPPER</div>
            <div className="text-[10px] tracking-[0.2em] text-gray-300 uppercase border-t border-gray-700 mt-1 pt-1">
              Navi - Mumbai
            </div>
          </div>

          <p className="text-gray-700 font-medium mb-6 text-center">
            Please Enter Your Details To Learn More About This Project
          </p>

          {/* Form Fields */}
          <form className="w-full space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67C52]/50 placeholder:text-gray-400"
              />
              <input
                type="text"
                placeholder="Mobile"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67C52]/50 placeholder:text-gray-400"
              />
            </div>
            
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67C52]/50 placeholder:text-gray-400"
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-b from-[#B88A5B] to-[#92643B] text-white text-xl font-medium px-16 py-3 rounded-full shadow-lg hover:brightness-110 transition-all active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterestForm;