import React from 'react';
import { User, Phone, Mail, X } from 'lucide-react';

const BrochureForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden font-sans relative">
        
        {/* Header Section */}
        <div className="bg-[#a67c4d] p-4 flex justify-between items-start">
          <h2 className="text-white text-lg font-medium leading-tight pr-4">
            Mention your whatsapp number to receive Brochure on whatsapp
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:opacity-80 transition-opacity"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          
          {/* Name */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <div className="bg-[#54656f] p-3 flex items-center justify-center min-w-[50px]">
              <User size={20} className="text-white" />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 text-gray-600 outline-none placeholder-gray-400"
            />
          </div>

          {/* Mobile */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <div className="bg-[#54656f] p-3 flex items-center justify-center min-w-[50px]">
              <Phone size={20} className="text-white" />
            </div>
            <input
              type="tel"
              placeholder="Mobile"
              className="w-full px-4 py-2 text-gray-600 outline-none placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <div className="bg-[#54656f] p-3 flex items-center justify-center min-w-[50px]">
              <Mail size={20} className="text-white" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-gray-600 outline-none placeholder-gray-400"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <button className="bg-gradient-to-b from-[#d09a63] to-[#a67c4d] text-white px-12 py-3 rounded-full text-xl font-medium shadow-md hover:brightness-105 active:scale-95 transition-all">
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BrochureForm;
