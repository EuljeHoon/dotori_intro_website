import React from "react";

export default function Header() {
  return (
    <header className="bg-[#e0f2c1] fixed top-0 left-0 w-full h-15 shadow-md z-50">
      <div className="px-6 flex justify-between items-center">
        {/* logo */}
        <img
          src="/logo/dotori_name.png"
          alt="Dotori name"
          className="h-15 w-auto object-contain"
        />
        
        {/* navigate function */}
        <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#5e3b1b]">
          <a href="#top" className="hover:text-white transition">
            Top
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#members" className="hover:text-white transition">
            Members
          </a>
          <a href="#story" className="hover:text-white transition">
            Story
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}