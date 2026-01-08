import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay } from 'swiper/modules';

const Amenities = () => {
  const amenities = [
    { title: "JOGGING TRACK", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500" },
    { title: "SENIOR CITIZEN CORNER", img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=500" },
    { title: "INDOOR GAMES", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=500" },
    { title: "SWIMMING POOL", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=500" },
    { title: "KIDS PLAY AREA", img: "https://images.unsplash.com/photo-1537655780520-1e392ede8139?q=80&w=500" },
    { title: "OUTDOOR GYM", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=500" },
    { title: "CLUB HOUSE", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=500" },
    { title: "SPA", img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=500" },
  ];

  const firstSwiperAmenities = amenities.filter((_, i) => i % 2 === 0);
const secondSwiperAmenities = amenities.filter((_, i) => i % 2 !== 0);


  return (
    <section id='amenities' className="bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-[#333] leading-tight mb-2">
            Satyam Metro Showstopper
          </h2>
          <h3 className="text-[26px] font-medium text-[#333]">
            Amenities
          </h3>
        </header>

        {/* Mobile View: Horizontal Swiper – Screenshot Style */}
<div className="lg:hidden mb-8">
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    centeredSlides
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}
  >
    {firstSwiperAmenities.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center">
          <div className="w-full overflow-hidden rounded-[28px] mb-3">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[230px] object-cover"
            />
          </div>
          <span className="text-[16px] font-bold uppercase">
            {item.title}
          </span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


<div className="lg:hidden">
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    centeredSlides
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}
  >
    {secondSwiperAmenities.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center">
          <div className="w-full overflow-hidden rounded-[28px] mb-3">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[230px] object-cover"
            />
          </div>
          <span className="text-[16px] font-bold uppercase">
            {item.title}
          </span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


        {/* Desktop View: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-[20px] mb-4 shadow-sm">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-bold text-[#333] tracking-wider uppercase">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;