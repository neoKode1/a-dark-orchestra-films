import React from 'react';
import Link from 'next/link';
import { Film, Mail, MapPin, Phone } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Film className="w-8 h-8 text-red-400" />
              <span className="font-heading text-2xl font-bold gradient-text">
                A Dark Orchestra Films
              </span>
            </div>
            <p className="font-body text-white/80 mb-6 max-w-md leading-relaxed">
              Revolutionary multimedia AI film company creating cutting-edge content through artificial intelligence. 
              Created by visionary filmmaker Chad Neo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/JusChadneo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="Twitter"
                tabIndex={0}
              >
                <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100093569451356" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="Facebook"
                tabIndex={0}
              >
                <FaFacebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/a_dark_orchestra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="Instagram"
                tabIndex={0}
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://linkedin.com/company/deeptech-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="LinkedIn"
                tabIndex={0}
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/JusChadneo/a-dark-orchestra-films" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="GitHub"
                tabIndex={0}
              >
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.youtube.com/@ADarkOrchestraFilms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="YouTube"
                tabIndex={0}
              >
                <FaYoutube className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="font-body text-white/70 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="font-body text-white/70 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="font-body text-white/70 hover:text-white transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="font-body text-white/70 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/70">Email</p>
                                     <a 
                     href="mailto:1deeptechnology@gmail.com" 
                     className="font-body text-white hover:text-red-400 transition-colors duration-300"
                   >
                     1deeptechnology@gmail.com
                   </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/70">Phone</p>
                                     <a 
                     href="tel:+14705760472" 
                     className="font-body text-white hover:text-red-400 transition-colors duration-300"
                   >
                     +1 (470) 576-0472
                   </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/70">Location</p>
                  <p className="font-body text-white">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-white/60">
              &copy; {new Date().getFullYear()} A Dark Orchestra Films. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="font-body text-white/60 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="font-body text-white/60 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 