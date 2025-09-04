import React from "react";
import CoffeeModel from "./CoffeeModel";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-6 py-8 lg:py-16">
        <div className="w-full max-w-none lg:max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content Section */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6 order-2 lg:order-1">
              <div className="space-y-3">
                <h1 className="lg:mb-8 text-5xl  md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight hero-head">
                  <span className="text-cafe-warm-accent">
                    The Brown Butter Cafe
                  </span>
                  <br />
                </h1>

                <p className="opacity-80 text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-80">
                  Where ancient Indian spices dance with premium coffee beans,
                  creating a symphony of flavors that awakens your soul and
                  celebrates the art of mindful indulgence.
                </p>
              </div>

              {/* Call to Action Button */}
              <div className="w-full px-2 sm:px-0 mt-10 md:mt-16">
                <Link
                  to={"/menu"}
                  className="group relative overflow-hidden  cta-btn text-center p-4 px-8 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
                >
                  Explore Menu
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="order-1 lg:order-2">
              <CoffeeModel />
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal separator line */}
      <div className="w-full flex justify-center mt-16">
        <hr className="w-[85vw] border-t-2 border-gray-300/30" />
      </div>
    </>
  );
};

export default Hero;
