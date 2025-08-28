import React from 'react'
import './Skills.css'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaDatabase, FaJsSquare,FaCogs } from "react-icons/fa";
import { SiTypescript, SiSpring, SiPostgresql } from "react-icons/si";


const skillsData = [
    {name: "React", icon: <FaReact className='icon react'/>},
    {name: "JavaScript", icon: <FaJsSquare className='icon js'/>},
    {name: "Node.js", icon: <FaNodeJs className='icon node'/>},
    {name: "HTML5", icon: <FaHtml5 className='icon html'/>},
    {name: "CSS3", icon: <FaCss3Alt className='icon css'/>},
    {name: "TypeScript", icon: <SiTypescript className='icon ts'/>},
    {name: "Java", icon: <FaJava className='icon java'/>},
    {name: "Spring", icon: <SiSpring className='icon spring'/>},
    {name: "RESTful API", icon: <FaCogs className='icon api'/>},
    {name: "SQL", icon: <FaDatabase className='icon sql'/>},
    {name: "PostgreSQL", icon: <SiPostgresql className='icon pg'/>},

]

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <h2>My skills</h2>
        <div className="skills-container">
            {
                skillsData.map((skill,index) => (
                    <div key={index} className='skill'>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))            }
        </div>
    </section>
  )
}

export default Skills