import React, { useState } from "react";
import { categories } from "../data/category";
import { menuData } from "../data/menu.js";
import MenuCard from "../components/MenuCard";
import CartSummary from "../components/CartSummary.jsx";
import CartSidebar from "../components/CartSidebar.jsx";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee & beverages");
  const [cartOpen, setCartOpen] = useState(false);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <div className="mt-8 relative">
      <div className="flex flex-col gap-6 justify-center items-center menu-head-container p-10 max-sm:p-6">
        <h1 className="text-5xl md:text-6xl font-bold">Our Menu</h1>
        <div className="flex flex-col gap-1">
          <p className="font-sm opacity-80">
            Discover our carefully curated selection of artisan coffee, fresh
            pastries, and delicious treats
          </p>
        </div>
      </div>

      <div className="menu-category flex p-4 px-4 md:px-16 gap-8 overflow-x-auto whitespace-nowrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn cursor-pointer transition ${
              activeCategory === category ? "active-category-btn" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="border solid" />

      <div className="menu-section px-4 md:px-16 flex flex-col gap-8 mt-8">
        {menuData
          .filter((item) => item.category === activeCategory)
          .map((item, index) => (
            <div key={index}>
              <MenuCard item={item} />
            </div>
          ))}
        {!cartOpen && <CartSummary onOpen={() => setCartOpen(true)} />}
        <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </div>
  );
};

export default Menu;
