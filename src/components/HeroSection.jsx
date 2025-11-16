import React, { useState } from 'react';
import './HeroSection.css'; // Import the CSS file

const heroCards = [
  { id: 1, title: 'Re-imagining digital health experience', content: 'Creating a calm and secure user experience leveraging color and copy to soothe anxiety. The core innovation was a hands-off emergency feature, designed to provide critical peace of mind when users need it most.', buttonText: 'See project details', destination: 'portfolio' },
  { id: 2, title: 'Elevating the alumni experience', content: 'Addressing a common industry challenge: high user churn in alumni platforms. By focusing on intuitive design and new interactive features, the goal was to transform a static directory into a dynamic, living community.', buttonText: 'See project details', destination: 'portfolio' },
  { id: 3, title: 'A case study in visual storytelling', content: 'Took on the challenge of transforming a traditional industry with modern design principles. The goal? To use visual storytelling and a clean user journey to build trust and make a direct-to-consumer model beautiful in its simplicity.', buttonText: 'See project details', destination: 'portfolio' },
];


function HeroSection({ scrollToSection }) {

  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Helper function to render a single card
  const renderCard = (card, positionClass) => (
    <div
      key={card.id}
      className={`hero-card ${positionClass} ${hoveredCardId === card.id ? 'hovered' : ''}`}
      onMouseEnter={() => setHoveredCardId(card.id)}
      onMouseLeave={() => setHoveredCardId(null)}
    >
      {/* Front of the card */}
      <div className="card-front">
        <img src="/assets/crown.svg" alt="crown" />
      </div>

      {/* Back of the card - THIS IS WHERE YOU ADD YOUR CONTENT */}
      <div className="card-back">
        <h3>{card.title}</h3>
        <p>{card.content}</p>
        <button 
          className="card-button" 
          onClick={(e) => {
            e.stopPropagation(); // Prevent the card from flipping back if button is clicked
            scrollToSection(card.destination); // Use the destination from heroCards
          }}
        >
          {card.buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <section className="hero-section">
      {/* Left Side - Text */}
      <div className="hero-text">
        <h1 className="hero-headline">
          Creating Unforgettable <span className="hero-headline-accent">Experiences</span>
        </h1>
        <p className="hero-subtext">
          One software product at a time...
        </p>
        <div className='button-ctn'>
          <button className="s-button" onClick={() => scrollToSection('portfolio')}>
            View Experiences
          </button>
          <button className='p-button' onClick={() => scrollToSection('contact')}>
            Build your experience
          </button>
        </div>
      </div>

      {/* Right Side - Pack of Cards */}
      <div className="hero-cards">
        {renderCard(heroCards[0], 'hero-card-left')}
        {renderCard(heroCards[1], 'hero-card-center')}
        {renderCard(heroCards[2], 'hero-card-right')}
      </div>
    </section>
  );
}

export default HeroSection;