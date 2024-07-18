import React from 'react'
import TopNav from "./component/TopNav.jsx"
import BottomNav from "./component/BottomNav.jsx"
import Hero from "./component/Hero.jsx"
import About from "./component/About.jsx"
import Footer from './component/Footer.jsx'
import ProjectPart from './component/ProjectPart.jsx'
import Partners from './component/Partners.jsx'

const App = () => {
  return (
   <div>
    <TopNav />
    <BottomNav />
    <Hero />
    <About />
    <ProjectPart />
    <Partners />
    <Footer />
   </div>
  )
}

export default App