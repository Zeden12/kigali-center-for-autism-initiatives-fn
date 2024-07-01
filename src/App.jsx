import React from 'react'
import TopNav from './component/TopNav'
import BottomNav from './component/BottomNav'
import Hero from './component/Hero'
import About from './component/About'
import ProjectView from './component/ProjectPart'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Hero />
      <About />
      <ProjectView />
      <Footer />
    </div>
  )
}

export default App