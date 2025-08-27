import Hero from './Hero'
import About from './About'
import ProjectPart from './ProjectPart'
import Partners from'./Partners'
import Contact from './Contact'
import AutismExplanation from './AutismExplanation'
import WhatWeDo from './WhatWeDo'

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <AutismExplanation />
        <About />
        <WhatWeDo />
        <ProjectPart />
        <Contact />
        <Partners/>
       
    </div>
  )
}

export default LandingPage