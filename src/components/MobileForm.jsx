import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailKeys } from "../key/key";

const MobileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

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
    <div className="block md:hidden bg-white p-4 shadow-lg">

      <h2 className="text-center text-black text-md font-medium mb-4">
        Pre-Register for Best Offers
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

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          className="w-full border rounded-lg p-2"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          className="w-full border rounded-lg p-2"
        />

        <input
          type="tel"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({ ...formData, mobile: e.target.value })
          }
          required
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#A67C48] text-white py-2 rounded-full font-medium"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default MobileForm;
