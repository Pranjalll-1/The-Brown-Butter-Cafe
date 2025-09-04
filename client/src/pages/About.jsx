import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(110, 78, 63)] text-foreground px-4">
      <div className="max-w-2xl w-full rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-2">
          The Brown Butter Cafe is a cozy neighborhood spot serving artisan
          coffee, fresh pastries, and wholesome meals. Our mission is to create
          a warm, welcoming space for everyone to relax, connect, and enjoy
          delicious food made with care.
        </p>
        <p className="text-lg">
          We source the finest ingredients, bake daily, and brew every cup with
          passion. Whether you're here for a quick bite or a lingering chat, we
          hope you feel right at home.
        </p>
      </div>
    </div>
  );
}
