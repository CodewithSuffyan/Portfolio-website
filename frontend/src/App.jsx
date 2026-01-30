import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import { useLoading } from './hooks/useLoading' 
import Loader from './components/Loader'        


import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  const loading = useLoading(2000); 

  if (loading) return < Loader />;

  return (
    <div className="fade-in">
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
    </div>
  )
}

export default App