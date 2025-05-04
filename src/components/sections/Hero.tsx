import React from 'react';
import { ArrowDown, Download, ExternalLink, Github, Mail, Linkedin, Instagram, Youtube, Sparkles, Target, Rocket, Users } from 'lucide-react';
import Button from '../shared/Button';
import { socials } from '../../data/social';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950" id="home">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-morph"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300 to-blue-300 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-morph animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Main Title Card */}
          <div className="md:col-span-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl dark:shadow-none border border-gray-100 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-1 group">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                Ashvin Upadhyay
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                MERN Stack Developer
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
                Crafting modern web experiences with 3+ years of expertise in building scalable applications. Focused on creating elegant, efficient, and user-centric solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="#projects"
                  icon={<ExternalLink size={20} />}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Projects
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  href="/ashvin-resume.pdf"  
                  download="ashvin-resume.pdf"  
                  icon={<Download size={20} />}
                  className="border-2 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col items-start">
                <Sparkles className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bringing creative solutions to complex problems</p>
              </div>
            </div>
            
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col items-start">
                <Target className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Precision</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Attention to detail in every project</p>
              </div>
            </div>
            
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col items-start">
                <Rocket className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building fast, scalable solutions</p>
              </div>
            </div>
            
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col items-start">
                <Users className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User-Focused</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creating delightful experiences</p>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="md:col-span-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700/50 transition-all duration-300">
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social) => {
                let Icon;
                switch (social.icon) {
                  case 'Github': Icon = Github; break;
                  case 'Linkedin': Icon = Linkedin; break;
                  case 'Instagram': Icon = Instagram; break;
                  case 'Youtube': Icon = Youtube; break;
                  case 'Mail': Icon = Mail; break;
                  default: Icon = Github;
                }
                
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:-translate-y-0.5"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium mt-2">Scroll Down</span>
          <div className="animate-bounce">
            <ArrowDown size={18} />
          </div>
        </a>
      </div>

      <style >{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
        }
        
        .animate-morph {
          animation: morph 15s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
      <style>{`
            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            
            .animate-gradient-x {
              background-size: 200% auto;
              animation: gradient-x 8s linear infinite;
            }
          `}</style>
    </section>
  );
};

export default Hero;