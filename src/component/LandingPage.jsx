import Hero from './Hero'
import About from './About'
import EventsTrainings from './EventsTrainings'
import Partners from'./Partners'
import Contact from './Contact'
import AutismExplanation from './AutismExplanation'
import WhatWeDo from './WhatWeDo'
import BlogsNews from './BlogsNews'

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <AutismExplanation />
        <About />
        <WhatWeDo />
        <EventsTrainings />
        <BlogsNews />
        <Contact />
        <Partners/>
       
    </div>
  )
}

export default LandingPage