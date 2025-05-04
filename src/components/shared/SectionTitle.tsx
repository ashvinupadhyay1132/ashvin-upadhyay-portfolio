import React from 'react';
import AnimatedText from './AnimatedText';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className = '',
  centered = true,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      <div className={`flex items-center ${centered ? 'justify-center' : 'justify-start'} mb-4`}>
        <div className="h-px bg-indigo-600 w-6 mr-4"></div>
        <span className="text-indigo-600 font-medium uppercase tracking-wider text-sm">
          {subtitle || title}
        </span>
        <div className="h-px bg-indigo-600 w-6 ml-4"></div>
      </div>
      
      <AnimatedText
        text={title}
        tag="h2"
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
          isIntersecting ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
      />
    </div>
  );
};

export default SectionTitle;