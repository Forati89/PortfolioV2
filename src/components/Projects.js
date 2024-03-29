import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
        const { title, image, description, link } = props.project;

        return (
            <div style={{ width: 320, margin: 10,  display: 'table', display: 'inline-block' }}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{
                     width: 200,
                     height: 120,
                     boxShadow: '5px 10px 18px black',
                     maxHeight: '100%',
                     maxWidth: '100%',
                     objectFit: 'cover'
                    }} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div className='projectsDiv'>
            {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT} />
                    ))
            }
        </div>
    </div>
)

export default Projects;