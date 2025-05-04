import React from 'react';
import { Send, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import { socials } from '../../data/social';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { ref: formRef, isIntersecting: formVisible } = useIntersectionObserver();
  const { ref: infoRef, isIntersecting: infoVisible } = useIntersectionObserver();
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100 dark:bg-indigo-900/20 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100 dark:bg-indigo-900/20 rounded-tr-full opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Get In Touch" subtitle="Contact" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              formVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'
            }`}
          >
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value="19995c52-1190-4fa8-b965-af53f0becfb4"
              />
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email_address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                icon={<Send size={18} />}
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              infoVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
            }`}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's build something amazing together
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  Feel free to reach out through the form or connect with me on social media.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                      <a href="mailto:ashvinupadhyay1132@gmail.com" className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                        ashvinupadhyay1132@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h4>
                
                <div className="flex space-x-4">
                  {socials.map(social => {
                    let Icon;
                    switch (social.icon) {
                      case 'Github': Icon = GitHub; break;
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
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;