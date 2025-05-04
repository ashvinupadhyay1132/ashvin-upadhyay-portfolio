import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../shared/ThemeToggle';
import useScrollPosition from '../../hooks/useScrollPosition';

const navLinks = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Skills', href: '#skills' },
  { id: 3, name: 'Projects', href: '#projects' },
  { id: 4, name: 'Experience', href: '#experience' },
  { id: 5, name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY, scrollProgress } = useScrollPosition();
  const isScrolled = scrollY > 10;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold relative overflow-hidden group"
            aria-label="Ashvin Upadhyay"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
              AU
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 relative py-2 transition-colors duration-300 ease-in-out text-sm font-medium"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-indigo-600"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-white/90 via-white/95 to-indigo-50/90 dark:from-gray-900/90 dark:via-gray-900/95 dark:to-indigo-950/90 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-8">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Menu</span>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-200 hover:shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 px-6 py-8">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className="group flex items-center py-6 text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="relative flex items-center w-full">
                  <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                  <div className="absolute left-0 w-full h-full flex items-center justify-end">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300 mr-2"></span>
                  </div>
                  <span className="ml-auto text-indigo-600 dark:text-indigo-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Footer */}
          <div className="px-6 py-8 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col items-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl">
                AU
              </div>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                © 2024 Ashvin Upadhyay
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;