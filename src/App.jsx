import React from 'react'
import LandingPage from './component/LandingPage'
import ProjectPage from './component/ProjectPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route exact index element={<LandingPage />} />
          <Route exact path="/projects" element={<ProjectPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App