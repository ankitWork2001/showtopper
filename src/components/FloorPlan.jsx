import React from 'react';

const FloorPlan = () => {
  const plans = [
    {
      title: "Request Master Plan Layout",
      buttonText: "View layout Plan",
      img: "https://via.placeholder.com/600x400?text=Master+Plan+Layout", // Replace with actual master plan image
    },
    {
      title: "Request Unit Plan Layout",
      buttonText: "View Floor Plan",
      img: "https://via.placeholder.com/600x400?text=Unit+Plan+Layout", // Replace with actual unit plan image
    }
  ];

  return (
    <section id='floorplan' className="bg-white py-16 px-6 max-w-7xl mx-auto">
      {/* Page Title */}
      <h2 className="text-3xl font-semibold text-slate-800 text-center mb-16">
        Satyam Metro Showstopper Floor Plans
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="w-full max-w-md border border-orange-200 p-4 bg-white shadow-sm flex flex-col items-center"
          >
            {/* Image Container with Overlay */}
            <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer">
              <img 
                src={plan.img} 
                alt={plan.title} 
                className="w-full h-full object-cover blur-[2px] group-hover:blur-none transition-all duration-300"
              />
              {/* Dark Overlay with Text */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold px-4 text-center">
                  {plan.title}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button className="mt-6 bg-gradient-to-r from-[#B07E4D] to-[#D99B5C] text-white px-10 py-2.5 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition-opacity">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloorPlan;