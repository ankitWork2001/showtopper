import React from "react";

const MobileForm = () => {
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
    <div className="block md:hidden bg-white p-4 shadow-lg">
      <h2 className="text-center text-black text-md font-medium mb-4">
        Pre-Register for Best Offers
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full border rounded-lg p-2"
        />
        <input
          type="tel"
          placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          className="w-full bg-[#A67C48] text-white py-2 rounded-full font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MobileForm;
