import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          DeepTech AI
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gray-300 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 