import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailKeys } from "../key/key";

const RightForm = ({ onRequestCallBack, onChatBotClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailKeys.serviceId,
        emailKeys.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          mobile: formData.mobile,
        },
        emailKeys.publicKey
      )
      .then(() => {
        setShowSuccessAlert(true);
        setFormData({ name: "", email: "", mobile: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setShowFailureAlert(true);
        setLoading(false);
      });
  };

  return (
    <div className="hidden md:flex max-w-md mx-auto bg-white min-h-screen flex-col shadow-lg border border-gray-100 sticky top-0">
      {/* Header */}
      <div className="bg-slate-300 flex flex-col items-center">
        <div
          onClick={onRequestCallBack}
          className="bg-[#A67C48] text-white w-full py-1 rounded-b-3xl text-center text-lg cursor-pointer shadow-md"
        >
          +91 90821 64514
        </div>

        <button
          onClick={onRequestCallBack}
          className="mt-1 mb-2 bg-[#A67C48] text-white px-10 py-1 rounded-lg text-lg shadow-inner hover:bg-[#8e693c]"
        >
          Request Call Back
        </button>
      </div>

      {/* Form Section */}
      <div className="px-2 py-4 flex flex-col">
        <h2 className="text-center text-black text-md mb-2">
          Pre-Register here for Best Offers
        </h2>

        {/* Alerts */}
        {showSuccessAlert && (
          <div className="text-green-600 text-center text-sm mb-2">
            Submitted successfully ✅
          </div>
        )}
        {showFailureAlert && (
          <div className="text-red-600 text-center text-sm mb-2">
            Submission failed ❌
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full border border-gray-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-[#A67C48]"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full border border-gray-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-[#A67C48]"
          />

          <input
            type="tel"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            required
            className="w-full border border-gray-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-[#A67C48]"
          />

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-linear-to-b from-[#B8864E] to-[#D99B5C] text-white px-6 py-2.5 rounded-full text-sm shadow-md hover:opacity-90"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Floating Buttons */}
      <div className="mt-auto p-6 flex justify-end gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919082164514"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-1 shadow-xl hover:scale-110 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
        {/* Chatbot Button */}
        <button
          onClick={onChatBotClick}
          className="bg-linear-to-br from-[#9e7242] to-[#f09051] rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:scale-110 transition"
          title="Chat with us"
        >
          🤖
        </button>

      </div>
    </div>
  );
};

export default RightForm;
