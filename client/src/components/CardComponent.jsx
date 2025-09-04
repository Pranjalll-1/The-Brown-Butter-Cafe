import React from "react";

const CardComponent = ({
  image,
  title,
  description,
  imagePosition = "left",
}) => {
  return (
    <div className="w-full max-w-none overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
      <div
        className={`flex flex-col lg:flex-row ${
          imagePosition === "right" ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <div className="lg:w-2/5">
          <div className="h-56 lg:h-80 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          className="lg:w-3/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center min-h-[280px] lg:min-h-[320px]"
          style={{ backgroundColor: "rgb(95, 67, 53)" }}
        >
          <div className="space-y-6 lg:space-y-8">
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-cafe-warm-accent leading-tight">
              {title}
            </h3>
            <p className="opacity-80 text-sm sm:text-base lg:text-lg text-cafe-warm-accent/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
