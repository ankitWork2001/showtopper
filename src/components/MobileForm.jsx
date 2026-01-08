import React from "react";

const MobileForm = () => {
  return (
    <div className="block md:hidden bg-white p-4 shadow-lg">
      <h2 className="text-center text-black text-md font-medium mb-4">
        Pre-Register for Best Offers
      </h2>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-2"
        />
        <input
          type="tel"
          placeholder="Mobile"
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
