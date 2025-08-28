import React from 'react'
import './Projects.css'
import PortfolioPic from '../../assets/Portfolio.jpg'
import ToDoApp from '../../assets/to-do-app.jpg'
import JacuzziRental from '../../assets/jacuzzi-rental.jpg'

const projectsData = [
    {
        tilte: "Portfolio Website",
        image: PortfolioPic,
        description: "My personal portfolio website built with React.js.",
        link: "https://github.com/tonpseudo/portfolio"
    },
    {
        tilte: "To do app",
        image: ToDoApp,
        description: "A simple ToDo application using React and localStorage.",
        link: "https://github.com/tonpseudo/to-do-app"
    },
    {
        tilte: "Jacuzzi Rental Website",
        image: JacuzziRental,
        description: "Full-featured jacuzzi rental site with database, client interface, delivery interface, and admin panel. ",
        link: "https://github.com/tonpseudo/allo-jacuzzi"
    },
    // Projets à rajouter
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
            {
                projectsData.map((project, index) => (
                    <div key={index} className='project-card'>
                        <img src={project.image} alt={project.tilte} />
                        <h3>{project.tilte}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div> 
                ))
            }
        </div>
    </section>
  )
}

export default Projects