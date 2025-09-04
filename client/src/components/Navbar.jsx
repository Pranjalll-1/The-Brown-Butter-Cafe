import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-8 p-4 flex justify-center items-center sticky top-0 z-50 bg-background/50 backdrop-blur-sm">
      <div className="flex gap-8 text-lg md:text-xl hover:text-accent transition-colors">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
