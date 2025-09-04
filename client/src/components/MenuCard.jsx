import React, { useState } from "react";
import { useCart } from "../contexts/Cart";
import { PlusIcon, MinusIcon } from "lucide-react";

const MenuCard = ({ item }) => {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCart();
  // Find the cart item if it exists
  const cartItem = cart.find((p) => p.id === item.id);

  return (
    <div className="flex flex-col lg:flex-row menu-card">
      {/* Image */}
      <div className="lg:w-1/3 aspect-video lg:aspect-square overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col w-full">
        <div className="p-4 px-8 max-sm:px-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <h3 className="text-lg font-semibold">&#8377;{item.price}</h3>
          </div>
          <p className="opacity-80">{item.description}</p>
        </div>

        {/* Button pinned at bottom */}
        <div className="mt-auto p-4 px-8 max-sm:px-4">
          {cartItem ? (
            <div className="flex items-center gap-2">
              <button
                className="p-2 quantity-btn rounded-full border border-primary text-primary hover:bg-primary hover:text-cafe-dark transition-colors"
                onClick={() => decreaseQuantity(item.id)}
              >
                <MinusIcon />
              </button>
              <span className="font-semibold text-lg w-8 text-center select-none">
                {cartItem.quantity}
              </span>
              <button
                className="p-2 quantity-btn rounded-full border border-primary text-primary hover:bg-primary hover:text-cafe-dark transition-colors"
                onClick={() => increaseQuantity(item.id)}
              >
                <PlusIcon />
              </button>
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
