import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { socials } from '../../data/social';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-2xl font-bold relative overflow-hidden group"
              aria-label="Ashvin Upadhyay"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                AU
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Experience</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</a>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socials.map(social => {
              let Icon;
              switch (social.icon) {
                case 'Github': Icon = Github; break;
                case 'Linkedin': Icon = Linkedin; break;
                case 'Mail': Icon = Mail; break;
                default: return null;
              }
              
              return (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ashvin Upadhyay. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;