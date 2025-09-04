import { Coffee, Utensils, Star } from "lucide-react";
import heroCoffeeImage from "../assets/hero-coffee-cup.jpg";
import React from "react";

const CoffeeModel = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
        {/* Main Coffee Cup Image */}
        <div className="animate-float">
          <img
            src={heroCoffeeImage}
            alt="Luxury coffee cup with steam and floating coffee beans"
            className="w-full h-auto rounded-3xl shadow-glow hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          />
        </div>

        {/* Floating Coffee Beans - Decorative */}
        <div
          className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cafe-warm-accent rounded-full opacity-60 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-8 -left-4 sm:top-12 sm:-left-6 w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-1 right-6 sm:-bottom-2 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-cafe-warm-accent rounded-full opacity-50 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cafe-warm-accent/10 rounded-2xl blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default CoffeeModel;
