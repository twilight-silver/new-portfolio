import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // We'll create this CSS file next

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L6 8h4v12h4V8h4L12 2z"/>
      </svg>
    </div>
  );
};

export default BackToTopButton;