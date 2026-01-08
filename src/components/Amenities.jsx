import React from 'react';

const Amenities = () => {
  const amenities = [
    { title: "INDOOR GAMES", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=500" },
    { title: "SWIMMING POOL", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=500" },
    { title: "JOGGING TRACK", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500" },
    { title: "KIDS PLAY AREA", img: "https://images.unsplash.com/photo-1537655780520-1e392ede8139?q=80&w=500" },
    { title: "OUTDOOR GYM", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=500" },
    { title: "CLUB HOUSE", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=500" },
    { title: "SENIOR CITIZEN CORNER", img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=500" },
    { title: "SPA", img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=500" },
  ];

  return (
    <section id='amenities' className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-slate-800 text-center mb-12">
          Satyam Metro Showstopper Amenities
        </h2>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container with Rounded Corners */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100 mb-3">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Label */}
              <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">
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