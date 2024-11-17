import React from 'react';
import ProjectCard from './ProjectCard/project_card'; // Make sure to adjust the import path as needed
import FadeInSection from '../FadeInSection/fade_in_section';

const ProjectsView = ({ projects }) => {
    return (
        <div className="projects-view">
            {projects.map((project, index) => (
                <FadeInSection>
                <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} />
                </FadeInSection>
            ))}
        </div>
    );
};

export default ProjectsView;