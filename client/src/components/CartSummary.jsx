// CartSummaryBar.jsx
import { useCart } from "../contexts/Cart";
import { useState } from "react";

export default function CartSummaryBar({ onOpen }) {
  const { cart, totalPrice } = useCart();

  if (cart.length === 0) return null; // hide if empty

  return (
    <div
      className="fixed bottom-8 w-[80%] md:w-[50%] lg:w-[40%] left-1/2 -translate-x-1/2 
  bg-black/40 backdrop-blur-md text-white p-4 
  flex justify-between items-center rounded-2xl shadow-lg border border-white/20"
    >
      <span>
        {cart.length} items | ₹{totalPrice}
      </span>
      <button
        className="bg-white text-black px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 hover:backdrop-blur-md"
        onClick={onOpen}
      >
        View Cart
      </button>
    </div>
  );
}
