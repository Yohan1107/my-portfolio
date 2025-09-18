import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1>Hello, my name is <span>Yohan</span></h1>
      <p>Passionate web developer — I create modern and elegant websites.</p>
      <a  href="/public/CV-Yohan.pdf" download="Yohan-Olivier-CV.pdf" >Download my CV</a>
    </section>
  )
}

export default Hero