import React from 'react';

const Price = () => {
  const priceData = [
    { type: "2 BHK", area: "900 to 1000 Sq.ft", price: "₹ On Request" },
    { type: "3 BHK", area: "1400 to 1550 Sq.ft", price: "On Request" },
    { type: "4 BHK", area: "2300 to 2500 Sq.ft", price: "On Request" },
  ];

  return (
    <section id='price' className="bg-white py-16 px-6 max-w-7xl mx-auto">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
        Satyam Metro Showstopper Price & Plan
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Pricing Table */}
        <div className="flex-grow w-full border border-orange-200 rounded-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-orange-200">
                <th className="p-5 text-xl font-bold text-slate-900">Type</th>
                <th className="p-5 text-xl font-bold text-slate-900">Carpet Area</th>
                <th className="p-5 text-xl font-bold text-slate-900">Price</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-orange-100 last:border-0 ${index % 2 === 1 ? 'bg-slate-50/50' : ''}`}
                >
                  <td className="p-5 text-lg font-medium text-slate-700">{item.type}</td>
                  <td className="p-5 text-lg text-slate-600">{item.area}</td>
                  <td className="p-5 text-lg font-bold text-slate-900">{item.price}</td>
                  <td className="p-5 text-right">
                    <button className="bg-[#A67C48] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#8e693c] transition-colors shadow-sm">
                      Price Breakup
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Detail Sheet Preview */}
        <div className="w-full lg:w-[450px] flex-shrink-0 flex flex-col items-center">
          <div className="border border-orange-300 p-2 bg-white shadow-sm w-full">
            {/* Simulated Document Preview */}
            <div className="border border-gray-300 aspect-[1.4/1] relative overflow-hidden bg-white group cursor-zoom-in">
              <img 
                src="https://via.placeholder.com/600x400?text=Detail+Sheet+Preview" 
                alt="Payment Schedule" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors">
                <span className="sr-only">Detail Sheet and Payment Schedule</span>
              </div>
            </div>
          </div>
          
          {/* Main Action Button */}
          <button className="mt-8 bg-[#C68A55] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#b07848] transition-all transform hover:scale-105">
            Complete Costing Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;