import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>© {year} Yohan OLIVIER - All rights reserved. </p>
      <ul className='socials'>
        <li><a href="https://github.com/Yohan1107?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yohan-olivier-50aa571a0" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="mailto:olivieryohan60@gmail.com">Email</a></li>
      </ul>
    </footer>
  )
}

export default Footer