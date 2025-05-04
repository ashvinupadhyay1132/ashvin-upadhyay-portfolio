import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { experiences } from '../../data/experience';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="Career Path" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line - Adjusted height calculation */}
          <div className={`absolute left-0 md:left-1/2 top-0 w-px bg-indigo-200 dark:bg-indigo-900 transform md:translate-x-px ${
            experiences.length === 2 ? 'h-[95%]' : 'h-[99%]'
          }`}></div>
          
          {/* Experience Items - Adjusted spacing */}
          <div className={`${experiences.length === 2 ? 'space-y-20' : 'space-y-16'} pb-4`}>
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id} 
                experience={experience} 
                isLeft={index % 2 === 0}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Update TimelineItemProps interface
interface TimelineItemProps {
  experience: {
    id: number;
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
    logoUrl?: string;
  };
  isLeft: boolean;
  index: number;
  isLast: boolean;
}

// Update TimelineItem component
const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLeft, index, isLast }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative md:grid md:grid-cols-2 gap-8 ${isLeft ? 'md:text-right' : ''} ${isLast ? 'mb-0' : 'mb-8'}`}
    >
      {/* Timeline Node */}
      <div className={`absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full border-4 border-indigo-600 bg-white dark:bg-gray-800 transform -translate-x-2 md:-translate-x-[10px] transition-all duration-500 ${isIntersecting ? 'scale-100' : 'scale-0'}`}></div>
      
      {/* Content */}
      <div 
        className={`
          pl-8 md:pl-0 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}
          transition-all duration-700 ${
            isIntersecting 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }
        `}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4">
            {experience.logoUrl && (
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={experience.logoUrl}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.position}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                {experience.company}
              </p>
            </div>
          </div>
          
          <div className="mb-4 inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
            {experience.duration}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="inline-block bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Empty Column for Layout */}
      <div className={isLeft ? 'md:col-start-2' : 'md:col-start-1'}></div>
    </div>
  );
};

export default Experience;