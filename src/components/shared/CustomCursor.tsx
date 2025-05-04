import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    // Check if device is mobile or tablet
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Don't add other listeners if on mobile/tablet
    if (isMobileOrTablet) {
      return () => window.removeEventListener('resize', checkDevice);
    }

    // Rest of the cursor logic
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      // Ensure cursor is always visible during movement
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setHidden(false);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const updateLinkHovered = () => {
      const hoveredElements = document.querySelectorAll('a:hover, button:hover, .hoverable:hover, input, textarea, select, [role="button"]:hover, nav a:hover');
      setLinkHovered(hoveredElements.length > 0);
    };

    addEventListeners();
    const interval = setInterval(updateLinkHovered, 50);

    return () => {
      removeEventListeners();
      clearInterval(interval);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobileOrTablet]);

  // Don't render cursor on mobile/tablet
  if (isMobileOrTablet) {
    return null;
  }

  return (
    <>
      {/* Outer cursor ring */}
      <div
        className={`custom-cursor-outer fixed pointer-events-none z-[9999] ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          transform: 'translate(-50%, -50%)',
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

      {/* Inner cursor dot */}
      <div
        className={`custom-cursor-inner fixed pointer-events-none z-[9999] ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-50' : ''} ${linkHovered ? 'scale-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          backgroundColor: 'rgb(79, 70, 229)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
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