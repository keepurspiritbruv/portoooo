import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link 
          to="/" 
          className="text-xl font-bold text-blue-700"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          MURGUY
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link 
          to="/about-me" 
          className="text-black hover:text-gray-700"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about-me');
          }}
        >
          About Me
        </Link>
        <Link 
          to="/portofolio" 
          className="text-black hover:text-gray-700"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('portofolio');
          }}
        >
          Portofolio
        </Link>
        <Link 
          to="/Self-Project" 
          className="text-black hover:text-gray-700"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('anjing-lu');
          }}
        >
          Self Project
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
          <div className="flex flex-col items-start p-4">
            <Link 
              to="/beranda" 
              className="py-2 text-black hover:text-gray-700" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('beranda');
              }}
            >
              Beranda
            </Link>
            <Link 
              to="/about-me" 
              className="py-2 text-black hover:text-gray-700" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about-me');
              }}
            >
              About Me
            </Link>
            <Link 
              to="/portofolio" 
              className="py-2 text-black hover:text-gray-700" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portofolio');
              }}
            >
              Portofolio
            </Link>
            <Link 
              to="/anjing-lu" 
              className="py-2 text-black hover:text-gray-700" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('anjing-lu');
              }}
            >
              Anjing Lu
            </Link>
            <Link 
              to="/cukidog" 
              className="py-2 text-black hover:text-gray-700" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('cukidog');
              }}
            >
              Cukidog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;