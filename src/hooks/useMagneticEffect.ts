import { useRef, useEffect } from 'react';

interface MagneticProps {
  strength?: number;
  distance?: number;
}

const useMagneticEffect = ({ strength = 0.5, distance = 100 }: MagneticProps = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handlePointerMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      const x = left + width / 2;
      const y = top + height / 2;
      
      const dx = clientX - x;
      const dy = clientY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < distance) {
        const factor = 1 - dist / distance;
        const moveX = dx * factor * strength;
        const moveY = dy * factor * strength;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        element.style.transform = '';
      }
    };
    
    const handlePointerLeave = () => {
      element.style.transform = '';
    };
    
    window.addEventListener('mousemove', handlePointerMove);
    element.addEventListener('mouseleave', handlePointerLeave);
    
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      element.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [strength, distance]);
  
  return ref;
};

export default useMagneticEffect;