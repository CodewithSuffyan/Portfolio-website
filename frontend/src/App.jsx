import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App