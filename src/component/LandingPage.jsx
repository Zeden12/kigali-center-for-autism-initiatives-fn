import React from 'react'
import Hero from './Hero'
import About from './About'
import ProjectPart from './ProjectPart'
import Partners from'./Partners'
import Contact from './Contact'

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <About />
        <ProjectPart />
        <Contact />
        <Partners/>
       
    </div>
  )
}

export default LandingPage