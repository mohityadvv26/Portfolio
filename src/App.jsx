import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Skills from './components/Skills'


function App() {
  return (
    <>
     <div>
     <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
     </div>
     <Toaster />
    </>
  )
}

export default App
