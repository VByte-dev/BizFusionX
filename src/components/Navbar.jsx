import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sm:bg-white fixed w-full top-0 left-0 z-50">
      <nav className="bg-white container mx-auto flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="font-bold text-gray-900 font-[akira] text-md md:text-lg">
          BizFusion<span className="text-[#FD6900]">X</span>
        </div>

        {/* Desktop Menu */}
        <div className=" hidden md:flex space-x-8 font-medium text-gray-700 font-[space]">
          <a href="#home" className="hover:text-[#FD6900] transition-colors">
            Home
          </a>
          <a href="#pages" className="hover:text-[#FD6900] transition-colors">
            Pages
          </a>
          <a
            href="#services"
            className="hover:text-[#FD6900] transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-[#FD6900] transition-colors"
          >
            Projects
          </a>
          <a href="#blog" className="hover:text-[#FD6900] transition-colors">
            Blog
          </a>
          <a href="#contact" className="hover:text-[#FD6900] transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#FD6900] font-[space] flex gap-2 items-center text-white px-5 py-2 rounded-full font-medium hover:bg-[#e85d00] transition-all">
            Get Started
            <span className="bg-white rounded-full text-[#FD6900] w-6 h-6">
              <i class="ri-arrow-right-line"></i>
            </span>
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center text-gray-700 text-2xl"
        >
          <i className={`ri-${isOpen ? "close-large-line" : "menu-line"}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="font-[space] text-center md:hidden bg-white shadow-xl rounded-b-4xl border-white motion-preset-slide-down motion-duration-100">
          <div className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
            <a href="#home" className="hover:text-[#FD6900] transition-colors">
              Home
            </a>
            <a href="#pages" className="hover:text-[#FD6900] transition-colors">
              Pages
            </a>
            <a
              href="#services"
              className="hover:text-[#FD6900] transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-[#FD6900] transition-colors"
            >
              Projects
            </a>
            <a href="#blog" className="hover:text-[#FD6900] transition-colors">
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-[#FD6900] transition-colors"
            >
              Contact
            </a>
            <button className=" bg-[#FD6900] font-[space] flex items-center justify-between gap-2 text-white px-5 py-2 rounded-full font-medium hover:bg-[#e85d00] transition-all">
              Get Started
              <span className="bg-white rounded-full text-[#FD6900] w-6 h-6">
                <i class="ri-arrow-right-line"></i>
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
