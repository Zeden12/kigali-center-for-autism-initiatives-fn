import React from 'react'
import TopNav from './component/TopNav'
import BottomNav from './component/BottomNav'
import Hero from './component/Hero'
import About from './component/About'

const App = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Hero />
      <About />
    </div>
  )
}

export default App