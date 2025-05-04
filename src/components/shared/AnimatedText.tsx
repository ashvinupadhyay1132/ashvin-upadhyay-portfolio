import React, { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  staggerDelay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  tag = 'span',
  staggerDelay = 0.05,
  once = true,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: once,
  });
  
  const animatedRef = useRef<HTMLElement>(null);
  const Tag = tag;

  useEffect(() => {
    if (!isIntersecting || !animatedRef.current) return;
    
    const element = animatedRef.current;
    const words = element.querySelectorAll('.word');
    
    words.forEach((word, i) => {
      const chars = word.querySelectorAll('.char');
      chars.forEach((char, j) => {
        const delay = i * 0.05 + j * staggerDelay;
        (char as HTMLElement).style.transitionDelay = `${delay}s`;
        (char as HTMLElement).style.opacity = '1';
        (char as HTMLElement).style.transform = 'translateY(0)';
      });
    });
  }, [isIntersecting, staggerDelay]);

  const words = text.split(' ').map((word, i) => {
    const characters = word.split('').map((char, j) => (
      <span 
        key={`${i}-${j}`} 
        className="char inline-block opacity-0 transform translate-y-[20px] transition-all duration-300 ease-out"
      >
        {char}
      </span>
    ));
    
    return (
      <span key={i} className="word inline-block mr-[0.25em]">
        {characters}
      </span>
    );
  });

  return React.createElement(
    Tag,
    { 
      ref: (el: HTMLElement) => {
        // @ts-ignore - Custom ref handling
        ref.current = el;
        animatedRef.current = el;
      },
      className
    },
    words
  );
};

export default AnimatedText;