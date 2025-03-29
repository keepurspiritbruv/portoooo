import './App.css'
import Navbar from './components/Navbar'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom' 
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import ProjectCarousel from './components/ProjectCarousel'
import SelfProject from './components/selfproject'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about-me" className="section">
          <AboutMe />
        </section>
        <section id="portofolio" className="section">
          <ProjectCarousel />
        </section>
        <section id="self-project" className="section">
          <SelfProject />
        </section>
        <section id="cukidog" className="section">
          {/* Content for Cukidog section */}
        </section>
      </main>
      <Footer />
    </Router>
  )
}

export default App