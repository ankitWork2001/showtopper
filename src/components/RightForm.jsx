import React from 'react';

const RightForm = ({onRequestCallBack}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <div className="hidden md:flex max-w-md mx-auto bg-white min-h-screen flex-col shadow-lg border border-gray-100 sticky top-0">

      {/* Header Section */}
      <div className="bg-slate-300 pt-0 flex flex-col items-center">
        {/* Phone Number Bar */}
        <div onClick={onRequestCallBack} className="bg-[#A67C48] text-white w-full py-1 rounded-b-3xl text-center text-lg hover:cursor-pointer shadow-md">
          +91 90821 64514
        </div>
        
        {/* Request Call Back Button */}
        <button onClick={onRequestCallBack} className="mt-1 mb-2 bg-[#A67C48] text-white px-10 py-1 rounded-lg text-lg shadow-inner hover:cursor-pointer hover:bg-[#8e693c] transition-colors">
          Request Call Back
        </button>
      </div>

      {/* Form Section */}
      <div className="px-2 py-4 flex flex-col">
        <h2 className="text-center text-black text-md font-normal mb-4">
          Pre-Register here for Best Offers
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border border-gray-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-[#A67C48] placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border border-gray-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-[#A67C48] placeholder-gray-500"
          />
          <input
            type="tel"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            className="w-full border border-gray-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-[#A67C48] placeholder-gray-500"
          />

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-gradient-to-b from-[#B8864E] to-[#D99B5C] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Floating WhatsApp Icon */}
      <div className="mt-auto p-6 flex justify-end">
        <div className="bg-white rounded-full p-1 shadow-xl cursor-pointer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default RightForm;