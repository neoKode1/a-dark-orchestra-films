'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Film } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={handleNavLinkClick}
          >
            <div className="relative">
              <Film className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
              <div className="absolute inset-0 animate-pulse bg-red-500/20 rounded-full blur-sm"></div>
            </div>
            <span className="font-heading text-2xl font-bold gradient-text">
              A Dark Orchestra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="font-body text-white/90 hover:text-white transition-colors duration-300 relative group"
                  onClick={handleNavLinkClick}
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="font-body text-white/90 hover:text-white transition-colors duration-300 relative group"
                  onClick={handleNavLinkClick}
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="font-body text-white/90 hover:text-white transition-colors duration-300 relative group"
                  onClick={handleNavLinkClick}
                >
                  Gallery
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="button-primary"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 text-white hover:text-red-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="glass-effect rounded-lg p-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="block font-body text-white/90 hover:text-white transition-colors duration-300 py-2"
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block font-body text-white/90 hover:text-white transition-colors duration-300 py-2"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/gallery" 
                    className="block font-body text-white/90 hover:text-white transition-colors duration-300 py-2"
                    onClick={handleNavLinkClick}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="block button-primary text-center"
                    onClick={handleNavLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 