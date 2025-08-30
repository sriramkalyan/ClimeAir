
import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
    if (leftRef.current) {
      gsap.set(leftRef.current, { x: -200 });
      gsap.to(leftRef.current, { x: 0, duration: 2, ease: "power2.out" });
    }

    if (rightRef.current) {
      gsap.set(rightRef.current, { x: 200 });
      gsap.to(rightRef.current, { x: 0, duration: 2, ease: "power2.out" });
    }

    if (topRef.current) {
      gsap.set(topRef.current, { y: -100 });
      gsap.to(topRef.current, { y: 0, duration: 1.5, ease: "power2.out" });
    }

    if (bottomRef.current) {
      gsap.set(bottomRef.current, { y: -100 });
      gsap.to(bottomRef.current, { y: 0, duration: 1.5, ease: "power2.out" });
    }
  }, []);



  return (
    <header className="bg-white shadow-lg sticky top-0 z-50"ref={bottomRef}>
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2" >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          {/* Left side */}
          <span className="font-medium text-center sm:text-left">
            Minimal Effort. Maximum Efficiency
          </span>

          {/* Right side */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 text-xs sm:text-sm">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <p>+91 81224 57956</p>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <p>+91 81224 17956</p>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <p className="truncate max-w-[160px] sm:max-w-none">
                info.climeairengineers@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4"ref={topRef}>
        <div className="flex justify-between items-center">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img
              src="/Cae_original.png"
              alt="Clime Air Engineers Logo"
              className="h-10 w-auto sm:h-12"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                CLIME AIR ENGINEERS
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 font-medium">
                HVAC Contracting Company
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
