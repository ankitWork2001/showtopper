import React from "react";
import { PhoneCall, MapPin } from "lucide-react";

const MobileFooter = () => {
  return (
    <>
      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-[#A67C48] border-t shadow-lg flex md:hidden z-50">
        <button className="w-1/2 flex items-center justify-center gap-2 py-3 text-white font-semibold">
          <MapPin size={18} />
          SITE VISIT
        </button>

        <a
          href="tel:+919082164514"
          className="w-1/2 flex items-center justify-center gap-2 py-3 text-white"
        >
          <PhoneCall size={18} />
          +91 9082164514
        </a>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919082164514"
        target="_blank"
        className="fixed bottom-20 right-4 md:hidden z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 shadow-xl rounded-full"
        />
      </a>
    </>
  );
};

export default MobileFooter;
