import React, { useState } from 'react';
import './Header.css'; // We'll create this CSS file next

function Header({scrollToSection}) {
  const [activeLink, setActiveLink] = useState('Home'); // 'Home' is the default active link

  return (
    <header className="header">
      <div className="logo-section">
        <div className='logo'>
            <img src="/public/assets/My logo.png" alt="Logo" />
        </div>
      </div>
      <nav className="nav">
        <a 
          href="#home" 
          className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveLink('Home')}
        >
          Home
        </a>
        <a 
          href="#portfolio" 
          className={`nav-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
          onClick={() => {
            setActiveLink('Portfolio'); 
            scrollToSection('portfolio');
        }}
        >
          Portfolio
        </a>
        <a 
          href="#about" 
          className={`nav-link ${activeLink === 'About' ? 'active' : ''}`}
          onClick={() => {
            setActiveLink('About');
            scrollToSection('about');
        }}
        >
          About
        </a>
        <a 
          href="#contact" 
          className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
          onClick={() => {setActiveLink('Contact');
            scrollToSection('contact');
        }}
        >
          Contact
        </a>
      </nav>
      <button className='p-button'
        onClick={() => {scrollToSection('contact')}}
      >Build your experience</button>
    </header>
  );
}

export default Header;