import React from 'react';
import { Code, Award, GraduationCap, Coffee, Heart, Zap, Briefcase, Globe, Laptop, Brain, Target, Users } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Who I Am" />
        
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto"
        >
          {/* Profile Card */}
          <div 
            className={`md:col-span-4 lg:col-span-5 row-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src='/Ashvin.jpg'
                alt='Ashvin Upadhyay'
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Ashvin Upadhyay</h3>
                <p className="text-sm text-gray-200">MERN Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated developer with 3+ years of experience specializing in MongoDB, Express, React, and Node.js. 
              I enjoy translating complex requirements into clean, scalable code and thrive on solving challenging problems.
            </p>
          </div>

          {/* Experience Card */}
          <div 
            className={`md:col-span-2 lg:col-span-3 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-800 rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <Briefcase className="w-10 h-10" />
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-xl">Years of Experience</div>
            </div>
          </div>

          {/* Projects Card */}
          <div 
            className={`md:col-span-2 lg:col-span-4 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-700 rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <Code className="w-10 h-10" />
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div 
            className={`md:col-span-2 lg:col-span-7 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { icon: Laptop, label: 'Full Stack', color: 'bg-blue-500/10 text-blue-500 dark:text-blue-400' },
                { icon: Brain, label: 'Problem Solving', color: 'bg-purple-500/10 text-purple-500 dark:text-purple-400' },
                { icon: Target, label: 'Clean Code', color: 'bg-red-500/10 text-red-500 dark:text-red-400' },
                { icon: Users, label: 'Team Player', color: 'bg-green-500/10 text-green-500 dark:text-green-400' },
                { icon: Globe, label: 'Scalable Apps', color: 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400' },
                { icon: Zap, label: 'Fast Learner', color: 'bg-yellow-500/10 text-yellow-500 dark:text-yellow-400' }
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3 group">
                  <div className={`w-14 h-14 rounded-xl ${skill.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <skill.icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`md:col-span-4 lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-3 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '400ms' }}>
            {[
              { icon: Award, value: '2', label: 'Awards', color: 'bg-amber-500/10 text-amber-500 dark:text-amber-400' },
              { icon: GraduationCap, value: '15+', label: 'Technologies', color: 'bg-green-500/10 text-green-500 dark:text-green-400' },
              { icon: Heart, value: '100%', label: 'Satisfaction', color: 'bg-red-500/10 text-red-500 dark:text-red-400' },
              { icon: Coffee, value: '1000+', label: 'Coffee Cups', color: 'bg-amber-700/10 text-amber-600 dark:text-amber-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                  <stat.icon className="w-6 lg:w-7 h-6 lg:h-7" />
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;