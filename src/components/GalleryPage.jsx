import React from 'react';

const Gallery = () => {
  // Array of gallery items based on the screenshot
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800", // Fashion show/Luxury placeholder
      alt: "Codename Showstopper Fashion Icon"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800", // Living room 1
      alt: "Satyam Metro Showstopper Interior View"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800", // Living room 2
      alt: "Modern Apartment Design"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800", // Lobby/Office
      alt: "Premium Building Lobby"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center mb-16">
          Satyam Show Stopper Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;