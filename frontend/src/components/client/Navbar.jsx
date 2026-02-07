// src/components/Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeToggle } from "../common/ThemeToggle";
import { NavLink } from "react-router-dom";
import { IoFlashOutline } from "react-icons/io5";
import { RiLightbulbFlashFill } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-background/70 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-xs ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl text-white p-3 font-extrabold border border-secondary dark:text-white flex items-center bg-black rounded-full hover:bg-gray-500"
            >
              <RiLightbulbFlashFill size={18} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((menu, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(menu.href)}
                className="text-[14px] hover:text-secondary-foreground hover:translate-x-0.5 transition-transform transition-colors text-muted-foreground"
              >
                {menu.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/90 dark:bg-[#131313] backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20">
          {navLinks.map((menu, index) => (
            <NavLink
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary rounded-lg transition-colors duration-200 "
              to={menu.href}
              key={index}
            >
              {menu.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
