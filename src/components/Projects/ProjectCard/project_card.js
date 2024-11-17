import React from 'react';
import './project_card.css';

const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className="project-card">
            <div className="project-card-bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="project-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;