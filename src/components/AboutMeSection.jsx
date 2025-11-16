import React from "react";
import "./AboutMe.css";

const AboutMe = ({id,scrollToSection}) => {
  return (
    <section className="aboutme" id= {id}>
        <h3 className="headline-header">ABOUT</h3>
         <h2 className="headline">The Face Behind the <span className="headline-accent">Experience</span></h2>
      <div className="aboutme-container">

        {/* Left side: text */}
        <div className="aboutme-left">
            <div className="aboutme-image">
          <img
            src="/src/assets/IMG-20250330-WA0004.jpg"
            alt="About Me"
          />
        </div>
        <div className="glass-circle1"></div>
        <div className="glass-circle2"></div>
        </div>
        
        
        {/* Right side: image */}
        <div className="aboutme-text">
          <p className="aboutme-paragraph">
            I am a Product Designer and UI/UX Specialist, passionate about crafting long lasting experiences that feel both exciting and intuitive. I believe that good design is a conversation and for me, color is my primary dialect.

Every project is a chance to speak through hue and shade. I use the language of color to guide users, evoke specific emotions, and tell a visual story that feels purposeful. <br /> <br />While I am fluent in the art of visual design and prototyping in Figma, my work is always grounded in function. I obsess over every detail, ensuring that the aesthetic serves a purpose and leads to a seamless, unforgettable experience.

I am always looking to collaborate with like-minded creative teams to build innovative products that solve real problems. If you are building a product that aims to create an unforgettable experience, let's have a chat.
          </p>
          <button className="p-button" 
          onClick={() => {scrollToSection('contact')}}
          >Let’s have a conversation</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
