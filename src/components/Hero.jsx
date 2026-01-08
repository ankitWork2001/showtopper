import React from "react";
import { Download } from "lucide-react";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import image1 from "../assets/avi-waxman-f9qZuKoZYoY-unsplash.jpg";
import image2 from "../assets/brian-babb-XbwHrt87mQ0-unsplash.jpg";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const images = [image1, image2];

  return (
    <div id="hero" className="font-sans text-gray-800 relative">
      <div className="relative h-[85vh] w-full overflow-hidden">
        {/* Swiper Slider Background */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-[5000ms] scale-110"
                style={{ backgroundImage: `url('${src}')` }}
              >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </SwiperSlide>
          ))} 
        </Swiper>

        {/* Information Card - Kept absolute to stay on top of slider */}
        <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-lg shadow-2xl max-w-sm">
          <div className="text-center space-y-2 flex flex-col items-center">
            <p className="text-gray-600 font-medium tracking-wide">
              Launching Soon
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
              SATYAM METRO SHOWSTOPPER
            </h1>
            <div className="text-sm text-gray-600">
              <p>By Satyam Metro Group</p>
              <p>At Sector 20, Kharghar</p>
            </div>

            {/* Offer Box */}
            <div className="bg-[#de9051] p-4 rounded-md text-white w-full mx-auto shadow-lg items-center justify-center">
              <div className="flex flex-col gap-2 items-start justify-center border-2 border-dashed border-white p-2">
                <p className="font-sans text-md flex items-center gap-3">
                  <span className="text-sm">◆</span> EOI Offer 7X Return
                </p>
                <p className="font-sans text-md flex items-center gap-3">
                  <span className="text-sm">◆</span> EOI 2 BHK 2 Lakh
                </p>
              </div>
            </div>

            <p className="text-gray-600 font-medium">
              2, 3 & 4 BHK Luxuries Apartments
            </p>

            <div className="text-2xl font-bold text-slate-900">
              ₹ On Request
            </div>

            <div className="items-center justify-center">
            <button className="bg-[#A67C48] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#8e693c] transition-colors shadow-lg flex items-center justify-center gap-2">
              Download Brochure
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
