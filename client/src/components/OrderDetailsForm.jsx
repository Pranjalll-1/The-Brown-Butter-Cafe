import React, { useState } from "react";

const OrderDetailsForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    onSubmit({ name, phone });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">
      <form
        className="bg-background p-8 rounded-2xl shadow-2xl flex flex-col gap-4 min-w-[320px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-2 text-cafe-warm-accent text-center">
          Enter your details
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-cafe-warm-accent rounded-lg px-4 py-2 focus:outline-accent bg-background text-foreground"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-cafe-warm-accent rounded-lg px-4 py-2 focus:outline-accent bg-background text-foreground"
          required
        />
        <div className="flex gap-4 mt-2">
          <button
            type="submit"
            className="add-to-cart-btn w-full py-2 rounded-lg font-semibold"
          >
            Submit
          </button>
          <button
            type="button"
            className="cta-btn w-full py-2 rounded-lg font-semibold"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetailsForm;
