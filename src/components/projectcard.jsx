import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, skills, image, isActive }) {
  return (
    <div className={`project-card ${isActive ? 'active' : 'inactive'}`}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-glass-overlay"></div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="skill-pills">
          {skills.map(skill => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
        <p className="card-description">{description}</p>
        <button className="p-button, card-button">See project details</button>
      </div>
    </div>
  );
}

export default ProjectCard;