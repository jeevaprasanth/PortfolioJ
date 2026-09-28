import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ strings, typeSpeed = 50, backSpeed = 30, className = '' }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentString.length) {
          setCurrentText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
