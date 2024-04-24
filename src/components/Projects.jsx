import React from 'react';
import projectsData from '../data/portfolioData.json'; 

const Projects = () => {
    console.log(projectsData)
    return(
        <section id="projects">
            <h2>Projects</h2>
            <div id="project-container">
                {projectsData.map((project) => (
                <article key={project.id}>
                    <div className="project-cover">
                    {project.coverImage && (<img src={project.coverImage} alt={project.coverAlt} />)}
                    </div>
                    <div className="project-links">
                    {project.links && (
                        <>
                            {project.links.website && (
                                <a 
                                    href={project.links.website.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={`Visit ${project.title} website`}
                                >
                                    <img src={project.links.website.imgSrc} alt="Link" />
                                </a>
                            )}
                            {project.links.github && (
                                <a 
                                    target="_blank" 
                                    href={project.links.github.href}
                                    rel="noopener noreferrer" 
                                    aria-label={`Visit ${project.title} GitHub repository`}
                                >
                                    <img src={project.links.github.gitSrc} alt="GitHub" />
                                </a>
                            )}
                        </>
                    )}
                    </div>
                    <p>{project.description}</p>
                    <p className="languages">{project.languages.join(', ')}</p>
                </article>
                ))}
            </div>
        </section>
    )
}

export default Projects