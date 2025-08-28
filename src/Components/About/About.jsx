import React from 'react'
import './About.css'
import profilePic from '../../assets/WhatsApp Image 2025-08-24 at 20.26.38.jpeg'
const About = () => {
  return (
    <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
            <img className='about-img' src={profilePic} alt="Olivier" />
            <div className="about-text">
                <p>
                    I am a passionate web developer with experience in building modern and responsive websites.
            I enjoy learning new technologies and creating projects that solve real-world problems.
                </p>
                <p>
                    
                </p>
            </div>
        </div>
    </section>
  )
}

export default About