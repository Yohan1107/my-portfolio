import React from 'react'
import './App.css'
import Navbar from '/src/Components/Navbar/Navbar.jsx'
import Hero from '/src/Components/Hero/Hero.jsx'
import About from '/src/Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
