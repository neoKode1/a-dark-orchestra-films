import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DeepTech AI</h3>
            <p className="text-gray-300">
              Innovative AI solutions for the future
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media for updates and to get in touch
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/io2Medusa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Twitter"
                tabIndex={0}
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100093569451356" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
                tabIndex={0}
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/a_dark_orchestra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
                tabIndex={0}
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/company/deeptech-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
                tabIndex={0}
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeepTech AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 