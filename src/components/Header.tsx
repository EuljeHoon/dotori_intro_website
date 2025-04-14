import React from "react";

export default function Header() {
  return (
    <header className="bg-[#e0f2c1] fixed top-0 left-0 w-full h-16 shadow-md z-50">
      <div className="h-full px-6 flex justify-between items-center">
        {/* logo */}
        <a href="#top" className="hover:text-white transition">
          <img
            src="/logo/just_name.png"
            alt="Dotori name"
            className="h-5 sm:h-5 md:h-10 w-auto object-contain mr-3 sm:mr-5"
          />
        </a>

        {/* navigation */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#5e3b1b]">
          <a href="#about" className="hover:text-white transition">Our Journey</a>
          <a href="#members" className="hover:text-white transition">Members</a>
          <a href="#story" className="hover:text-white transition">Story</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>

  );
}