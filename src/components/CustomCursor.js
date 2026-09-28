import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseEnterViewport = () => setIsVisible(true);
    const handleMouseLeaveViewport = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnterViewport);
    window.addEventListener('mouseleave', handleMouseLeaveViewport);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseup', handleMouseUp);
    });

    // Hide cursor on mobile devices
    if (window.innerWidth <= 768) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnterViewport);
      window.removeEventListener('mouseleave', handleMouseLeaveViewport);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor pointer-events-none fixed z-50"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicked ? 0.8 : isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(118, 75, 162, 0.3)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovering ? '#764ba2' : '#667eea'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          scale: {
            type: 'spring',
            stiffness: 1000,
            damping: 35
          }
        }}
        style={{
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
          border: '2px solid',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      >
        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicked ? 0 : 1,
            backgroundColor: isHovering ? '#764ba2' : '#667eea'
          }}
          transition={{
            duration: 0.2
          }}
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%'
          }}
        />
      </motion.div>

      {/* Trail effect */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-40"
          animate={{
            x: position.x - 3,
            y: position.y - 3,
            opacity: 0.3 - index * 0.1
          }}
          transition={{
            type: 'spring',
            stiffness: 300 - index * 50,
            damping: 20 - index * 5
          }}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#667eea',
            pointerEvents: 'none'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
