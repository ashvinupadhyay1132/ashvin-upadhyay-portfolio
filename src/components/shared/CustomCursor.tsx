import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobileOrTablet) {
      return () => window.removeEventListener('resize', checkDevice);
    }

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setHidden(false); // Only toggle visibility, don't set position here
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const updateLinkHovered = () => {
      const hoveredElements = document.querySelectorAll(
        'a:hover, button:hover, .hoverable:hover, input:hover, textarea:hover, select:hover, [role="button"]:hover, nav a:hover'
      );
      setLinkHovered(hoveredElements.length > 0);
    };

    const moveCursor = () => {
      const { x, y } = positionRef.current;
      if (cursorInnerRef.current)
        cursorInnerRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (cursorOuterRef.current)
        cursorOuterRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(moveCursor);
    };

    // Attach listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const interval = setInterval(updateLinkHovered, 50);
    moveCursor(); // Start cursor loop

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      clearInterval(interval);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobileOrTablet]);

  if (isMobileOrTablet) return null;

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`custom-cursor-outer fixed pointer-events-none z-[9999] ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          width: '40px',
          height: '40px',
          transition: 'all 0.15s ease-out, opacity 0.3s ease-in-out',
          willChange: 'transform',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="rgba(79, 70, 229, 0.6)"
            strokeWidth="1.5"
            className={`origin-center transition-transform duration-200 ${
              clicked ? 'scale-90' : ''
            } ${linkHovered ? 'animate-spin-slow' : ''}`}
          />
        </svg>
      </div>

      <div
        ref={cursorInnerRef}
        className={`custom-cursor-inner fixed pointer-events-none z-[9999] ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-50' : ''} ${linkHovered ? 'scale-0' : ''}`}
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'rgb(79, 70, 229)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out',
          boxShadow: '0 0 10px rgba(79, 70, 229, 0.3)',
          willChange: 'transform',
        }}
      />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        body {
          cursor: none !important;
        }

        a, button, .hoverable {
          cursor: none !important;
        }

        input, textarea, select {
          cursor: text !important;
        }

        [role="button"] {
          cursor: pointer !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
