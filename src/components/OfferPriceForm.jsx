import React from 'react';
import { User, Phone, X } from 'lucide-react'; // Using lucide-react for icons

const OfferPriceForm = ({ onClose }) => {

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#a37a4c] p-4 flex justify-between items-center">
          <h2 className="text-white text-2xl font-medium w-full text-center ml-6">
            Get Offer Price
          </h2>
          <button onClick={onClose} className="text-white hover:opacity-80 transition-opacity">
            <X size={24} />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Input */}
          <div className="flex border border-gray-400 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-[#a37a4c]">
            <div className="bg-[#546671] p-3 flex items-center justify-center min-w-[50px]">
              <User className="text-white fill-current" size={20} />
            </div>
            <input
              type="text"
              placeholder="Name *"
              className="w-full p-3 outline-none text-gray-600 placeholder:text-gray-400"
              required
            />
          </div>

          {/* Mobile Input */}
          <div className="flex border border-gray-400 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-[#a37a4c]">
            <div className="bg-[#546671] p-3 flex items-center justify-center min-w-[50px]">
              <Phone className="text-white fill-current" size={20} />
            </div>
            <input
              type="tel"
              placeholder="Mobile *"
              className="w-full p-3 outline-none text-gray-600 placeholder:text-gray-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#a37a4c] text-white px-12 py-3 rounded-full text-xl font-medium hover:bg-[#8e6a41] transition-colors shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferPriceForm;