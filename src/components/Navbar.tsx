'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMenu();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-white font-bold text-xl">
            DeepTech AI
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            tabIndex={0}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-white hover:text-gray-300 transition-colors">
              Gallery
            </Link>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Link 
                  href="/" 
                  className="text-white text-xl"
                  onClick={handleToggleMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-white text-xl"
                  onClick={handleToggleMenu}
                >
                  About
                </Link>
                <Link 
                  href="/gallery" 
                  className="text-white text-xl"
                  onClick={handleToggleMenu}
                >
                  Gallery
                </Link>
                <button 
                  className="text-white mt-8"
                  onClick={handleToggleMenu}
                  onKeyDown={handleKeyDown}
                  aria-label="Close menu"
                  tabIndex={0}
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 