import React from "react";
import { PhoneCall, MapPin, MessageCircle } from "lucide-react";

const MobileFooter = () => {
  return (
    <>
      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-[#A67C48] border-t shadow-lg flex md:hidden z-50">
        <button className="w-1/3 flex items-center justify-center gap-2 py-3 text-white font-semibold">
          <MapPin size={18} />
          SITE VISIT
        </button>
        <a
          href="https://wa.me/919082164514?text=Hi%20this%20side%20satyam%20developer%20how%20can%20i%20help%20you"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/3 flex items-center justify-center gap-2 py-3 text-white font-semibold"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
          WHATSAPP
        </a>
        <a
          href="tel:+919082164514"
          className="w-1/3 flex items-center justify-center gap-2 py-3 text-white font-semibold"
        >
          <PhoneCall size={18} />
          CALL
        </a>
      </div>

     
    </>
  );
};

export default MobileFooter;
