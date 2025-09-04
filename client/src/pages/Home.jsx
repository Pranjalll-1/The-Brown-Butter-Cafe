import React from "react";
import Hero from "../components/Hero";
import CardComponent from "../components/CardComponent";
import interiorImage from "../assets/interior.webp";
import pizzaImage from "../assets/pizza.webp";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Cards Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 ">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-24 ">
          {/* First Card - Interior Image on Left */}
          <CardComponent
            image={interiorImage}
            title="Cozy Ambiance, Unforgettable Moments"
            description="Step into our warm, inviting space where every corner tells a story. Our carefully curated interior combines rustic charm with modern comfort, creating the perfect backdrop for your coffee rituals and culinary adventures. From intimate conversations to quiet contemplation, find your perfect spot in our cafe."
            imagePosition="left"
          />

          {/* Second Card - Pizza Image on Right */}
          <CardComponent
            image={pizzaImage}
            title="Artisanal Flavors, Crafted with Love"
            description="Discover our handcrafted dishes that blend traditional Indian spices with contemporary culinary techniques. Each bite is a journey through rich flavors and textures, from our signature coffee blends to our artisanal pizzas. Every dish is prepared fresh daily, ensuring an authentic taste of our passion for food."
            imagePosition="right"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
