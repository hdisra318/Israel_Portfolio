import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import SocialLinks from './components/SocialLinks'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <SocialLinks />
    </>
  )
}

export default App
